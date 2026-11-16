/* Parcours propres à NAVA : filtres des réalisations (adresse, compte), visionneuse (ouverture, flèches, Échap, focus rendu),
   tiroirs des prestations (un seul ouvert, lien profond), rendez-vous en trois étapes (prérempli depuis « En parler »,
   choix obligatoires, confirmation qui remplace le formulaire), porte du placard (bouton qui s'ouvre et se ferme),
   statut du showroom (jamais d'heure inventée le dimanche). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  /* 1. Filtres et visionneuse, sur ordinateur. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    const lieu = { page: '/realisations', taille: '1366×768' };
    try {
      await page.goto(BASE + '/realisations', { waitUntil: 'load' });
      await attendrePret(page);
      const total = await page.locator('.real-item').count();
      await page.locator('[data-filtre="cuisines"]').click();
      await attendre(700);
      const r = await page.evaluate(() => ({
        visibles: [...document.querySelectorAll('.real-item')].filter((x) => !x.hidden).map((x) => x.dataset.piece),
        adresse: location.search, compte: document.querySelector('[data-compte]').textContent,
        presse: document.querySelector('[data-filtre="cuisines"]').getAttribute('aria-pressed'),
      }));
      if (!r.visibles.length || r.visibles.some((p) => p !== 'cuisines')) R.echec('filtres', `après « Cuisines » : ${r.visibles.join(', ') || 'aucune photo'}`, lieu);
      if (!/piece=cuisines/.test(r.adresse)) R.echec('filtres', `filtre absent de l’adresse (${r.adresse || 'vide'})`, lieu);
      if (!r.compte.includes(String(r.visibles.length))) R.echec('filtres', `compte « ${r.compte} » pour ${r.visibles.length} photos`, lieu);
      if (r.presse !== 'true') R.echec('filtres', 'bouton du filtre actif sans aria-pressed="true"', lieu);
      await page.locator('[data-filtre="toutes"]').click();
      await attendre(700);
      const tous = await page.evaluate(() => [...document.querySelectorAll('.real-item')].filter((x) => !x.hidden).length);
      if (tous !== total) R.echec('filtres', `« Toutes » montre ${tous} photos sur ${total}`, lieu);

      /* Visionneuse : clic, flèche, Échap, focus rendu à la vignette. */
      await page.locator('.real-item').nth(2).locator('a').click();
      await attendre(600);
      const ouverte = await page.evaluate(() => document.querySelector('[data-visionneuse]').open);
      if (!ouverte) R.echec('visionneuse', 'ne s’ouvre pas au clic sur une vignette', lieu);
      const avant = await page.evaluate(() => document.querySelector('[data-visionneuse] [data-legende]').textContent);
      await page.keyboard.press('ArrowRight'); await attendre(500);
      const apres = await page.evaluate(() => ({ leg: document.querySelector('[data-visionneuse] [data-legende]').textContent, hash: location.hash }));
      if (apres.leg === avant) R.echec('visionneuse', 'la flèche droite ne change pas de photo', lieu);
      if (!apres.hash.startsWith('#r-')) R.regarder('visionneuse', `adresse sans lien vers la photo (${apres.hash})`, lieu);
      await page.keyboard.press('Escape'); await attendre(500);
      const fin = await page.evaluate(() => ({ open: document.querySelector('[data-visionneuse]').open, focus: document.activeElement?.closest('.real-item')?.id || '' }));
      if (fin.open) R.echec('visionneuse', 'Échap ne ferme pas la visionneuse', lieu);
      if (!fin.focus) R.echec('visionneuse', 'le focus ne revient pas à une vignette après la fermeture', lieu);

      /* Lien profond vers une photo : elle s'ouvre. */
      await page.goto(BASE + '/realisations#r-evier-noir', { waitUntil: 'load' });
      await attendrePret(page); await attendre(900);
      const profonde = await page.evaluate(() => document.querySelector('[data-visionneuse]').open && document.querySelector('[data-legende]').textContent);
      if (!profonde) R.echec('visionneuse', 'le lien /realisations#r-evier-noir n’ouvre pas la photo', lieu);
      R.ok('filtres et visionneuse');
    } finally { await ctx.close(); }
  }

  /* 2. Tiroirs et porte du placard, sur l'accueil. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    const lieu = { page: '/', taille: '1366×768' };
    try {
      await page.goto(BASE + '/#dressing', { waitUntil: 'load' });
      await attendrePret(page); await attendre(400);
      const ouvertParAncre = await page.evaluate(() => document.querySelector('#dressing').classList.contains('est-ouvert'));
      if (!ouvertParAncre) R.echec('tiroirs', 'le lien /#dressing n’ouvre pas le tiroir Dressing', lieu);
      await page.locator('#salle-de-bain .ofr__poignee').click(); await attendre(700);
      const ouverts = await page.evaluate(() => [...document.querySelectorAll('.ofr__tiroir.est-ouvert')].map((t) => t.id));
      if (ouverts.length !== 1 || ouverts[0] !== 'salle-de-bain') R.echec('tiroirs', `tiroirs ouverts : ${ouverts.join(', ') || 'aucun'} (attendu : salle-de-bain seul)`, lieu);
      const lien = await page.evaluate(() => document.querySelector('#salle-de-bain .ofr__interieur a[href*="rendez-vous"]')?.getAttribute('href') || '');
      if (!/projet=salle-de-bain/.test(lien)) R.echec('tiroirs', `« En parler » sans le projet choisi (${lien})`, lieu);

      const porte = page.locator('#garantie [data-porte]');
      await porte.scrollIntoViewIfNeeded(); await attendre(900);
      await porte.click(); await attendre(1300);
      const a = await page.evaluate(() => document.querySelector('#garantie [data-porte]').getAttribute('aria-pressed'));
      await porte.click(); await attendre(1300);
      const b = await page.evaluate(() => document.querySelector('#garantie [data-porte]').getAttribute('aria-pressed'));
      if (a === b) R.echec('porte du placard', `le bouton ne change pas d’état (${a} puis ${b})`, lieu);
      R.ok('tiroirs et porte du placard');
    } finally { await ctx.close(); }
  }

  /* 3. Rendez-vous en trois étapes, au doigt, depuis « En parler » d'une prestation. */
  {
    const { ctx, page } = await contexte({ taille: T('390×844') });
    const lieu = { page: '/showroom', taille: '390×844' };
    try {
      await page.goto(BASE + '/showroom?projet=dressing#rendez-vous', { waitUntil: 'load' });
      await attendrePret(page); await attendre(400);
      const coche = await page.evaluate(() => document.querySelector('input[name="projet"]:checked')?.value || '');
      if (coche !== 'dressing') R.echec('rendez-vous', `projet non prérempli (${coche || 'aucun'} au lieu de dressing)`, lieu);
      await page.locator('[data-etape]:not([hidden]) [data-suivant]').click(); await attendre(600);
      /* Sans choix, l'étape 2 ne passe pas. */
      await page.locator('[data-etape]:not([hidden]) [data-suivant]').click(); await attendre(400);
      const bloque = await page.evaluate(() => ({ etape: [...document.querySelectorAll('[data-etape]')].findIndex((e) => !e.hidden), erreur: document.querySelector('[data-erreur-groupe="mode"]').textContent }));
      if (bloque.etape !== 1 || !bloque.erreur) R.echec('rendez-vous', 'l’étape 2 passe sans choix, ou sans message d’erreur', lieu);
      await page.locator('label:has(input[value="showroom"])').click();
      await page.locator('label:has(input[value="apres-midi"])').click();
      await page.locator('[data-etape]:not([hidden]) [data-suivant]').click(); await attendre(600);
      const recap = await page.evaluate(() => document.querySelector('[data-recap]').textContent);
      if (!/Dressing/.test(recap) || !/showroom/i.test(recap)) R.echec('rendez-vous', `récapitulatif incomplet (« ${recap} »)`, lieu);
      await page.fill('#f-prenom', 'Camille'); await page.fill('#f-nom', 'Martin');
      await page.fill('#f-email', 'pas-un-email'); await page.fill('#f-tel', '06 12 34 56 78');
      await page.locator('[type="submit"]').click(); await attendre(500);
      const refuse = await page.evaluate(() => document.querySelector('[data-merci]').hidden && document.querySelector('#f-email').getAttribute('aria-invalid') === 'true');
      if (!refuse) R.echec('rendez-vous', 'un e-mail invalide est accepté', lieu);
      await page.fill('#f-email', 'camille@exemple.fr');
      await page.locator('[type="submit"]').click(); await page.locator('[type="submit"]').click({ trial: true }).catch(() => {});
      await attendre(1400);
      const merci = await page.evaluate(() => {
        const m = document.querySelector('[data-merci]');
        const r = m.getBoundingClientRect();
        return { visible: !m.hidden && r.height > 0, titre: m.querySelector('[data-merci-titre]').textContent, simule: /rien n.a été envoyé/i.test(m.textContent) };
      });
      if (!merci.visible || !/Camille/.test(merci.titre)) R.echec('rendez-vous', `pas de confirmation après l’envoi (« ${merci.titre} »)`, lieu);
      if (!merci.simule) R.echec('rendez-vous', 'la confirmation ne dit pas que rien n’a été envoyé', lieu);
      R.ok('rendez-vous en trois étapes');
    } finally { await ctx.close(); }
  }

  /* 4. Statut du showroom : jamais d'heure annoncée un dimanche (horaires non communiqués). */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    try {
      await page.addInitScript(() => {
        const vrai = Date; const fixe = new vrai('2026-11-22T11:00:00+01:00').getTime();
        // eslint-disable-next-line no-global-assign
        Date = class extends vrai { constructor(...a) { super(...(a.length ? a : [fixe])); } static now() { return fixe; } };
      });
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await attendrePret(page);
      const t = await page.evaluate(() => document.querySelector('[data-statut-texte]').textContent);
      if (/ouvert|fermé|ouvre/i.test(t)) R.echec('statut du showroom', `un dimanche, le statut annonce « ${t} »`, { page: '/', taille: '1366×768' });
      R.ok('statut du showroom le dimanche');
    } finally { await ctx.close(); }
  }
}
