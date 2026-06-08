# Coupe du Monde FIFA 2026™ — Rapport de Pronostics de la Phase de Groupes
### Modèle prédictif Monte-Carlo (50 000 simulations) · Données arrêtées au 8 juin 2026

---

## 1. Résumé exécutif

Ce rapport couvre l'intégralité de la phase de groupes du Mondial 2026 (48 équipes, 12 groupes de 4, **32 qualifiés** : les 2 premiers de chaque groupe + les 8 meilleurs troisièmes). La composition utilisée est celle du **tirage officiel du 5 décembre 2025** (Kennedy Center, Washington D.C.), complétée par les **vainqueurs des barrages de mars 2026** : tous les 48 participants sont désormais connus.

**Constats clés du modèle :**

- Quatre nations se détachent nettement comme têtes d'affiche du tournoi : **France, Espagne, Argentine, Angleterre** — les quatre premières du classement FIFA et, pour France/Angleterre/Espagne, les trois effectifs les plus valorisés.
- Les groupes les plus déséquilibrés (un favori écrasant) sont **H (Espagne), I (France), J (Argentine)** : probabilité de 1ère place > 65 %.
- Les groupes les plus ouverts sont **D (États-Unis/Turquie/Australie/Paraguay)** et **G (Belgique/Iran/Égypte)**, où la 2ᵉ et la 3ᵉ place se jouent dans un mouchoir.
- La course aux **8 meilleurs troisièmes** est d'une rare densité : les 12 candidats se tiennent dans une fourchette de probabilité de **20–29 %**, ce qui signifie qu'aucun troisième n'est assuré et que ~4 places se décideront à la différence de buts.

---

## 2. Méthodologie

Le modèle suit une approche de cabinet quantitatif, reproductible et documentée :

**a) Force des équipes.** Note de base = **points du Classement mondial FIFA au 1ᵉʳ avril 2026** (dernière édition officielle ; la suivante paraît le 10 juin). Top 10 : France 1877, Espagne 1876, Argentine 1875, Angleterre 1826, Portugal 1764, Brésil 1761, Pays-Bas 1758, Maroc 1756, Belgique 1735, Allemagne 1730. Les nations sans points publiés au 1ᵉʳ avril (barragistes, équipes hors top 50) ont reçu une note consolidée à partir de leur position de classement et de leur forme récente.

**b) Avantage géographique nord-américain.** Bonus appliqué à la note effective : **+70 pts** pour les trois hôtes (États-Unis, Mexique, Canada — avantage du public, du déplacement nul, de l'acclimatation), **+20 pts** pour les autres nations CONCACAF (Panama, Haïti, Curaçao), **+10 pts** pour les sélections CONMEBOL (fuseau et climat plus familiers). Europe, Afrique, Asie, Océanie : aucun bonus.

**c) Modèle de match (Poisson bivarié).** L'écart de note effective est converti en **buts attendus (xG)** pour chaque équipe : `λ = 1,35 ± 0,20 × (différence de note / 100)`, plancher 0,22. Le score de chaque match est tiré dans deux lois de Poisson indépendantes. Ce calibrage reproduit le taux historique de ~2,6 buts/match et un taux d'« upsets » réaliste en phase de groupes de Coupe du Monde.

**d) Simulation.** **50 000 tournois complets** (les 72 matchs de groupe) ont été simulés. Pour chacun : classement des groupes selon **points → différence de buts → buts marqués → note FIFA**, identification des 12 troisièmes, classement de ces troisièmes et sélection des 8 meilleurs selon les mêmes critères officiels. Les pourcentages ci-dessous sont les fréquences observées sur 50 000 itérations.

**e) Scores pronostiqués.** Pour chaque match, le « score le plus probable » est le **mode** de la distribution conjointe de Poisson (résultat exact le plus fréquent). Le classement final prévisionnel découle de ces scores modaux ; il peut différer marginalement du classement probabiliste lorsque deux équipes sont quasi à égalité (cas signalés).

> **Limite assumée :** un modèle fondé sur la note FIFA et la valeur d'effectif ne capte pas parfaitement la forme de juin, les blessures de dernière minute, ni les dynamiques de vestiaire. Les facteurs qualitatifs (Haaland pour la Norvège, jeunesse de l'Espagne, etc.) sont commentés dans le texte mais **non** ré-injectés dans les probabilités, qui restent purement quantitatives.

---

## 3. Analyse des 12 groupes

> Légende des tableaux : **P1–P4** = probabilité de finir 1er/2e/3e/4e ; **Pts/BP/BC/Dif** = espérance de points, buts pour, buts contre, différence ; **Qual.** = probabilité totale de qualification (top 2 + meilleur 3e) ; **3e Q.** = probabilité d'être qualifié comme l'un des 8 meilleurs troisièmes.

---

### GROUPE A — Mexique, Afrique du Sud, Corée du Sud, Rép. tchèque
*Sites : Mexico, Guadalajara, Monterrey (hôte mexicain).*

