# Aplicación móvil para la Clínica Nacho Menes

Este proyecto es una aplicación móvil, que puede ser usada para planificar las desparasitaciones
y/o vacunas de su mascota.

La aplicación generará recordatorios al usuario cuando ser acerque la fecha de la toma.

## Empezar

Para empezar clona el repositorio menes.mobile  e instala las dependecias:

### Clonar menes.mobile

Clona el repositorio menes.mobile usando [git][git]:

```
git clone https://github.com/thingtrack/menes.mobile.git
cd menes.mobile
```

## Dependencias

  * JQuery
  * JQuery Mobile
  * Angularjs
  * Mobiscroll
  * Cordova

## Estructura del proyecto

    www/                --> all of the files to be used in production
      css/              --> hojas de estilo
      data/             --> maestros en formato json
      img/              --> recursos
      js/               -->  archivos javascript
        app.js          --> aplicación
        controllers.js  --> controladores
        directives.js   --> directivas
        filters.js      --> filtros
        services.js     --> servicios angular personalizados
      partials/         --> plantillas de angular
      res/              --> recursos nativos para cada plataforma 
      index.html        --> página principal

    plugins/            --> plugins de Cordova
    plataforms/         --> compilación de las plataformas
    hooks/              --> directorio de Cordova
    merges/             --> directorio de Cordova