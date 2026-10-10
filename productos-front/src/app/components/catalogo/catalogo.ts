import { Component, computed, signal } from '@angular/core';
import { Producto } from '../../models/producto';
import { PRODUCTOS_MOCK } from '../../data/productos-mock';
import { ProductoCard } from '../producto-car/producto-car';
import { DetalleProducto } from '../detalle-producto/detalle-producto';
@Component({
selector: 'app-catalogo',
imports: [ProductoCard, DetalleProducto],
templateUrl: './catalogo.html',
styleUrl: './catalogo.scss',
})
export class Catalogo {
// Estado del componente con signals
readonly productos = signal<Producto[]>(PRODUCTOS_MOCK);
readonly filtro = signal('');
readonly seleccionado = signal<Producto | null>(null);
// Lista derivada: se recalcula sola cuando cambia el filtro o los productos
readonly productosFiltrados = computed(() => {
const texto = this.filtro().trim().toLowerCase();
return this.productos().filter((p) => p.nombre.toLowerCase().includes(texto));
});
buscar(texto: string): void {
this.filtro.set(texto);
}
// Recibe el producto emitido por ProductoCard (hijo → padre)
mostrarDetalle(producto: Producto): void {
this.seleccionado.set(producto);
}
cerrarDetalle(): void {
this.seleccionado.set(null);
}
}