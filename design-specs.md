# Design Specifications - Virtual Career Fair Sponsorship Landing Page

## Project Overview
A high-converting sponsorship landing page for Ontario's largest virtual career fair connecting companies with 50,000+ high school students on December 2, 2025.

## Design Philosophy
- **Mobile-First**: Design for 320px width, enhance for desktop
- **Bold Simplicity**: Frictionless experiences with intuitive navigation
- **Content-First**: User objectives prioritized over decorative elements
- **Performance-Conscious**: Fast loading with strategic animation loading

## Color System

### Primary Colors
```css
--primary-blue: #0092FF;
--primary-white: #FFFFFF;
```

### Secondary Colors
```css
--secondary-blue-light: #66B5FF;
--secondary-blue-pale: #E6F4FF;
```

### Accent Colors
```css
--accent-orange: #F97316;
--accent-teal: #0D9488;
```

### Functional Colors
```css
--success-green: #059669;
--warning-orange: #EA580C;
--error-red: #DC2626;
--neutral-gray: #6B7280;
--dark-gray: #1F2937;
```

### Background Colors
```css
--background-white: #FFFFFF;
--background-light: #F9FAFB;
--background-dark: #111827;
```

## Typography System

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Weights
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extra-bold: 800;
```

### Text Styles

#### Headings
```css
/* H1 - Hero Headlines */
.h1 {
  font-size: 48px; /* Desktop */
  line-height: 52px;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.h1-mobile {
  font-size: 32px; /* Mobile */
  line-height: 36px;
}

/* H2 - Section Headers */
.h2 {
  font-size: 36px; /* Desktop */
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.3px;
}
.h2-mobile {
  font-size: 28px; /* Mobile */
  line-height: 32px;
}

/* H3 - Subsection Headers */
.h3 {
  font-size: 28px; /* Desktop */
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;
}
.h3-mobile {
  font-size: 24px; /* Mobile */
  line-height: 28px;
}

/* H4 - Card Titles */
.h4 {
  font-size: 24px; /* Desktop */
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.1px;
}
.h4-mobile {
  font-size: 20px; /* Mobile */
  line-height: 24px;
}
```

#### Body Text
```css
/* Body Large - Key Value Props */
.body-large {
  font-size: 20px; /* Desktop */
  line-height: 28px;
  font-weight: 400;
}
.body-large-mobile {
  font-size: 18px; /* Mobile */
  line-height: 26px;
}

/* Body - Standard Text */
.body {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

/* Body Small - Secondary Info */
.body-small {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
}
```

#### Special Text
```css
/* Caption */
.caption {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: var(--neutral-gray);
}

/* Button Text */
.button-text {
  font-size: 16px; /* Desktop */
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.1px;
}
.button-text-mobile {
  font-size: 18px; /* Mobile */
  line-height: 24px;
}

/* Urgency Text */
.urgency-text {
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: var(--warning-orange);
}
```

## Component Specifications

### Buttons

#### Primary CTA Button
```css
.btn-primary {
  background: var(--primary-blue);
  color: var(--primary-white);
  height: 56px; /* Desktop */
  border-radius: 12px;
  padding: 16px 24px;
  box-shadow: 0 4px 12px rgba(0, 146, 255, 0.15);
  transition: all 250ms ease-in-out;
}
.btn-primary-mobile {
  height: 48px; /* Mobile */
}
.btn-primary:hover {
  background: #0074CC;
  box-shadow: 0 6px 16px rgba(0, 146, 255, 0.25);
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  height: 56px; /* Desktop */
  border-radius: 12px;
  padding: 16px 24px;
  transition: all 250ms ease-in-out;
}
.btn-secondary:hover {
  background: var(--secondary-blue-pale);
}
```

#### Urgency CTA Button
```css
.btn-urgency {
  background: var(--accent-orange);
  color: var(--primary-white);
  height: 56px;
  border-radius: 12px;
  padding: 16px 24px;
  animation: subtle-pulse 2s infinite;
}
@keyframes subtle-pulse {
  0%, 100% { box-shadow: 0 4px 12px rgba(249, 115, 22, 0.15); }
  50% { box-shadow: 0 6px 20px rgba(249, 115, 22, 0.25); }
}
```

### Cards

#### Tier Cards
```css
.tier-card {
  background: var(--background-white);
  border-radius: 16px;
  padding: 32px; /* Desktop */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #F3F4F6;
  transition: all 250ms ease-out;
}
.tier-card-mobile {
  padding: 24px; /* Mobile */
}
.tier-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}
.tier-card.featured {
  border: 3px solid var(--accent-orange);
  position: relative;
}
.tier-card.featured::before {
  content: "MOST POPULAR";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-orange);
  color: white;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
}
```

#### Content Cards
```css
.content-card {
  background: var(--background-white);
  border-radius: 12px;
  padding: 24px; /* Desktop */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}
