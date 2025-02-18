# Charte Graphique ÉcoVoiturage 🎨

## 1. Logo et Identité

### 1.1 Logo
- **Symbole principal** : Voiture avec une feuille (Lucide React icons : `<Car />` + `<Leaf />`)
- **Couleurs** : Vert ÉcoVoiturage (#16a34a) sur fond blanc
- **Espace de protection** : Minimum 20px de marge autour du logo
- **Taille minimum** : 32px de hauteur

### 1.2 Typographie
- **Titres** : Inter (système)
  - H1 : 2.5rem (40px), bold
  - H2 : 1.875rem (30px), bold
  - H3 : 1.5rem (24px), semibold
  - H4 : 1.25rem (20px), semibold

- **Corps de texte** : Inter (système)
  - Texte standard : 1rem (16px), regular
  - Texte secondaire : 0.875rem (14px), regular
  - Petits textes : 0.75rem (12px), regular

## 2. Palette de Couleurs

### 2.1 Couleurs Principales
```css
--eco-green-600: #16a34a;  /* Couleur principale */
--eco-green-700: #15803d;  /* Hover/Active */
--eco-green-500: #22c55e;  /* Accents */
--eco-green-100: #dcfce7;  /* Arrière-plans légers */
```

### 2.2 Couleurs Secondaires
```css
--white: #ffffff;          /* Arrière-plan */
--gray-50: #f9fafb;       /* Arrière-plan alternatif */
--gray-100: #f3f4f6;      /* Bordures légères */
--gray-200: #e5e7eb;      /* Bordures */
--gray-600: #4b5563;      /* Texte secondaire */
--gray-800: #1f2937;      /* Texte principal */
```

### 2.3 Couleurs Fonctionnelles
```css
--success: #22c55e;       /* Validations */
--warning: #eab308;       /* Avertissements */
--error: #ef4444;         /* Erreurs */
--info: #3b82f6;          /* Informations */
```

## 3. Composants UI

### 3.1 Boutons
```css
/* Bouton Principal */
.btn-primary {
  @apply bg-eco-green-600 text-white px-4 py-2 rounded-md hover:bg-eco-green-700;
}

/* Bouton Secondaire */
.btn-secondary {
  @apply border border-eco-green-600 text-eco-green-600 px-4 py-2 rounded-md hover:bg-eco-green-50;
}

/* Bouton Tertiaire */
.btn-tertiary {
  @apply text-eco-green-600 hover:text-eco-green-700;
}
```

### 3.2 Formulaires
```css
/* Champs de saisie */
.input {
  @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm 
  focus:border-eco-green-500 focus:ring-eco-green-500;
}

/* Labels */
.label {
  @apply block text-sm font-medium text-gray-700;
}
```

### 3.3 Cartes
```css
/* Carte standard */
.card {
  @apply bg-white rounded-lg shadow-md p-6;
}

/* Carte interactive */
.card-hover {
  @apply hover:shadow-lg transition-shadow duration-200;
}
```

## 4. Iconographie

### 4.1 Icons Principaux (Lucide React)
- Navigation : `<Home />`, `<Car />`, `<User />`, `<Search />`
- Actions : `<MessageCircle />`, `<Star />`, `<ChevronRight />`
- Écologie : `<Leaf />`, `<Shield />`

### 4.2 Tailles d'Icons
- Extra petit : 16px (h-4 w-4)
- Petit : 20px (h-5 w-5)
- Moyen : 24px (h-6 w-6)
- Grand : 32px (h-8 w-8)

## 5. Espacement et Grille

### 5.1 Système d'Espacement
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### 5.2 Breakpoints
```css
--sm: 640px;   /* Mobile */
--md: 768px;   /* Tablette */
--lg: 1024px;  /* Desktop */
--xl: 1280px;  /* Large Desktop */
```

## 6. Animations et Transitions

### 6.1 Durées
```css
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
```

### 6.2 Transitions Communes
```css
/* Hover doux */
.transition-hover {
  @apply transition-all duration-200 ease-in-out;
}

/* Fade in */
.transition-fade {
  @apply transition-opacity duration-300 ease-in-out;
}
```

## 7. Images et Médias

### 7.1 Images de Profil
- **Format** : Carré, ratio 1:1
- **Tailles** :
  - Petit : 32px × 32px
  - Moyen : 48px × 48px
  - Grand : 64px × 64px
- **Style** : `@apply rounded-full object-cover`

### 7.2 Images de Véhicules
- **Format** : 16:9 ou 4:3
- **Tailles** :
  - Vignette : 300px × 169px
  - Standard : 600px × 338px
- **Style** : `@apply rounded-lg object-cover`

## 8. Accessibilité

### 8.1 Contraste
- Texte sur fond clair : minimum 4.5:1
- Grands textes sur fond clair : minimum 3:1
- Éléments interactifs : minimum 3:1

### 8.2 Focus
```css
/* Outline de focus */
.focus-visible {
  @apply focus:outline-none focus:ring-2 focus:ring-eco-green-500 focus:ring-offset-2;
}
```

## 9. Principes de Design

### 9.1 Hiérarchie Visuelle
1. Utiliser la taille et le poids des polices pour établir la hiérarchie
2. Maintenir un contraste suffisant entre les éléments
3. Utiliser l'espacement pour grouper les éléments liés

### 9.2 Consistance
1. Utiliser les mêmes styles pour les mêmes types d'éléments
2. Maintenir un espacement cohérent
3. Suivre les patterns établis pour l'interaction

---

Cette charte graphique doit être suivie pour maintenir une cohérence visuelle à travers toute l'application ÉcoVoiturage.