Groupe ouvert derrière un favori clair. Le **Mexique** (15ᵉ FIFA, +70 d'avantage hôte) bénéficie de l'altitude de Mexico et d'un public acquis ; il domine les probabilités de tête. La **Corée du Sud** (25ᵉ), athlétique et expérimentée (Son, Kim Min-jae), est la principale rivale pour la 2ᵉ place. La **Rép. tchèque** (41ᵉ), solide collectivement mais en reconstruction offensive, et l'**Afrique du Sud** (revenue au Mondial, jeune et rapide) se disputent surtout la 3ᵉ place et un strapontin de meilleur troisième.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Mexique** | 58,3 % | 25,0 % | 11,8 % | 5,0 % | 6,12 | 5,52 | 2,56 | +2,96 | **92,9 %** | 9,7 % |
| **Corée du Sud** | 22,2 % | 33,8 % | 26,4 % | 17,6 % | 4,34 | 4,20 | 3,90 | +0,31 | **75,0 %** | 19,0 % |
| Rép. tchèque | 12,2 % | 24,1 % | 32,4 % | 31,3 % | 3,40 | 3,50 | 4,60 | −1,10 | 57,7 % | 21,4 % |
| Afrique du Sud | 7,3 % | 17,1 % | 29,5 % | 46,1 % | 2,72 | 2,97 | 5,13 | −2,17 | 43,0 % | 18,6 % |

**Scores pronostiqués (modaux) :** Mexique 1-0 Afrique du Sud · Mexique 1-1 Corée du Sud · Mexique 1-0 Rép. tchèque · Afrique du Sud 1-1 Corée du Sud · Afrique du Sud 1-1 Rép. tchèque · Corée du Sud 1-1 Rép. tchèque.

**Classement final prévisionnel :** 1. **Mexique** 7 pts (+2) · 2. **Corée du Sud** 3 pts (0, départage BP) · 3. Rép. tchèque 2 pts (−1) · 4. Afrique du Sud 2 pts (−1).

**Qualifiés directs :** Mexique, Corée du Sud. **Meilleur 3e :** la Rép. tchèque (21,4 %) est le candidat le plus probable mais reste sous la barre des qualifiés ; chance modérée.

---

### GROUPE B — Suisse, Canada, Qatar, Bosnie-Herzégovine
*Sites : Toronto, Vancouver (hôte canadien).*

Duel de tête entre la **Suisse** (19ᵉ, rigueur défensive éprouvée, seule du groupe à avoir un historique récent de huitièmes) et le **Canada** (hôte, +70), porté par Davies et David et par l'avantage du terrain à Toronto/Vancouver. Le modèle les sépare de peu. Le **Qatar** (champion d'Asie en titre, mais 55ᵉ) joue sa survie pour la 3ᵉ place ; la **Bosnie** (barragiste, dépendante de Džeko et Tabaković) part en outsider.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Suisse** | 44,1 % | 30,7 % | 17,2 % | 8,0 % | 5,49 | 5,06 | 3,05 | +2,01 | **88,3 %** | 13,5 % |
| **Canada** | 37,6 % | 33,0 % | 19,8 % | 9,6 % | 5,21 | 4,85 | 3,24 | +1,61 | **85,9 %** | 15,3 % |
| Qatar | 12,2 % | 22,0 % | 34,4 % | 31,4 % | 3,37 | 3,48 | 4,63 | −1,15 | 56,9 % | 22,8 % |
| Bosnie | 6,2 % | 14,3 % | 28,6 % | 51,0 % | 2,52 | 2,81 | 5,28 | −2,47 | 38,1 % | 17,7 % |

**Scores pronostiqués :** Suisse 1-1 Canada · Suisse 1-0 Qatar · Suisse 1-0 Bosnie · Canada 1-1 Qatar · Canada 1-0 Bosnie · Qatar 1-1 Bosnie.

**Classement final prévisionnel :** 1. **Suisse** 7 pts (+2) · 2. **Canada** 5 pts (+1) · 3. Qatar 2 pts (−1) · 4. Bosnie 1 pt (−2).

**Qualifiés directs :** Suisse, Canada. **Meilleur 3e :** Qatar (22,8 %) est le 3e le plus probable du groupe et l'un des mieux placés du tournoi — chance réelle mais non garantie.

---

### GROUPE C — Brésil, Maroc, Écosse, Haïti
*Le « choc » du premier tour : Brésil-Maroc dès l'entame.*

Deux poids lourds pour deux billets. Le **Brésil** (6ᵉ) et le **Maroc** (8ᵉ, demi-finaliste 2022, meilleure nation africaine) sont quasi au coude-à-coude ; le modèle leur donne des espérances de points et de différence de buts identiques (+2,9). Leur confrontation directe sera décisive pour la tête. L'**Écosse** (43ᵉ) est la mieux armée pour la 3ᵉ place et figure même en tête de la course aux meilleurs troisièmes. **Haïti** (barragiste CONCACAF, premier Mondial depuis 1974) ferme la marche.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Brésil** | 47,7 % | 35,6 % | 13,5 % | 3,2 % | 6,02 | 5,49 | 2,59 | +2,90 | **94,2 %** | 10,9 % |
| **Maroc** | 43,3 % | 38,1 % | 14,9 % | 3,8 % | 5,85 | 5,38 | 2,73 | +2,65 | **93,1 %** | 11,8 % |
| Écosse | 7,4 % | 19,8 % | 45,9 % | 26,9 % | 3,20 | 3,30 | 4,77 | −1,47 | 55,8 % | **28,6 %** |
| Haïti | 1,6 % | 6,5 % | 25,7 % | 66,1 % | 1,68 | 2,02 | 6,09 | −4,08 | 20,8 % | 12,6 % |