.content-card-mobile {
  padding: 20px; /* Mobile */
}
```

### Navigation

#### Desktop Navigation
```css
.nav-desktop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 100;
}
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}
.nav-link {
  color: var(--neutral-gray);
  text-decoration: none;
  transition: all 200ms ease-out;
  position: relative;
}
.nav-link:hover,
.nav-link.active {
  color: var(--primary-blue);
}
.nav-link:hover::after,
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-blue);
  animation: underline-expand 200ms ease-out;
}
```

#### Mobile Navigation
```css
.nav-mobile {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background: var(--background-white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 100;
}
.hamburger {
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  background: var(--background-white);
  transform: translateY(-100%);
  transition: transform 300ms ease-in-out;
}
.mobile-menu.open {
  transform: translateY(0);
}
```

## Layout Specifications

### Spacing System
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* Mobile */
}
@media (min-width: 768px) {
  .container {
    padding: 0 40px; /* Tablet */
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 0 48px; /* Desktop */
  }
}
```

### Breakpoints
```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--large: 1200px;
```

## Animation Specifications

### Timing Functions
```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
--ease-spring: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Duration
```css
--duration-fast: 150ms;
--duration-standard: 250ms;
--duration-slow: 400ms;
--duration-carousel: 35s;
```

### Specific Animations
```css
/* Micro Interactions */
.micro-interaction {
  transition: all var(--duration-fast) var(--ease-standard);
}

/* Card Hover */
.card-hover {
  transition: all var(--duration-standard) var(--ease-decelerate);
}
.card-hover:hover {
  transform: translateY(-4px) scale(1.02);
}

/* Logo Carousel */
.logo-carousel {
  animation: scroll-left var(--duration-carousel) linear infinite;
}
.logo-carousel:hover {
  animation-play-state: paused;
}
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Accordion */
.accordion-item {
  transition: height var(--duration-standard) var(--ease-spring);
}

/* Page Transitions */
.page-transition {
  transition: all var(--duration-slow) var(--ease-spring);
}
```

## Accessibility Requirements

### Color Contrast
- Normal text: Minimum 4.5:1 contrast ratio
- Large text (18px+): Minimum 3:1 contrast ratio
- Interactive elements: Minimum 3:1 contrast ratio

### Focus States
```css
.focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets
```css
.touch-target {
  min-width: 48px;
  min-height: 48px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .logo-carousel {
    animation: none;
  }
}
```

## Performance Guidelines

### Image Optimization
- Use WebP format with JPEG fallback
- Implement lazy loading for below-fold content
- Optimize logo images for carousel (max 200px width)

### Loading States
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Critical CSS
- Inline above-the-fold styles
- Defer non-critical CSS loading
- Use font-display: swap for web fonts

## Component States Reference

### Interactive States
1. **Default**: Initial appearance
2. **Hover**: Desktop pointer interaction
3. **Focus**: Keyboard navigation state
4. **Active**: Click/tap interaction
5. **Disabled**: Non-interactive state
6. **Loading**: Processing state
7. **Error**: Failed state
8. **Success**: Completed state

### Responsive States
1. **Mobile**: 320px - 767px
2. **Tablet**: 768px - 1023px
3. **Desktop**: 1024px+
4. **Large**: 1200px+

This design system ensures consistency, accessibility, and performance across all devices and user interactions.