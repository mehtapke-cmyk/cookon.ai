# Cookon.ai

Site vitrine React/Vite pour Cookon.ai.

## Dossiers importants

- `apps/web` : code source du site.
- `dist/apps/web` : build de production généré par `npm run build`.
- `/Users/mehtapkeles/Desktop/cookonai.com-site-a-publier` : dossier prêt à téléverser sur GoDaddy.
- `/Users/mehtapkeles/Desktop/cookonai.com-site-a-publier.zip` : archive du même dossier.

## Google Analytics

1. Créer une propriété Google Analytics 4.
2. Copier l'identifiant de mesure, au format `G-XXXXXXXXXX`.
3. Créer un fichier `apps/web/.env` à partir de `apps/web/.env.example`.
4. Remplacer `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` par le vrai identifiant.
5. Relancer `npm run build`, puis publier le contenu de `dist/apps/web`.

## Formulaires

Par défaut, les formulaires ouvrent un email vers `contact@cookon.ai`.
Pour brancher un service externe comme Formspree, Web3Forms ou Make, renseigner `VITE_CONTACT_ENDPOINT` dans `apps/web/.env`, puis relancer le build.

## Commandes

```bash
npm install
npm run dev
npm run build
```
