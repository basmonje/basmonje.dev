

Crear biblioteca de componentes.

Objetivo final crear sistema de diseño, con nuestros principios y prácticas.

Primero crearemos componentes simples desde cero usando React, Typescript y Rollup para agrupar.

- React
- Typescript
- [Rollup (module bundler)](https://rollupjs.org/guide/en/#installation)

## Inicializar el proyecto

Comenzamos creando una directorio y creando el documento `package.json`.

```bash
md standard
npm init --yes
```

Agregamos algunas dependencias que necesitamos.

```bash
npm i -D typescript react @types/react
```

En nuestro siguiente paso agregaremos `peerDependencies` al archivo `package.json`

```json package.json
"peerDependencies": {
    "react": "^17.0.2"
}
```

## Ordenar componentes

Podemos agrupar los componentes como nos guste, en mi caso creare una carpeta llamada `src` y dentro estarán todos los componentes separados por carpetas con sus nombres, como muestra el siguientes ejemplo 

```
src/
    /components
        /Button
            /Button.tsx
            /Button.css
            /Button.types.ts
            /index.ts
```

## Crear archivos

Crearemos el primer componente y será un botón, dentro de la carpeta componentes creamos una carpeta llamada `Button` junto a unos archivos.

El primer archivo será `Button.types.ts`

```typescript components/Button/Button.types.ts
import { MouseEventHandler } from 'react'

export interface ButtonProps {
    type: "primary" | "secondary" | "error";
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
```

Luego crearemos la hoja de estilos `button.css`

```css components/Button/button.css
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    min-width: 32px;
    min-height: 32px;
    background-color: transparent;
}

.button-primary {
    background-color: aqua;
}

.button-secondary {
    background-color: burlywood;
}

.button-error {
    background-color: red;
}

```

Es tiempo de crear nuestro primer componente y unir lo archivos creados. Crear el archivo `Button.tsx`.

```typescript components/Button/Button.tsx
import * as React from "react";

import "./button.css";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button type="button" className={`button button=${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

```

Y el ultimo archivo será el archivo `index.ts`.

```typescript components/Button/index.ts
export { default } from './Button'
```

Con estos archivos ya terminamos el primer component algo muy básico.

Ahora conectaremos el componente a la raiz. creamos el archivo `index.ts` dentro de la carpeta `components`.

```typescript src/components/index.ts
export { default as Button } from './Button'
```

Y para finalizar incluiremos el archivo `index.ts` dentro del directorio `src`. 

```typescript src/index.ts
export * from './components'
``` 

Tendriamos que ver un orden como este


```
src/
    /components
        /Button
            /Button.tsx
            /Button.css
            /Button.types.ts
            /index.ts
        index.ts
    index.ts
```

## Configurar typescript

Ahora necesitamos agregar el archivo `jsconfig.json` para configurar typescript. Podemos hacer eso mediante;

```bash
npx tsc --init
```

Esto crea un archivo con la mayoría de las opciones disponibles. 

```json tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "jsx": "react",
    "sourceMap": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
  }
}

```

Agregar scripts build en `package.json` para probar typescript.

```json package.json
"scripts": {
    "build": "tsc"
  },
```

Si ejecutamos, deberíamos ver una carpeta `dist` con todos nuestro archivos ts transpilados en archivos `.js`. Si se da cuenta, no hay archivos css el transpilador no los incluye por lo tanto no hace ese trabajo, para esto utilizaremos `Rollup`.

Ejecutar script build

```bash
npm run build
```

## Configurar Rollup

Usaremos Rollup como nuestro empaquetador, entonces a instalarlo.

```bash
npm i -D rollup
```

### Plugins

Rollup tiene un sistema de complementos mediante el cual podemos especificar todas las tareas que deben realizarse durante el proceso de agrupación. Necesitaremos los siguientes plugins

- `@rollup/plugin-node-resolve` - Resolver dependencias de terceros en `node_modules`
- `@rollup/plugin-commonjs` - Para agrupar en formato `commonjs`
- `@rollup/plugin-typescript` - Para transpilar nuestro código Typescript en Js
- `rollup-plugin-peer-deps-external` - Para evitar la agrupación `peerDependencies`
- `rollup-plugin-postcss` - Para manejar nuestro css
- `rollup-plugin-terser` - Para minimizar nuestro paquete

Vamos a instalar

```bash
npm i -D @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser
```

## rollup.config.js

El siguiente paso es agregar el archivo. Es aquí donde están nuestras configuraciones de rollup.

```js rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
        terser()
    ]
}
```

### Poniendo todo junto

Debemos agregar y modificar unos parámetros en nuestro archivo `package.json`

```json package.json
"main": "dist/cjs/index.js",
"module": "dist/esm/index.js",
```

No olvidemos ahora que usaremos `Rollup` debemos cambiar el script `build`.

```json package.json
"build": "rollup -c"
```

Si ejecutamos `npm run build`, podremos ver en nuestra carpeta `dist` con los cambios realizados con rollup.

Hasta ahora ya tenemos nuestra propia libreria de componentes para facilitarnos la vida.

## Probar 

Podemos probar nuestra biblioteca localmente usando `npm pack` o `npm link`.

## Restringir directorios 

Si solo queremos que nuestro paquete sea una carpeta podemos agregar

```json package.json
"files": [
    "dist"
  ],
```

De momento podemos decir que esta todo bien, sin embargo, hay alguna cosas mas que podemos hacer para mejorar.

## Tipos de agrupación

Si te fijas en nuestra carpta después de ejecutarlo, podemos ver que no estamos agrupando nuestros tipos. La ventaja de usar TS, aquí es que los editores de código pueden recoger los tipos y proporcionar Interllsense y verificación de tipos estáticas, lo cual es super útil. también reduce la necesidad de mirar la documentación.

Necesitamos agregar algunas configuraciones en nuestro archivo `tsconfig.json`

```json tsconfig.json
"declaration": true,
"declarationDir": "types",
"emitDeclarationOnly": true
```

Para mejorar y dejar todos los tipos en solo un archivo instalaremos el siguiente plugin `rollup-plugin-dts`.

```bash
npm i -D rollup-plugin-dts
```

Agregramos otro punto de entrada en nuestro archivo `rollup.config.js` para agregar los tipos de configuración.

```js rollup.config.js
{
  input: 'dist/esm/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: "esm" }],
  external: [/\.css$/],
  plugins: [dts()],
}
```

Lo que esto hace es tomar el archivo de nuestro paquete esm, analizar todos los tipos de archivos y generar un único archivo de tipos dentro de nuestra carpeta `dist/index.d.ts`.

```json package.json
"types": "dist/index.d.ts"
```