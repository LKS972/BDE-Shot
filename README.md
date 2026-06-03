# 🔐 BDE SHOT — Site Officiel

> **Solidarité · Humour · Opportunités · Tech**  
> Bureau des Étudiants de Guardia Cybersecurity School · Quest Education 2026

---

## 📋 Présentation

Site web officiel du **BDE SHOT**, le bureau des étudiants de la filière cybersécurité de Guardia Cybersecurity School. Conçu avec une esthétique **cyberpunk noir & or**, il centralise les informations sur l'équipe, les événements, et les valeurs du BDE.

---

## ✨ Fonctionnalités

### Animations
| Effet | Description |
|---|---|
| **Matrix Rain** | Pluie de caractères dorés en arrière-plan (canvas) |
| **Particules dorées** | Particules flottantes générées dynamiquement (canvas) |
| **Glitch titre** | Effet glitch RGB sur "BDE SHOT" avec décalages couleur |
| **Typewriter** | Phrases cybersec qui s'écrivent/s'effacent en boucle |
| **Tilt 3D** | Rotation perspective des cartes au survol de la souris |
| **Terminal animé** | Terminal qui se tape ligne par ligne au scroll |
| **Compteurs** | Animation des chiffres au scroll (IntersectionObserver) |
| **Scroll Reveal** | Apparition fluide des sections au défilement |

### Sections
1. **Hero** — Titre géant animé + acronyme S·H·O·T + statistiques
2. **À propos** — Présentation + terminal interactif
3. **Valeurs** — 4 cartes Solidarité / Humour / Opportunités / Tech
4. **BDE Days** — Programme détaillé Round 01 & Round 02 (Quest Education 2026)
5. **Agenda** — Timeline des événements annuels (CTF, Conférences, Workshops)
6. **Bureau** — Roster complet de l'équipe + renforts
7. **Contact** — Informations de contact + logo

### Sécurité
- `Content-Security-Policy` configurée en meta tag
- `noindex, nofollow` — site non indexé par les moteurs de recherche
- `referrer: no-referrer` — aucune fuite de référent
- Clic droit désactivé
- Raccourcis DevTools bloqués (F12, Ctrl+Shift+I, Ctrl+U)
- Console JavaScript supprimée en production

---

## 🗂️ Structure du projet

```
site BDE/
├── index.html      # Page principale (single-page)
├── style.css       # Styles (variables CSS, animations, responsive)
├── app.js          # Logique JS (canvas, animations, interactions)
├── logo_bde.png    # Logo officiel BDE SHOT
└── README.md       # Ce fichier
```

---

## 🚀 Lancement

Aucun serveur requis. Ouvrir directement dans un navigateur :

```bash
# Option 1 — Double-clic sur index.html dans le Finder

# Option 2 — Serveur local rapide (Python)
cd "site BDE"
python3 -m http.server 8080
# → http://localhost:8080

# Option 3 — Serveur local (Node)
npx serve .
```

> ⚠️ Certaines fonctionnalités (fonts Google, CSP) nécessitent une connexion internet ou un serveur local.

---

## 🎨 Design System

### Palette de couleurs
| Rôle | Valeur | Aperçu |
|---|---|---|
| Or principal | `#C9A227` | Textes et bordures |
| Or lumineux | `#FFD700` | Titres et highlights |
| Or sombre | `#8B6914` | Accents discrets |
| Fond principal | `#000000` | Background global |
| Fond secondaire | `#0a0a0a` | Sections alternées |
| Carte | `#111114` | Composants cards |

### Typographies
| Usage | Police |
|---|---|
| Titres | `Orbitron` (Google Fonts) |
| Code / Mono | `Share Tech Mono` (Google Fonts) |
| Corps de texte | `Rajdhani` (Google Fonts) |

---

## 👥 L'équipe — Le Roster

| Poste | Nom |
|---|---|
| 🏆 Président | Léandre Jourdain |
| Secrétaire | Lukas Courdier |
| Trésorier | Mathieu Velay |
| Resp. Événementiel | Hachimi Sefiane |
| Resp. Partenariats | Alexandre Poulain |
| Resp. Vie Associative | Balthazar Remy-De-Cournon |
| Resp. Communication | Jérémy Allier |
| Renfort | Matys Mancel |
| Renfort | Quentin Legrand |
| Renfort | Ihsane Montagné |

---

## 📅 Événement phare — BDE Days 2026

### Round 01 · Le Warm-Up (Jour 01)
- Ouverture & lancement de la tombola
- Inscriptions au tournoi de jeux vidéo
- Créneaux de présentation des clubs (30 min chacun)
- Présentation du BDE SHOT
- Tirage au sort tombola
- Soirée au bar partenaire

### Round 02 · La Revanche (Jour 02)
- Olympiades × BDE Gaming
- Escape Game par équipes
- Clôture — temps fort commun

---

## 📬 Contact

**Email :** lcpetit@questeducation.fr  
**Organisateur :** Léandre Jourdain, Président du BDE SHOT  
**École :** Guardia Cybersecurity School · Quest Education

---

## 📄 Licence

© 2025–2026 BDE SHOT · Tous droits réservés.  
Usage interne uniquement — ne pas distribuer sans autorisation.
