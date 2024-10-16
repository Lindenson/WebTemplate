# Proyecto: Vite + Mocha + Chai

Proyecto HTTP + JS universal utilizando Vite para la construcción y desarrollo, así como Mocha y Chai para pruebas.

## Inicialmente

```
npm install
```

## Scripts

- `npm run dev`: Iniciar el servidor de desarrollo.
- `npm run build`: Construir el proyecto para producción.
- `npm run serve`: Vista previa del proyecto construido.
- `npm run test`: Ejecutar pruebas con Mocha y Chai.
- `mpm run browse`: Vista la pajina de informes de prueba.

## Estructura del Proyecto
```
/
├── dist/                  # Carpeta donde se almacenan los archivos construidos para producción.
├── src/                   # Carpeta que contiene los archivos de código fuente.
│   ├── index.html         # Archivo HTML principal del proyecto.
│   ├── css                # Carpeta que contiene los archivos de css del proyecto.
│   ├── html               # Carpeta que contiene los archivos de html del proyecto.
│   └── js                 # Carpeta que contiene los archivos de JavaScript del proyecto.
├── test/js                # Carpeta que contiene las pruebas del proyecto.
├── mocha.config.js        # Archivo de configuración de Mocha para las pruebas.
├── package.json           # Archivo de configuración del proyecto, incluye dependencias y scripts.
├── package-lock.json      # Archivo que bloquea las versiones exactas de las dependencias instaladas.
├── server.js              # Archivo de servidor, para servir el proyecto.
├── README.md              # Archivo README con información del proyecto.
└── vite.config.js         # Archivo de configuración de Vite para la construcción y desarrollo del proyecto.
```