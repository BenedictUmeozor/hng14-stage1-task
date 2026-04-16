# Profile Card - Neo-Brutalist Editorial Design

A testable, accessible, and responsive profile card component built with semantic HTML, modern CSS, and vanilla JavaScript. Features a bold neo-brutalist aesthetic with editorial typography and high-contrast design.

## 🎨 Design Philosophy

This profile card embraces **Neo-Brutalist Editorial** design principles:
- Bold, geometric shapes with thick borders
- High-contrast color palette (yellow, red, blue, black)
- Editorial typography using Bebas Neue and IBM Plex Mono
- Dramatic shadows and hover effects
- Magazine-style layout with asymmetric composition

## ✨ Features

### Core Requirements
- ✅ All required `data-testid` attributes for automated testing
- ✅ Semantic HTML5 structure
- ✅ Real-time timestamp in milliseconds (updates every second)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Full keyboard navigation support
- ✅ WCAG AA accessibility compliance

### Accessibility Features
- Semantic HTML elements (`<article>`, `<figure>`, `<nav>`, `<section>`)
- Descriptive alt text for images
- ARIA labels and live regions
- Keyboard-focusable interactive elements
- Visible focus indicators
- Screen reader announcements
- Reduced motion support
- High contrast mode support
- Skip link for keyboard users

### Responsive Breakpoints
- **Mobile**: < 480px (stacked layout, simplified spacing)
- **Tablet**: 480px - 768px (transitional layout)
- **Desktop**: > 768px (side-by-side layout with avatar left, content right)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

That's it! No npm install, no build process.

### Local Development

Simply open the `index.html` file in your browser:

```bash
# Using Python's built-in server (if you prefer)
python -m http.server 8000

# Or using Node.js http-server
npx http-server

# Or just double-click index.html
```

Then navigate to `http://localhost:8000` (or the file directly).

## 📋 Test IDs Reference

All required test IDs are implemented for automated testing:

| Element | data-testid | Description |
|---------|-------------|-------------|
| Profile card root | `test-profile-card` | Main article container |
| User name | `test-user-name` | Name heading (h1) |
| Biography | `test-user-bio` | Bio paragraph |
| Current time | `test-user-time` | Timestamp in milliseconds |
| Avatar image | `test-user-avatar` | Profile photo |
| Social links container | `test-user-social-links` | Nav list of social links |
| Twitter link | `test-user-social-twitter` | Twitter profile link |
| GitHub link | `test-user-social-github` | GitHub profile link |
| LinkedIn link | `test-user-social-linkedin` | LinkedIn profile link |
| Dribbble link | `test-user-social-whatsapp` | WhatsApp profile link |
| Hobbies list | `test-user-hobbies` | List of hobbies |
| Dislikes list | `test-user-dislikes` | List of dislikes |

## 🧪 Testing

### Manual Testing Checklist

#### Visual Testing
- [ ] Card displays correctly on mobile (< 480px)
- [ ] Card displays correctly on tablet (480px - 768px)
- [ ] Card displays correctly on desktop (> 768px)
- [ ] All text is readable with sufficient contrast
- [ ] Images load properly with alt text
- [ ] Animations are smooth and purposeful

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are clearly visible
- [ ] Enter/Space activates links
- [ ] No keyboard traps
- [ ] Skip link appears on focus

#### Screen Reader Testing
- [ ] Profile card structure is announced
- [ ] Avatar alt text is descriptive
- [ ] Timestamp updates are announced (aria-live)
- [ ] Social links are properly labeled
- [ ] Headings create logical hierarchy

#### Automated Testing Example

```javascript
// Example test using Jest + Testing Library
import { screen } from '@testing-library/dom';

test('profile card renders with all required elements', () => {
  // Check main container
  const card = screen.getByTestId('test-profile-card');
  expect(card).toBeInTheDocument();
  
  // Check user info
  const name = screen.getByTestId('test-user-name');
  expect(name).toHaveTextContent('Alex Rivera');
  
  const bio = screen.getByTestId('test-user-bio');
  expect(bio).toBeInTheDocument();
  
  // Check timestamp is valid
  const time = screen.getByTestId('test-user-time');
  const timestamp = parseInt(time.textContent);
  expect(timestamp).toBeGreaterThan(0);
  expect(Date.now() - timestamp).toBeLessThan(5000); // Within 5 seconds
  
  // Check avatar
  const avatar = screen.getByTestId('test-user-avatar');
  expect(avatar).toHaveAttribute('alt');
  
  // Check social links
  const socialLinks = screen.getByTestId('test-user-social-links');
  expect(socialLinks.children.length).toBeGreaterThan(0);
  
  // Check lists
  const hobbies = screen.getByTestId('test-user-hobbies');
  const dislikes = screen.getByTestId('test-user-dislikes');
  expect(hobbies.children.length).toBeGreaterThan(0);
  expect(dislikes.children.length).toBeGreaterThan(0);
});
```

## 🎯 Customization

### Changing User Data

Edit `index.html` to update:
- Name (in `<h1>` with `data-testid="test-user-name"`)
- Bio (in `<p>` with `data-testid="test-user-bio"`)
- Avatar image (update `src` attribute)
- Social links (update `href` attributes)
- Hobbies and dislikes (edit list items)

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-bg: #f5f1e8;        /* Background */
    --color-card: #ffffff;       /* Card background */
    --color-primary: #ff3366;    /* Primary accent */
    --color-secondary: #0066ff;  /* Secondary accent */
    --color-accent: #ffcc00;     /* Highlight color */
    --color-text: #1a1a1a;       /* Text color */
    --color-border: #1a1a1a;     /* Border color */
}
```

### Changing Fonts

Update the Google Fonts import in `index.html` and CSS variables:

```css
:root {
    --font-display: 'Your Display Font', sans-serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Compliance

This component follows WCAG 2.1 Level AA guidelines:

- **Perceivable**: Sufficient color contrast, text alternatives for images
- **Operable**: Keyboard accessible, no time limits, clear focus indicators
- **Understandable**: Consistent navigation, clear labels, predictable behavior
- **Robust**: Semantic HTML, ARIA attributes, works with assistive technologies

### Accessibility Testing Tools

- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Screen readers: NVDA (Windows), JAWS (Windows), VoiceOver (macOS/iOS)

## 📄 File Structure

```
profile-card/
├── index.html          # Main HTML structure
├── styles.css          # All styles and responsive design
├── script.js           # Timestamp updates and interactions
└── README.md           # This file
```

## 🎓 Learning Resources

- [MDN Web Docs - HTML Semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)

## 📝 License

This project is open source and available for educational purposes.

