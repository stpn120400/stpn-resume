# Resume Website Style Guide

This style guide documents the design system and component patterns used in the Resume Website project, inspired by Marty.com's modern and minimalist design approach.

## Design Tokens

### Colors

- **Primary**: `#0066FF` (Signature blue)
- **Text**: `#000000` (Black)
- **Background**: `#FFFFFF` (White)
- **Grays**:
  - 100: `#F8F9FA`
  - 200: `#E9ECEF`
  - 300: `#DEE2E6`
  - 400: `#CED4DA`
  - 500: `#ADB5BD`
  - 600: `#6C757D`
  - 700: `#495057`
  - 800: `#343A40`
  - 900: `#212529`

### Typography

- **Headings**: Montserrat, Inter (fallback)
- **Body**: Inter, Arial (fallback)
- **Font Sizes**:
  - sm: 0.875rem
  - base: 1rem
  - lg: 1.125rem
  - xl: 1.25rem
  - 2xl: 1.5rem
  - 3xl: 2rem
  - 4xl: 2.5rem
  - 5xl: 3rem

### Spacing

- 1: 0.25rem
- 2: 0.5rem
- 3: 1rem
- 4: 1.5rem
- 5: 2rem
- 6: 2.5rem
- 8: 3rem
- 10: 4rem

### Animations

All animations use CSS transitions or Framer Motion for smooth, performant interactions.

#### Transitions
- Fast: 150ms ease
- Normal: 250ms ease
- Slow: 350ms ease

#### Common Animations
1. **Page Load**
   - Elements fade in
   - Content slides up
   - Staggered entrance effects

2. **Scroll Animations**
   - Fade in
   - Slide up
   - Scale
   - Parallax effects

3. **Hover Effects**
   - Color transitions
   - Shadow depth changes
   - Subtle scaling
   - Underline animations

### Components

#### Header
- Sticky navigation
- Mobile-friendly hamburger menu
- Smooth transitions
- Left-aligned logo

#### Hero Section
- Large, centered headlines
- Animated text reveals
- Gradient backgrounds
- Strong call-to-action buttons

#### Content Cards
- Subtle hover effects
- Shadow depth changes
- Rounded corners
- Clean typography

#### Buttons & Links
- Clear hover states
- Smooth color transitions
- Optional underline animations
- Touch-friendly sizing

#### Forms
- Clean, minimal styling
- Clear focus states
- Smooth transitions
- Proper spacing

### Accessibility

- High contrast text
- Clear focus indicators
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support

### Responsive Design

- Mobile-first approach
- Flexible grids
- Responsive typography
- Touch-friendly interactions
- Proper viewport meta tags

## Usage

To use these styles, import the CSS variables from `theme.module.css` and utilize Framer Motion for animations. Example:

```tsx
import { motion } from 'framer-motion';
import styles from '../style/theme.module.css';

export const Component = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={styles.componentClass}
  >
    Content
  </motion.div>
);
```

## Best Practices

1. Use CSS variables for consistency
2. Implement animations thoughtfully
3. Ensure responsive behavior
4. Maintain accessibility
5. Keep performance in mind
6. Document component variations