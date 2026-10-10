# Semana7

## Iniciar la aplicación Angular

El workspace de Angular está en `productos-front`. Ejecuta los comandos de Angular
desde esa carpeta:

```bash
cd productos-front
npm install
npm start
```

Después, abre `http://localhost:4200/`.

Si ya estás en la raíz del repositorio, también puedes iniciar la aplicación con:

```bash
npm --prefix productos-front start
```

Para usar comandos de Angular CLI, como `ng generate`, primero cambia a
`productos-front`; ejecutarlos desde la raíz del repositorio produce el error
“This command is not available when running the Angular CLI outside a workspace”.