**Scores pronostiqués :** Brésil 1-1 Maroc · Brésil 1-0 Écosse · Brésil 2-0 Haïti · Maroc 1-0 Écosse · Maroc 2-0 Haïti · Écosse 1-1 Haïti.

**Classement final prévisionnel :** 1. **Brésil** 7 pts (+3, départage BP) · 2. **Maroc** 7 pts (+3) · 3. Écosse 1 pt (−2) · 4. Haïti 1 pt (−4).

**Qualifiés directs :** Brésil, Maroc. **Meilleur 3e :** **Écosse — meilleur candidat de tout le tournoi (28,6 %)**. Très bonne chance d'accrocher l'une des 8 places.

---

### GROUPE D — États-Unis, Turquie, Australie, Paraguay
*Le groupe le plus indécis derrière l'hôte.*

Les **États-Unis** (16ᵉ, +70) partent favoris à domicile, mais la lutte pour les places restantes est la plus serrée du tournoi : la **Turquie** (26ᵉ, génération Güler/Yıldız, 2ᵉ effectif africain… pardon, l'un des effectifs européens montants à ~494 M€), l'**Australie** (27ᵉ, rigueur et condition physique) et le **Paraguay** (40ᵉ, bloc défensif sud-américain) se tiennent en quelques centièmes de probabilité. Trois équipes entre 65 % et 66 % de qualification : c'est un groupe à différence de buts.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **États-Unis** | 49,9 % | 26,3 % | 15,6 % | 8,1 % | 5,63 | 5,15 | 2,96 | +2,18 | **89,0 %** | 12,8 % |
| **Turquie** | 19,7 % | 27,0 % | 27,5 % | 25,8 % | 3,91 | 3,89 | 4,21 | −0,32 | **66,1 %** | 19,3 % |
| Australie | 18,9 % | 26,4 % | 28,6 % | 26,2 % | 3,85 | 3,85 | 4,25 | −0,40 | 65,6 % | 20,4 % |
| Paraguay | 11,5 % | 20,3 % | 28,3 % | 39,9 % | 3,13 | 3,32 | 4,78 | −1,46 | 51,0 % | 19,2 % |

**Scores pronostiqués :** États-Unis 1-1 Turquie · États-Unis 1-1 Australie · États-Unis 1-0 Paraguay · Turquie 1-1 Australie · Turquie 1-1 Paraguay · Australie 1-1 Paraguay.

**Classement final prévisionnel :** 1. **États-Unis** 5 pts (+1) · 2. **Turquie** 3 pts (0, départage BP/note) · 3. Australie 3 pts (0) · 4. Paraguay 2 pts (−1). *(2e–3e quasi indissociables.)*

**Qualifiés directs :** États-Unis, Turquie (marge infime sur l'Australie). **Meilleur 3e :** le perdant Turquie/Australie est un sérieux candidat (~20 %).

---

### GROUPE E — Allemagne, Équateur, Côte d'Ivoire, Curaçao
*Sites partagés (Allemagne ouvre face à Curaçao le 14 juin).*

L'**Allemagne** (10ᵉ, sous Nagelsmann) est la favorite logique et vise la 1ère place sans trembler. L'**Équateur** (23ᵉ, défense la plus hermétique des qualifs sud-américaines, +10) est un 2ᵉ solide et même un candidat sérieux. La **Côte d'Ivoire** (34ᵉ mais **effectif le plus cher d'Afrique, ~531 M€**) a les individualités pour bousculer la hiérarchie et figure parmi les meilleurs troisièmes potentiels. **Curaçao** (barragiste, première participation historique) est le Petit Poucet du groupe.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Allemagne** | 54,5 % | 27,2 % | 13,8 % | 4,4 % | 6,03 | 5,49 | 2,62 | +2,87 | **93,1 %** | 11,3 % |
| **Équateur** | 26,2 % | 34,4 % | 27,1 % | 12,3 % | 4,69 | 4,47 | 3,63 | +0,84 | **80,7 %** | 20,0 % |
| Côte d'Ivoire | 15,9 % | 28,2 % | 35,3 % | 20,5 % | 3,92 | 3,90 | 4,20 | −0,30 | 68,7 % | **24,6 %** |
| Curaçao | 3,3 % | 10,1 % | 23,9 % | 62,7 % | 1,98 | 2,35 | 5,76 | −3,41 | 26,9 % | 13,5 % |

**Scores pronostiqués :** Allemagne 1-1 Équateur · Allemagne 1-0 Côte d'Ivoire · Allemagne 2-0 Curaçao · Équateur 1-1 Côte d'Ivoire · Équateur 1-0 Curaçao · Côte d'Ivoire 1-0 Curaçao.

**Classement final prévisionnel :** 1. **Allemagne** 7 pts (+3) · 2. **Équateur** 5 pts (+1) · 3. Côte d'Ivoire 4 pts (0) · 4. Curaçao 0 pt (−4).

**Qualifiés directs :** Allemagne, Équateur. **Meilleur 3e :** la Côte d'Ivoire (24,6 %) est l'un des troisièmes les plus dangereux — bonne chance.

---

### GROUPE F — Pays-Bas, Japon, Suède, Tunisie
*Sites côte Est / Mexique.*

Les **Pays-Bas** (7ᵉ) dominent et le **Japon** (18ᵉ, premier qualifié au monde pour 2026, collectif huilé) s'impose comme un 2ᵉ très fiable. La bagarre pour la 3ᵉ place oppose la **Suède** (38ᵉ, renaissance offensive autour de sa nouvelle génération) à la **Tunisie** (44ᵉ, bloc défensif discipliné). Groupe à hiérarchie nette en haut, ouvert en bas.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Pays-Bas** | 51,3 % | 27,8 % | 14,4 % | 6,4 % | 5,79 | 5,30 | 2,82 | +2,47 | **90,8 %** | 11,7 % |
| **Japon** | 29,7 % | 33,4 % | 23,0 % | 13,9 % | 4,75 | 4,52 | 3,61 | +0,91 | **80,1 %** | 17,0 % |
| Suède | 10,7 % | 21,1 % | 32,2 % | 36,1 % | 3,18 | 3,34 | 4,78 | −1,45 | 53,0 % | 21,2 % |
| Tunisie | 8,4 % | 17,6 % | 30,4 % | 43,6 % | 2,85 | 3,09 | 5,03 | −1,93 | 45,3 % | 19,3 % |

**Scores pronostiqués :** Pays-Bas 1-1 Japon · Pays-Bas 1-0 Suède · Pays-Bas 1-0 Tunisie · Japon 1-1 Suède · Japon 1-0 Tunisie · Suède 1-1 Tunisie.

**Classement final prévisionnel :** 1. **Pays-Bas** 7 pts (+2) · 2. **Japon** 5 pts (+1) · 3. Suède 2 pts (−1) · 4. Tunisie 1 pt (−2).

**Qualifiés directs :** Pays-Bas, Japon. **Meilleur 3e :** Suède (21,2 %) légèrement devant la Tunisie — chance moyenne.

---

### GROUPE G — Belgique, Iran, Égypte, Nouvelle-Zélande
*Groupe ouvert pour les places de qualification après la Belgique.*

La **Belgique** (9ᵉ, génération expérimentée De Bruyne/Lukaku) est favorite, mais la 2ᵉ et la 3ᵉ place sont très disputées entre l'**Iran** (21ᵉ, l'une des meilleures défenses asiatiques, très difficile à manœuvrer) et l'**Égypte** (31ᵉ, portée par Salah). Le modèle place ces trois équipes à 5 points dans le scénario modal — un groupe à suspense. La **Nouvelle-Zélande** (océanienne, 86ᵉ) est largement distancée.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Belgique** | 52,5 % | 28,6 % | 15,3 % | 3,7 % | 6,02 | 5,51 | 2,60 | +2,91 | **93,8 %** | 12,8 % |
| **Iran** | 27,3 % | 34,1 % | 28,6 % | 10,0 % | 4,81 | 4,56 | 3,52 | +1,04 | **82,8 %** | 21,4 % |
| Égypte | 18,4 % | 30,3 % | 36,2 % | 15,2 % | 4,21 | 4,11 | 3,98 | +0,13 | 74,4 % | **25,7 %** |
| Nouvelle-Zélande | 1,8 % | 7,0 % | 20,0 % | 71,2 % | 1,63 | 2,02 | 6,09 | −4,08 | 19,5 % | 10,6 % |

