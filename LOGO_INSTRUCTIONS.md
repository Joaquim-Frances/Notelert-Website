# Instrucciones para el Logo

Para que el logo se muestre correctamente en la web, necesitas:

1. **Colocar el archivo del logo** en la carpeta `public/` con el nombre `logo.png`
2. El logo debe ser una imagen cuadrada (recomendado: 512x512px o 1024x1024px)
3. Formatos soportados: PNG, JPG, WEBP

El logo se mostrará en:
- El header/navbar (tamaño pequeño: 40x40px)
- La sección Hero (tamaño grande: 120x120px)

Si tu logo tiene un nombre diferente o está en otra ubicación, actualiza las rutas en:
- `components/Header.tsx` (línea con `src="/logo.png"`)
- `components/Hero.tsx` (línea con `src="/logo.png"`)

