# Angudes - Angular UI Component Library

A comprehensive, modern Angular UI component library with customizable theming and signature features.

## ✨ Features

- 🎨 **Fully Customizable Theme** - Easy theming with CSS Variables
- 🚀 **Modern Design** - Clean, professional UI components
- 📦 **30+ Components** - Comprehensive component library
- 🎯 **Signature Features** - Unique animations and effects
- ♿ **Accessible** - Built with accessibility in mind
- 📱 **Responsive** - Mobile-first design
- 🎭 **TypeScript** - Fully typed for better DX

## 📦 Installation

```bash
npm install angudes
```

## 🚀 Quick Start

### 1. Import Module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngudesModule } from 'angudes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngudesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Import Styles

In `styles.scss`:

```scss
@import 'angudes/styles';
```

### 3. Use Components

```html
<agu-button [variant]="'primary'" [size]="'lg'">
  Click Me
</agu-button>

<agu-input placeholder="Enter text"></agu-input>

<agu-card>
  <agu-card-header>Title</agu-card-header>
  <agu-card-body>Content</agu-card-body>
</agu-card>
```


### Quick Theme Override

```scss
:root {
  --agu-primary-color: #ff2e2e;
  --agu-primary-hover: #e62626;
  --agu-secondary-color: #8b5cf6;
}
```

## ✨ Signature Features

Angudes includes unique signature features:

- **Ripple Effect** - Smooth ripple animation on click
- **Glow Effect** - Beautiful glow on hover
- **Scale Effect** - Smooth scale transitions
- **Slide In Animation** - Elegant slide-in animations
- **Pulse Animation** - Attention-grabbing pulse
- **Shimmer Effect** - Loading shimmer effect
- **Border Gradient** - Gradient borders
- **Focus Ring** - Accessible focus indicators
- **Hover Lift** - Lift effect on hover
- **Loading Skeleton** - Skeleton loading states


## 🎯 Components

### General
- Button
- Box
- Card
- Divider

### Form
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider
- DatePicker

### Data Display
- Table
- Badge
- Tag
- Avatar
- Skeleton
- Text Effect
- Carousel

### Feedback
- Alert
- Modal
- Progress
- Spinner
- Tooltip

### Navigation
- Navbar
- Menu
- Tabs
- Breadcrumb
- Pagination
- Dropdown
- Back Top

### Layout
- Accordion

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

Made with ❤️ for Angular developers
