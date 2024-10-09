## Cheat Sheet: Layers for Building Web or Native Apps with a Design System

## 1. Design System (Foundation Layer)
**Key Aspects**:
- Defines the **visual identity** (colors, typography, spacing) and **behavioral patterns** (interactions, animations).
- Platform-agnostic, serving as a blueprint for both web and native apps.
- Focuses on **consistency** and **scalability**.

**Deliverables**:
- **Design Tokens (JSON/YAML)**: Represent core design elements (colors, fonts, spacing).
  - _Example_: `colorPrimary: "#FF5733"`, `fontSizeSmall: "12px"`.
- **Design Guidelines (Style Guides/Figma)**: Visual mockups, typography rules, spacing, and component structure in design tools like Figma or Sketch.
- **Component Specification**: Document that describes how atoms, molecules, and higher-level components should be structured visually.

---

## 2. Tokens Layer
**Key Aspects**:
- Maps **design tokens** to platform-specific variables (CSS for web, XML for Android, Swift for iOS).
- Ensures that all styling across platforms derives from a unified source.

**Deliverables**:
- **CSS Variables/SCSS (for Web)**: Converts tokens into CSS variables to be used in stylesheets.
  - _Example_: `:root { --color-primary: #FF5733; }`
- **Platform-Specific Token Files**:
  - _For Android_: XML token file (e.g., `<color name="colorPrimary">#FF5733</color>`).
  - _For iOS_: Swift token file (e.g., `UIColor(named: "colorPrimary")`).

---

## 3. Styles Layer
**Key Aspects**:
- Applies **tokens** to define how UI elements are styled (colors, spacing, typography).
- Can include **global styles** for the app as well as **component-specific styles**.

**Deliverables**:
- **Global Stylesheet (CSS/SCSS for Web)**: Includes typography, base layout, and resets.
  - _Example_: Global font styles, button styles.
- **Platform-Specific Styles**: Defined for native apps using platform-specific technologies (e.g., Android XML styles, Swift for iOS).
  - _Example (Android)_: `<style name="ButtonPrimary">...</style>`.
  - _Example (iOS)_: `UIButton with backgroundColor = colorPrimary`.

---

## 4. Atoms Layer (Basic Components)
**Key Aspects**:
- Atoms are the **smallest reusable components** (buttons, inputs, labels) and must adhere to tokens and styles.
- Defined as **simple, standalone UI elements**.

**Deliverables**:
- **Component Code**:
  - _For Web_: HTML/CSS/JavaScript (or React, Angular, Web Components).
    - _Example_: A button component using tokens like `--color-primary`.
  - _For Native_: Swift (iOS), Kotlin/Java (Android).
    - _Example (iOS)_: `UIButton` styled using tokens.
    - _Example (Android)_: `Button` using XML styles.

---

## 5. Molecules Layer (Composite Components)
**Key Aspects**:
- **Combines multiple atoms** into more complex components (e.g., search bars, form fields).
- Molecules inherit styles and tokens from the atoms they contain.

**Deliverables**:
- **Component Code**:
  - _For Web_: HTML/JavaScript (or React/Angular/Web Components), combining atoms into more complex structures.
    - _Example_: A search bar with an input field and a button.
  - _For Native_: Swift/Kotlin components that combine multiple UI elements.
    - _Example (iOS)_: A form field with a text input and label.
    - _Example (Android)_: `LinearLayout` with a text field and button.

---

## 6. Higher-Level Components (Organisms)
**Key Aspects**:
- These are more complex UI components that may combine multiple molecules, like cards, modals, or navigation bars.
- Often form the **core building blocks** of a UI.

**Deliverables**:
- **Component Code**:
  - _For Web_: React, Angular, or Web Components combining multiple molecules into a full-featured component.
    - _Example_: A card component with title, description, and a button.
  - _For Native_: Complex UI elements in Swift/Kotlin combining molecules.
    - _Example (iOS)_: A modal window with form fields and buttons.
    - _Example (Android)_: A `CardView` with a header, description, and action button.

---

## 7. Theming Layer
**Key Aspects**:
- Adds **theme support** (e.g., light/dark mode), adapting the visual appearance of components across contexts.
- Relies heavily on tokens to ensure themes are easily switchable.

**Deliverables**:
- **Theming Files**:
  - _For Web_: CSS variables for different themes.
    - _Example_: `--color-background: #FFFFFF;` for light mode and `--color-background: #333333;` for dark mode.
  - _For Native_: Platform-specific theme support.
    - _Example (iOS)_: Dynamic switching between light/dark mode in Swift using tokens.
    - _Example (Android)_: Dark mode in Android using `styles.xml`.

---

## 8. Documentation Layer
**Key Aspects**:
- Provides detailed documentation on how to use the components and tokens, how to implement themes, and best practices for maintaining consistency.

**Deliverables**:
- **Component Library Documentation**:
  - API docs, props, and usage examples for each component (often using Storybook for web apps).
  - _Example_: Documentation page showing all button variants and their code examples.
- **Design System Guidelines**: How the design system maps to components and how to use them.
  - _Example_: A style guide outlining the use of tokens, color schemes, typography, etc.

---

## Summary Cheat Sheet:
1. **Design System**: Design tokens, visual guidelines, component specs.
2. **Tokens**: Platform-specific tokens (JSON → CSS variables for web, XML for Android, Swift for iOS).
3. **Styles**: Global and component-specific styles (CSS for web, XML for Android, Swift for iOS).
4. **Atoms**: Basic components (buttons, inputs) in HTML/JavaScript or Swift/Kotlin.
5. **Molecules**: Composite components (e.g., search bars) combining atoms.
6. **Higher-Level Components**: Full-featured components (e.g., cards, modals) combining molecules.
7. **Theming**: Light/dark mode and dynamic theming using tokens.
8. **Documentation**: Detailed documentation for components and design system integration.