**Scores pronostiqués :** Belgique 1-1 Iran · Belgique 1-1 Égypte · Belgique 2-0 N.-Zélande · Iran 1-1 Égypte · Iran 1-0 N.-Zélande · Égypte 1-0 N.-Zélande.

**Classement final prévisionnel :** 1. **Belgique** 5 pts (+2) · 2. **Iran** 5 pts (+1) · 3. Égypte 5 pts (+1, départage défavorable) · 4. N.-Zélande 0 pt (−4). *(Top 3 à égalité de points : la différence de buts est reine.)*

**Qualifiés directs :** Belgique, Iran. **Meilleur 3e :** **l'Égypte (25,7 %) est le 3ᵉ le mieux placé du groupe et le 3ᵉ candidat le plus probable du tournoi** — très bonne chance.

---

### GROUPE H — Espagne, Uruguay, Arabie saoudite, Cap-Vert
*Le groupe le plus déséquilibré au sommet.*

L'**Espagne** (2ᵉ FIFA, championne d'Europe en titre, milieu de terrain le plus dominateur du monde) survole : 70 % de chances de finir 1ère, espérance de 7 points. L'**Uruguay** (17ᵉ, +10, expérience et solidité de Bielsa) est un dauphin très solide. Derrière, l'écart est abyssal : l'**Arabie saoudite** (55ᵉ) et le **Cap-Vert** (première participation historique, ~70ᵉ) ferment la marche, candidats lointains au statut de meilleur troisième.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Espagne** | 70,0 % | 24,0 % | 5,1 % | 0,9 % | 7,01 | 6,32 | 1,78 | +4,55 | **98,3 %** | 4,2 % |
| **Uruguay** | 24,9 % | 49,3 % | 19,0 % | 6,8 % | 5,13 | 4,79 | 3,31 | +1,48 | **87,5 %** | 13,4 % |
| Arabie saoudite | 3,2 % | 15,5 % | 41,4 % | 39,8 % | 2,54 | 2,73 | 5,38 | −2,65 | 40,7 % | 22,0 % |
| Cap-Vert | 1,9 % | 11,2 % | 34,5 % | 52,4 % | 2,10 | 2,36 | 5,73 | −3,38 | 30,3 % | 17,2 % |

