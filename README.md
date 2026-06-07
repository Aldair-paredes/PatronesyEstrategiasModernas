# Panini Cómics & Manga

El proyecto cumple estrictamente con las convenciones de arquitectura moderna mediante los siguientes módulos:

1. **Componentes de Presentación y Contenedores (Ciclo de Vida):** Separación estricta de la interfaz física (`ProductCard`) y la lógica de datos (`ProductListContainer`).
2. **Context API (Estado Global Simplificado):** Unificación de la lógica del carrito de compras a través de `CartContext`, permitiendo que cualquier componente acceda a los productos seleccionados
3. **Custom Hooks (Persistencia de Datos):** Implementación de `useLocalStorage` para abstraer la lógica de almacenamiento e impedir la pérdida de datos del carrito al refrescar el navegador.
4. **Render Props (Componentes Reutilizables):** El componente de búsqueda `Searcher` procesa el filtrado en tiempo real y delega el renderizado de los elementos al padre de forma declarativa.
5. **Code Splitting (Carga Perezosa):** Uso de `React.lazy()` y `Suspense` para diferir la descarga de la pasarela de pago (`CartCheckout`) hasta que el usuario decida realizar la transacción, aligerando la carga inicial del sitio.

---

## Estructura del Proyecto

```text
src/
├── assets/         # Recursos estáticos
├── context/        # Proveedores de estado global (CartContext)
├── hooks/          # Hooks personalizados y reutilizables (useLocalStorage)
├── product/        # Componentes relacionados al negocio de productos
├── reusable/       # Componentes atómicos de UI (Button, Card, Searcher)
├── cart/           # Módulos de la pasarela de compras diferida
├── pages/          # Vistas principales de la aplicación (MainStorePage)
├── App.jsx         # Punto de entrada y envoltura de proveedores
└── main.jsx        # Inicialización de React con Vite