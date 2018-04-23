# Arquitectura Aplicación
```bash
e2e
    ├── nombre-del-flujo.spec.ts
    ├── init.ts
    ├── mocha.opts
src
    ├── Components
        ├── nombre-del-componente
            ├── index.tsx
            ├── style.ts
            ├── index.spec.ts
    ├── Containers/
        ├── nombre-de-la-pantalla
            ├── index.ts
            ├── content.tsx
            ├── style.ts
    ├── Flux
        ├── nombre-de-producto
            ├── reducer.ts
            ├── selector.ts
            ├── action.ts
            ├── type.ts
    ├── Helpers
        ├── style.ts
        ├── animations.ts
    ├── Assets
        ├── audio
        ├── fonts
        ├── images
        ├── json
        ├── video
    ├── GraphQL
        ├── nombre-de-modelo
            ├── index.ts
    ├── Config
        ├── redux-config.ts
        ├── graphql-config.ts
        ├── enviroment-config.ts
storybooks
    ├── Stories
        ├── nombre-de-la-pantalla
            ├── index.ts
    ├── index.tsx
    ├── addons.js
    ├── config.js
    ├── index.js
tslint.json
tsconfig.json
```
## Nota:
1. Nombres de las _variables_ en inglés y camelcase
2. Nombre de las carpetas en inglés y camelcase