**Scores pronostiqués :** Espagne 1-0 Uruguay · Espagne 2-0 Arabie saoudite · Espagne 2-0 Cap-Vert · Uruguay 1-0 Arabie saoudite · Uruguay 1-0 Cap-Vert · Arabie saoudite 1-1 Cap-Vert.

**Classement final prévisionnel :** 1. **Espagne** 9 pts (+5) · 2. **Uruguay** 6 pts (+1) · 3. Arabie saoudite 1 pt (−3) · 4. Cap-Vert 1 pt (−3).

**Qualifiés directs :** Espagne, Uruguay. **Meilleur 3e :** l'Arabie saoudite (22,0 %) est mieux placée que le Cap-Vert, mais sa faible différence de buts attendue la pénalise dans la course transversale.

---

### GROUPE I — France, Sénégal, Norvège, Irak
*Le groupe de l'équipe n°1 mondiale.*

La **France** (1ère FIFA, effectif le plus cher du tournoi à 1,53 Md€) est la favorite la plus marquée de tout le premier tour avec la quasi-certitude (96 %) de se qualifier et 66 % de finir 1ère. Le **Sénégal** (14ᵉ, champion d'Afrique 2022, profondeur de banc supérieure) est le dauphin désigné. La **Norvège** — sous-cotée par le classement (31ᵉ) mais portée par **Haaland** et Ødegaard — est le principal danger pour la 2ᵉ place et un excellent candidat au meilleur troisième ; **c'est l'équipe dont le potentiel réel dépasse le plus sa note FIFA.** L'**Irak** (barragiste interconfédérations) complète le groupe.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **France** | 65,6 % | 23,9 % | 8,2 % | 2,3 % | 6,61 | 5,93 | 2,17 | +3,76 | **96,4 %** | 7,0 % |
| **Sénégal** | 22,9 % | 40,2 % | 24,8 % | 12,1 % | 4,66 | 4,44 | 3,67 | +0,77 | **80,6 %** | 17,5 % |
| Norvège | 8,3 % | 23,3 % | 37,8 % | 30,7 % | 3,22 | 3,32 | 4,76 | −1,43 | 55,5 % | **23,9 %** |
| Irak | 3,2 % | 12,7 % | 29,2 % | 54,9 % | 2,20 | 2,50 | 5,60 | −3,10 | 32,0 % | 16,1 % |

**Scores pronostiqués :** France 1-0 Sénégal · France 2-0 Norvège · France 2-0 Irak · Sénégal 1-1 Norvège · Sénégal 1-0 Irak · Norvège 1-1 Irak.

**Classement final prévisionnel :** 1. **France** 9 pts (+5) · 2. **Sénégal** 4 pts (0) · 3. Norvège 2 pts (−2) · 4. Irak 1 pt (−3).

**Qualifiés directs :** France, Sénégal. **Meilleur 3e :** la Norvège (23,9 %) est un candidat de premier plan — le facteur Haaland (non modélisé) rend cette probabilité prudente, sa chance réelle est probablement supérieure.

---

### GROUPE J — Argentine, Autriche, Algérie, Jordanie
*Le groupe du champion du monde en titre.*

L'**Argentine** (3ᵉ FIFA, championne du monde 2022, +10) écrase la concurrence : 73 % de finir 1ère. Derrière, l'**Autriche** (24ᵉ, collectif rigoureux de Rangnick) et l'**Algérie** (28ᵉ, talent offensif réel) se disputent la 2ᵉ place à quasi-égalité. La **Jordanie** (finaliste surprise de la Coupe d'Asie 2023 mais 62ᵉ, **effectif le moins cher du tournoi à 19,8 M€**) est l'outsider.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Argentine** | 73,1 % | 19,4 % | 6,1 % | 1,4 % | 6,97 | 6,26 | 1,85 | +4,41 | **97,8 %** | 5,3 % |
| **Autriche** | 13,7 % | 36,7 % | 32,2 % | 17,5 % | 4,03 | 3,95 | 4,17 | −0,22 | **71,5 %** | 21,2 % |
| Algérie | 10,9 % | 32,0 % | 35,5 % | 21,6 % | 3,72 | 3,72 | 4,41 | −0,69 | 65,9 % | **22,9 %** |
| Jordanie | 2,2 % | 12,0 % | 26,2 % | 59,6 % | 2,00 | 2,30 | 5,81 | −3,50 | 27,7 % | 13,5 % |

