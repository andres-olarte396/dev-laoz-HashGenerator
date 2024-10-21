# Generador de Hashes (MD5, SHA-1, SHA-256)

Un generador de hashes simple para convertir texto en hashes utilizando los algoritmos MD5, SHA-1 y SHA-256. Ideal para verificar integridad o generar identificadores únicos.

## Características

- Generación de hashes rápidos y sin dependencias pesadas.
- Soporte para los algoritmos:
  - **SHA-256**
  - **SHA-1**
  - **MD5** (con un CDN)
- Interfaz limpia y fácil de usar.

## Requisitos

Solo necesitas un navegador moderno compatible con HTML5 y JavaScript.

## Instalación

1. Clona este repositorio o descarga los archivos directamente:

   ```bash
   git clone https://github.com/usuario/generador-hash.git
   ```

2. Abre el archivo `index.html` en tu navegador favorito.

## Uso

1. Escribe un texto en el campo de entrada.
2. Selecciona el algoritmo de hash (SHA-256, SHA-1 o MD5) en el menú desplegable.
3. Haz clic en el botón **"Generar Hash"**.
4. El hash generado se mostrará en el cuadro de salida.

## Estructura del Proyecto

```txt
/generador-hash
│
├── index.html       # Archivo principal con la estructura HTML.
├── styles.css       # Archivo de estilos CSS para diseño.
├── script.js        # Lógica JavaScript para generar los hashes.
└── README.md        # Documentación del proyecto.
```

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos para un diseño limpio y responsivo.
- **JavaScript**: Generación de los hashes usando la API nativa `SubtleCrypto` y la librería `blueimp-md5` para MD5.

## Algoritmos de Hash Soportados

- **SHA-256**: Un estándar moderno de hash seguro.
- **SHA-1**: Antiguamente usado, pero considerado obsoleto para seguridad en la actualidad.
- **MD5**: Rápido pero inseguro, se incluye solo para compatibilidad.

## Personalización

Puedes modificar las siguientes partes en el archivo `script.js`:

- **Algoritmos**: Cambia los algoritmos soportados por otros que necesites usando `SubtleCrypto`.
- **Interfaz**: Personaliza el diseño en `styles.css` para que se adapte a tu propio estilo.

## Ejemplo

![Generador de Hash](https://user-images.githubusercontent.com/example/generador-hash.png)

## Contribuir

Las contribuciones son bienvenidas. Si quieres mejorar el proyecto:

1. Haz un fork de este repositorio.
2. Crea una nueva rama con tus cambios.

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Haz commit de tus cambios.

   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```

4. Envía tus cambios a la rama principal.

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un **Pull Request**.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
