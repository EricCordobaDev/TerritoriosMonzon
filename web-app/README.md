# Proyecto Web de Gestión de Datos

Este proyecto es una aplicación web que permite visualizar y gestionar datos en una tabla. Los datos se cargan desde un archivo JSON y se pueden agregar nuevas filas que se guardan en el mismo archivo.

## Estructura del Proyecto

```
web-app
├── src
│   ├── index.html        # Página principal de la aplicación
│   ├── styles.css        # Estilos CSS para la aplicación
│   ├── app.js            # Script principal que maneja la lógica de la aplicación
│   └── data
│       └── data.json     # Archivo JSON que contiene los datos
├── package.json          # Configuración de npm
├── .gitignore            # Archivos y carpetas a ignorar por Git
└── README.md             # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu_usuario/web-app.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd web-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Abre el archivo `src/index.html` en un navegador web.
2. La tabla se llenará automáticamente con los datos del archivo `src/data/data.json`.
3. Para agregar nuevas filas, utiliza la interfaz de usuario proporcionada en la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.