**Scores pronostiqués :** Argentine 1-0 Autriche · Argentine 1-0 Algérie · Argentine 2-0 Jordanie · Autriche 1-1 Algérie · Autriche 1-0 Jordanie · Algérie 1-1 Jordanie.

**Classement final prévisionnel :** 1. **Argentine** 9 pts (+4) · 2. **Autriche** 4 pts (0) · 3. Algérie 2 pts (−1) · 4. Jordanie 1 pt (−3).

**Qualifiés directs :** Argentine, Autriche (marge mince sur l'Algérie). **Meilleur 3e :** l'Algérie (22,9 %), 3ᵉ le plus probable du groupe, a une bonne chance d'accrocher l'une des 8 places.

---

### GROUPE K — Portugal, Colombie, RD Congo, Ouzbékistan
*Deux favoris confirmés, deux barragistes ambitieux.*

Le **Portugal** (5ᵉ, génération dorée autour de Bruno Fernandes, et toujours Ronaldo en figure de proue) et la **Colombie** (13ᵉ, +10, James Rodríguez et une attaque en forme) sont deux qualifiés très probables qui se disputeront surtout l'ordre. La **RD Congo** (46ᵉ, qualifiée via le barrage interconfédérations, athlétique) et l'**Ouzbékistan** (50ᵉ, première participation historique) se battront pour la 3ᵉ place.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Portugal** | 50,1 % | 30,6 % | 13,8 % | 5,4 % | 5,85 | 5,35 | 2,76 | +2,58 | **91,9 %** | 11,2 % |
| **Colombie** | 35,9 % | 35,4 % | 19,4 % | 9,3 % | 5,21 | 4,85 | 3,25 | +1,60 | **86,1 %** | 14,8 % |
| RD Congo | 7,4 % | 17,6 % | 34,4 % | 40,6 % | 2,83 | 3,06 | 5,04 | −1,98 | 46,1 % | 21,1 % |
| Ouzbékistan | 6,6 % | 16,4 % | 32,3 % | 44,7 % | 2,70 | 2,95 | 5,15 | −2,20 | 42,9 % | 19,9 % |

**Scores pronostiqués :** Portugal 1-1 Colombie · Portugal 1-0 RD Congo · Portugal 1-0 Ouzbékistan · Colombie 1-0 RD Congo · Colombie 1-0 Ouzbékistan · RD Congo 1-1 Ouzbékistan.

**Classement final prévisionnel :** 1. **Portugal** 7 pts (+2, départage BP) · 2. **Colombie** 7 pts (+2) · 3. RD Congo 1 pt (−2) · 4. Ouzbékistan 1 pt (−2).

**Qualifiés directs :** Portugal, Colombie. **Meilleur 3e :** RD Congo (21,1 %) devant l'Ouzbékistan — chance moyenne, juste sous la barre.

---

### GROUPE L — Angleterre, Croatie, Panama, Ghana
*Sites côte Est.*

L'**Angleterre** (4ᵉ, parcours de qualification parfait — 6 victoires en 6 matchs, attaque prolifique) est nettement favorite. La **Croatie** (11ᵉ, finaliste 2018 / 3ᵉ 2022, expérience inégalée même si vieillissante) est le dauphin logique. Le **Panama** (33ᵉ, +20 d'avantage continental, physique et bien organisé) est mieux placé que son rang ne le laisse croire et figure parmi les meilleurs troisièmes potentiels. Le **Ghana** (73ᵉ, jeune mais irrégulier) part dernier.

| Équipe | P1 | P2 | P3 | P4 | Pts | BP | BC | Dif | Qual. | 3e Q. |
|---|---|---|---|---|---|---|---|---|---|---|
| **Angleterre** | 56,2 % | 29,2 % | 11,9 % | 2,8 % | 6,27 | 5,68 | 2,40 | +3,28 | **95,2 %** | 9,9 % |
| **Croatie** | 31,1 % | 38,9 % | 22,7 % | 7,4 % | 5,17 | 4,83 | 3,27 | +1,56 | **87,1 %** | 17,2 % |
| Panama | 10,8 % | 24,3 % | 41,5 % | 23,3 % | 3,53 | 3,59 | 4,52 | −0,93 | 62,3 % | **27,1 %** |
| Ghana | 1,9 % | 7,6 % | 23,9 % | 66,5 % | 1,74 | 2,09 | 6,01 | −3,92 | 21,8 % | 12,2 % |

**Scores pronostiqués :** Angleterre 1-1 Croatie · Angleterre 1-0 Panama · Angleterre 2-0 Ghana · Croatie 1-1 Panama · Croatie 2-0 Ghana · Panama 1-0 Ghana.

**Classement final prévisionnel :** 1. **Angleterre** 7 pts (+3) · 2. **Croatie** 5 pts (+2) · 3. Panama 4 pts (0) · 4. Ghana 0 pt (−5).

**Qualifiés directs :** Angleterre, Croatie. **Meilleur 3e :** **le Panama (27,1 %) est le 2ᵉ meilleur candidat de tout le tournoi**, dopé par son avantage continental — très bonne chance.

---

## 4. Classement des 12 troisièmes et sélection des 8 qualifiés

