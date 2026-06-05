# 📦 CSS Colors

- Export Color Individually - Theme
- Edit Title -> Groupped Theme
- Fix UI of color card

An easy way of generate your colors, whether you just want a color or a system.

---

## 🧭 Index

- [📌 Technologies](#-technologies)
- [🏗️ Architecture](#-architecture)
- [❓ Funcionalities](#-funcionalities)
- [📄 License](#-license)

---

## 📌 Technologies

All of components are made by myself, and the lib for components and styles is
just an easy way of do it,

- **@lizzelabs/react-harmony:** Components and styles, animations.
- **React**
- **Glsl Canvas**
- **Typescript**

---

## 🏗️ Architecture

├── components │ └── componentName │ ├── componentName.hook.ts │ ├──
component.static.ts │ ├── component.types.ts │ └── component.tsx  
├── factories ├── hooks ├── icons ├── pages ├── theme ├── types ├── utils └──
main.tsx

---

## ❓ Funcionalities

- Easy conversion from HSL, HSLA, HEX, RGB, RGBA to any of it.
- Accent generation by color from 100 ... to 900.
- Text color generation to each accent.
- Shadow color generation to each accent.
- Highlight color generation to each accent.
- Generation of colors, since monocromatic until fullspectrum color generation
  or you also are totally able to inform how much space you want in each picker.
- Responsible, you can access in any screen.
