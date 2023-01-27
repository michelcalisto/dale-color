# Dale Color

Libreria javascript para modificar y generar combinaciones de colores.

![Node](https://img.shields.io/badge/NodeJS-v12.20.0-blue)
![NPM](https://img.shields.io/badge/NPM-v6.14.8-blue)
![License](https://img.shields.io/badge/License-MIT-green)

<p align="left">
  <a href="https://www.npmjs.com/package/dale-color" target="_blank"><img src="https://gist.githubusercontent.com/michelcalisto/df14b3f9d80448fd7cc8d513a1824db7/raw/3588999ef0db4bb5584083b3e3897b06d1dbca80/npm-badge.svg" alt="npm" height="60"></a>
</p>

## Uso

```js
const DaleColor = require('dale-color');
const palette = new DaleColor();
```

## Validaciones

```js
// Color claro (devuelve true, si el color es mayor al número pasado en el constructor, por defecto "128")
palette.isLight("#ff9999")

// Color oscuro (devuelve true, si el color es menor ó igual al número pasado en el constructor, por defecto "128")
palette.isDark("#000000")
```

## Brillo

```js
// Aclarar color
palette.brighten("#ffffff", "50%");

// Oscurecer color
palette.darken("#66ff66", "25%");
```
## Armonías

```js
// Color Opuesto
palette.opposite("#000000");
```

---

[Licencia MIT](https://github.com/michelcalisto/dale-color/blob/master/LICENSE.md)