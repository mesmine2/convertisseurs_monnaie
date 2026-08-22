# 💱 Convertisseur FCFA

Application web développée avec **Angular**, permettant de convertir instantanément entre le Franc CFA (XAF) et plusieurs devises internationales, avec un historique des conversions effectuées.

## Aperçu

- **Page Convertisseur** — formulaire de conversion en temps réel, tableau des taux actuels, présentation des atouts de l'outil.
- **Page Historique** — liste des conversions enregistrées avec statistiques (nombre de conversions, total converti) et horodatage.

## Fonctionnalités

- Conversion instantanée entre 5 devises (FCFA, Euro, Dollar US, Livre Sterling, Naira)
- Inversion rapide des devises source/cible en un clic
- Calcul entièrement réactif : le résultat se met à jour automatiquement à chaque saisie, sans rechargement
- Historique des conversions enregistrées, consultable sur une page dédiée
- Navigation entre les pages via le Router Angular
- Interface entièrement responsive (mobile, tablette, desktop)

## Stack technique

Construit avec **Angular** (dernière version), en suivant les pratiques modernes du framework :

- Composants **standalone**, sans NgModule
- **Signals** (`signal`, `computed`) pour un état entièrement réactif
- **Service Angular** (`@Injectable`, `inject()`) centralisant l'état partagé entre les pages
- **Router Angular** (`provideRouter`, `RouterLink`, `RouterOutlet`) pour la navigation multi-pages
- Pipes natifs (`DecimalPipe`, `DatePipe`) pour le formatage des données
- Nouvelle syntaxe de contrôle `@if` / `@for`
- Aucune dépendance externe pour la logique métier — calcul entièrement côté client

## Fonctionnement du calcul

Chaque devise est définie par son taux de conversion vers le FCFA. La conversion passe systématiquement par le FCFA comme devise pivot :

```
montant → FCFA (via la devise source) → devise cible
```

Le `computed()` du service recalcule automatiquement le résultat dès que le montant, la devise source ou la devise cible change, sans code de synchronisation manuel.

## Lancer le projet en local

```bash
npm install
ng serve -o
```

L'application s'ouvre sur `http://localhost:4200`.

## Limite connue

Les taux de change utilisés sont **fixes**, à but pédagogique et démonstratif. Ils ne reflètent pas des taux de change réels en temps réel (aucun appel à une API de change externe dans cette version).

## Démo en ligne

🔗 Voir le déploiement Vercel:https://convertisseurs-monnaie.vercel.app/

---

Projet réalisé dans le cadre de la formation **Angular Talent Lab 2026**.