# Verificación de Google Search Console

Este documento explica cómo verificar la propiedad de tu sitio en Google Search Console.

## Método 1: HTML Tag (Meta Tag) - RECOMENDADO

1. Ve a Google Search Console y selecciona el método "HTML tag"
2. Copia el código que te proporciona Google. Debería verse así:
   ```html
   <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   ```
3. Abre el archivo `app/layout.tsx`
4. En la sección `<head>`, añade el meta tag. Debería quedar así:
   ```tsx
   <head>
     <link rel="privacy-policy" href="https://www.notelert.com/privacy/" />
     <link rel="canonical" href="https://www.notelert.com" />
     <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
   </head>
   ```
5. Reemplaza `TU_CODIGO_AQUI` con el código real que te dio Google
6. Haz commit y push a GitHub
7. Espera a que GitHub Pages actualice el sitio (puede tardar unos minutos)
8. Vuelve a Google Search Console y haz clic en "Verificar"

## Método 2: HTML File Upload

1. Ve a Google Search Console y selecciona el método "HTML file upload"
2. Google te proporcionará un archivo HTML para descargar (ej: `google1234567890abcdef.html`)
3. Descarga ese archivo
4. Copia el archivo a la carpeta `public/` de este proyecto
5. Haz commit y push a GitHub
6. Espera a que GitHub Pages actualice el sitio
7. Verifica que el archivo sea accesible en: `https://www.notelert.com/google1234567890abcdef.html`
8. Vuelve a Google Search Console y haz clic en "Verificar"

## Notas Importantes

- El archivo HTML de verificación debe estar en la raíz del sitio (por eso va en `public/`)
- No modifiques el contenido del archivo HTML que te proporciona Google
- Después de verificar, NO elimines el meta tag ni el archivo HTML, o perderás la verificación
- La verificación puede tardar unos minutos en completarse después de hacer el deploy