Pour chaque groupe, le troisième **le plus probable** est identifié, puis les 12 sont classés selon leur probabilité d'accrocher l'une des 8 places de meilleur troisième (qui intègre points attendus, différence de buts et note). **La densité est extrême : les 12 candidats se tiennent en 8 points de pourcentage.**

| Rang | Troisième probable | Groupe | P(finir 3e) | P(qualifié comme meilleur 3e) | Verdict |
|---|---|---|---|---|---|
| 1 | **Écosse** | C | 45,9 % | 28,6 % | ✅ Qualifié |
| 2 | **Panama** | L | 41,5 % | 27,1 % | ✅ Qualifié |
| 3 | **Égypte** | G | 36,2 % | 25,7 % | ✅ Qualifié |
| 4 | **Côte d'Ivoire** | E | 35,3 % | 24,6 % | ✅ Qualifié |
| 5 | **Norvège** | I | 37,8 % | 23,9 % | ✅ Qualifié |
| 6 | **Algérie** | J | 35,5 % | 22,9 % | ✅ Qualifié |
| 7 | **Qatar** | B | 34,4 % | 22,8 % | ✅ Qualifié |
| 8 | **Arabie saoudite** | H | 41,4 % | 22,0 % | ✅ Qualifié (dernier billet) |
| — | Rép. tchèque | A | 32,4 % | 21,4 % | ❌ Éliminé (1ᵉʳ recalé) |
| — | Suède | F | 32,2 % | 21,2 % | ❌ Éliminé |
| — | RD Congo | K | 34,4 % | 21,1 % | ❌ Éliminé |
| — | Australie | D | 28,6 % | 20,4 % | ❌ Éliminé |

> **Lecture consultant :** la frontière qualification/élimination se joue entre **22,0 % (Arabie saoudite, 8ᵉ)** et **21,4 % (Rép. tchèque, 9ᵉ)** — un écart de 0,6 point. Dans la réalité, ces quatre derniers billets se décideront **à la différence de buts**, voire aux buts marqués, exactement comme en 2018 (24 équipes) où plusieurs meilleurs troisièmes ont été départagés au fair-play. Toute prédiction nominative sur ces places doit être lue comme **un scénario parmi plusieurs quasi équiprobables.**

---

## 5. Tableau complet des 32 équipes qualifiées

> **Note de terminologie :** avec 32 qualifiés, le premier tour à élimination directe est le **Tour de 32 (« seizièmes de finale », 28 juin–3 juillet)**, suivi des **huitièmes de finale (Tour de 16, 4–7 juillet)**. Les 32 équipes ci-dessous accèdent donc aux seizièmes.

| Groupe | 1er (qualifié direct) | 2e (qualifié direct) | 3e qualifié |
|---|---|---|---|
| A | 🥇 Mexique | 🥈 Corée du Sud | — |
| B | 🥇 Suisse | 🥈 Canada | 🥉 Qatar |
| C | 🥇 Brésil | 🥈 Maroc | 🥉 Écosse |
| D | 🥇 États-Unis | 🥈 Turquie | — |
| E | 🥇 Allemagne | 🥈 Équateur | 🥉 Côte d'Ivoire |
| F | 🥇 Pays-Bas | 🥈 Japon | — |
| G | 🥇 Belgique | 🥈 Iran | 🥉 Égypte |
| H | 🥇 Espagne | 🥈 Uruguay | 🥉 Arabie saoudite |
| I | 🥇 France | 🥈 Sénégal | 🥉 Norvège |
| J | 🥇 Argentine | 🥈 Autriche | 🥉 Algérie |
| K | 🥇 Portugal | 🥈 Colombie | — |
| L | 🥇 Angleterre | 🥈 Croatie | 🥉 Panama |

**Récapitulatif des 32 qualifiés (central forecast) :**

- **12 vainqueurs de groupe :** Mexique, Suisse, Brésil, États-Unis, Allemagne, Pays-Bas, Belgique, Espagne, France, Argentine, Portugal, Angleterre.
- **12 deuxièmes :** Corée du Sud, Canada, Maroc, Turquie, Équateur, Japon, Iran, Uruguay, Sénégal, Autriche, Colombie, Croatie.
- **8 meilleurs troisièmes :** Écosse (C), Panama (L), Égypte (G), Côte d'Ivoire (E), Norvège (I), Algérie (J), Qatar (B), Arabie saoudite (H).

*L'attribution précise des troisièmes aux rencontres de seizièmes suit une table de correspondance FIFA dépendant de la combinaison exacte des groupes qualifiés (B-C-E-G-H-I-J-L ici) ; elle n'est figée qu'une fois les 8 troisièmes connus et n'est donc pas détaillée match par match dans ce central forecast.*

---

## 6. Surprises potentielles

Le modèle, par construction, lisse les scénarios extrêmes. Voici les ruptures les plus crédibles autour de la prévision centrale :

1. **Maroc devant le Brésil en tête du groupe C.** L'écart Brésil/Maroc est statistiquement nul (espérances identiques). Une victoire marocaine dans le choc d'ouverture inverserait la hiérarchie : le Maroc, demi-finaliste 2022, terminerait alors 1ᵉʳ et hériterait d'un tableau plus favorable.

