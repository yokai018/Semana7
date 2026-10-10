import { Component } from '@angular/core';
import { Encabezado } from './components/encabezado/encabezado';
import { Catalogo } from './components/catalogo/catalogo';
import { PRODUCTOS_MOCK } from './data/productos-mock';
@Component({
selector: 'app-root',
// Componentes que esta plantilla puede usar
imports: [Encabezado, Catalogo],
templateUrl: './app.html',
styleUrl: './app.scss',
})
export class App {
// Dato que el componente raíz envía al encabezado
protected readonly totalProductos = PRODUCTOS_MOCK.length;
}