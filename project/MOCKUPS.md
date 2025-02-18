# Maquettes ÉcoVoiturage 

## Desktop (≥1024px)

### 1. Page d'Accueil
```
┌──────────────────────────────────────┐
│ [Logo] Navigation                [CTA]│
├──────────────────────────────────────┤
│     ┌──────────────────────┐         │
│     │    Hero Section      │         │
│     │   ┌──────────────┐   │         │
│     │   │Search Module │   │         │
│     │   └──────────────┘   │         │
│     └──────────────────────┘         │
├──────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│ │Feature 1│ │Feature 2│ │Feature 3│ │
│ └─────────┘ └─────────┘ └─────────┘ │
├──────────────────────────────────────┤
│    ┌────────────┐   ┌────────────┐   │
│    │About Image │   │About Text  │   │
│    └────────────┘   └────────────┘   │
└──────────────────────────────────────┘
```

**Mockup Preview**: [Hero Section Desktop](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=800)

### 2. Liste des Trajets
```
┌──────────────────────────────────────┐
│ [Logo] Navigation                [CTA]│
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │        Search & Filters          │ │
│ └──────────────────────────────────┘ │
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │   Ride Card                      │ │
│ │ ┌────────┐                       │ │
│ │ │Profile │ Details   Price  CTA  │ │
│ │ └────────┘                       │ │
│ └──────────────────────────────────┘ │
│ [Repeat Ride Cards...]               │
└──────────────────────────────────────┘
```

**Mockup Preview**: [Rides List Desktop](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=800)

### 3. Détails du Trajet
```
┌──────────────────────────────────────┐
│ [Logo] Navigation                [CTA]│
├──────────────────────────────────────┤
│ ┌────────────┐ ┌──────────────────┐ │
│ │            │ │                  │ │
│ │ Driver     │ │ Ride Details     │ │
│ │ Info       │ │                  │ │
│ │            │ │                  │ │
│ └────────────┘ └──────────────────┘ │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │        Vehicle Details           │ │
│ └──────────────────────────────────┘ │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │        Booking Module            │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**Mockup Preview**: [Ride Details Desktop](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=800)

## Mobile (≤768px)

### 1. Page d'Accueil Mobile
```
┌────────────────┐
│ [Logo]    [≡]  │
├────────────────┤
│   Hero Text    │
│ ┌────────────┐ │
│ │   Search   │ │
│ └────────────┘ │
├────────────────┤
│  Feature 1     │
├────────────────┤
│  Feature 2     │
├────────────────┤
│  Feature 3     │
├────────────────┤
│  About         │
└────────────────┘
```

**Mockup Preview**: [Hero Section Mobile](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=375&h=812)

### 2. Liste des Trajets Mobile
```
┌────────────────┐
│ [Logo]    [≡]  │
├────────────────┤
│    Search      │
├────────────────┤
│  [Filters ▼]   │
├────────────────┤
│ ┌────────────┐ │
│ │ Ride Card  │ │
│ │ ┌────────┐ │ │
│ │ │Profile │ │ │
│ │ └────────┘ │ │
│ │  Details   │ │
│ │  Price     │ │
│ │  [CTA]     │ │
│ └────────────┘ │
│      ...       │
└────────────────┘
```

**Mockup Preview**: [Rides List Mobile](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=375&h=812)

### 3. Détails du Trajet Mobile
```
┌────────────────┐
│ [←]      [≡]  │
├────────────────┤
│  Driver Info   │
├────────────────┤
│ Ride Details   │
│  - Time        │
│  - Route       │
│  - Price       │
├────────────────┤
│ Vehicle Info   │
├────────────────┤
│ Description    │
├────────────────┤
│ [Book Now]     │
└────────────────┘
```

**Mockup Preview**: [Ride Details Mobile](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=375&h=812)

## Éléments Communs

### Navigation
- Desktop: Menu horizontal avec items visibles
- Mobile: Menu hamburger avec drawer latéral

### Composants Réutilisables
1. **Search Module**
   - Champs: Départ, Arrivée, Date
   - Bouton de recherche proéminent
   
2. **Ride Cards**
   - Photo de profil conducteur
   - Informations essentielles
   - Prix et bouton CTA

3. **Filters**
   - Desktop: Visible horizontalement
   - Mobile: Menu déroulant

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 769px - 1023px
- Desktop: 1024px+

### Interactions
1. **Hover States**
   - Boutons: Changement de couleur
   - Cartes: Élévation légère
   
2. **Animations**
   - Menu mobile: Slide-in
   - Filtres: Smooth dropdown
   - Cartes: Fade-in au chargement

### Accessibilité
- Contraste suffisant pour le texte
- Taille de touch targets ≥ 44px sur mobile
- Labels explicites pour tous les champs
- Support de la navigation au clavier

---