2. **Le Canada bat la Suisse pour la tête du groupe B.** À domicile (+70 modélisé, sans doute sous-estimé), avec Davies et David, l'hôte canadien a 37,6 % de finir 1ᵉʳ — un renversement très accessible.

3. **L'Iran ou l'Égypte élimine la Belgique de la 1ère place.** Le groupe G est un nœud : trois équipes à 5 points dans le scénario modal. Une Belgique vieillissante peut parfaitement terminer 2ᵉ derrière un Iran ultra-défensif.

4. **Le Paraguay ou l'Australie sort la Turquie.** Dans le groupe D le plus indécis du tournoi, les places 2 à 4 se tiennent en 1 point de pourcentage. Le « perdant » désigné (Paraguay, 51 % de qualification) peut tout à fait passer.

5. **Une tête de série tombe au piège du 3ᵉ.** Le Sénégal (24,8 % de finir 3ᵉ derrière France ET Norvège) ou la Croatie (22,7 %) pourraient être contraints de passer par la voie étroite des meilleurs troisièmes — un statut inconfortable pour des nations de ce calibre.

6. **Effet Haaland.** La Norvège est l'équipe la plus sous-évaluée par la note FIFA relativement à son potentiel réel. Si Haaland est à son niveau, une qualification directe en 2ᵉ position du groupe I (devant le Sénégal) n'aurait rien d'un miracle.

7. **Le Petit Poucet qui marque les esprits.** Parmi les débutants (Curaçao, Cap-Vert, Ouzbékistan, Jordanie), au moins un est statistiquement attendu pour créer un exploit ponctuel (un nul ou une victoire surprise), à l'image des chocs habituels du premier tour.

---

## 7. Favoris pour le titre

Le tournoi se jouant à élimination directe à partir des seizièmes, le titre dépasse le cadre de ce rapport (centré sur la phase de groupes). Néanmoins, en croisant **note FIFA, valeur d'effectif et forme sur 24 mois**, la hiérarchie des prétendants se dessine clairement :

**Tier 1 — Favoris déclarés :**
- 🇫🇷 **France** — n°1 FIFA, **effectif le plus cher du monde (1,53 Md€)**, finaliste 2022, profondeur inégalée à tous les postes. Le favori le plus complet.
- 🇪🇸 **Espagne** — n°2 FIFA, championne d'Europe en titre, milieu de terrain le plus dominateur de la planète, génération jeune mais déjà titrée.
- 🇦🇷 **Argentine** — n°3 FIFA, **championne du monde en titre**, ossature victorieuse conservée, mental de gagnant.
- 🏴 **Angleterre** — n°4 FIFA, qualification parfaite (6/6), réservoir offensif pléthorique ; le palier mental reste son seul point d'interrogation.

**Tier 2 — Outsiders crédibles :**
- 🇧🇷 **Brésil** (6ᵉ) et 🇵🇹 **Portugal** (5ᵉ) — talent individuel de classe mondiale, régularité à confirmer.
- 🇳🇱 **Pays-Bas** (7ᵉ) et 🇩🇪 **Allemagne** (10ᵉ) — collectifs solides capables d'un grand tournoi.

**Tier 3 — Trouble-fête :**
- 🇲🇦 **Maroc** (8ᵉ, demi-finaliste 2022) et 🇧🇪 **Belgique** (9ᵉ) — capables d'aller loin sur un bon tirage.

> **Synthèse marché :** seules **4 sélections dépassent le milliard d'euros de valeur d'effectif** (la France en tête), et **11 nations concentrent 59 % de la valeur totale** du tournoi. Le déséquilibre économique entre l'élite et le reste reste le meilleur prédicteur des deux dernières semaines de compétition — il désigne sans ambiguïté un vainqueur issu du Tier 1, la **France** et l'**Espagne** se détachant comme les deux probabilités les plus fortes.

---

## 8. Limites et avertissements méthodologiques

- Les probabilités proviennent d'un modèle **purement quantitatif** (note FIFA + ajustement géographique + Poisson). Les facteurs qualitatifs (blessures de juin, état de forme, dynamiques d'effectif) sont commentés mais non ré-injectés.
- Le **classement FIFA utilisé date du 1ᵉʳ avril 2026** ; la prochaine édition (10 juin) et les matchs de préparation de juin pourront légèrement modifier les notes de base.
- Les notes des équipes hors top 50 (barragistes, débutants) sont **consolidées** et comportent une incertitude supérieure.
- Les **scores pronostiqués** sont les résultats exacts les plus probables (modes de Poisson) et tendent donc vers des scores serrés ; ils ne doivent pas être lus comme des certitudes mais comme le centre d'une distribution.
- La frontière des **meilleurs troisièmes** est si serrée (< 1 point de %) que toute désignation nominative des 4 derniers billets relève du scénario le plus probable parmi plusieurs quasi équiprobables.

*Rapport généré le 8 juin 2026 · Modèle Monte-Carlo, 50 000 itérations · Sources : Classement mondial FIFA (1ᵉʳ avril 2026), tirage officiel du 5 décembre 2025, valeurs d'effectifs de marché (juin 2026).*
