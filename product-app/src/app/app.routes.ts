import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    {
        // Ruta para la lista de productos
        path: 'inicio',component:ListProductComponent
    },
    {
        // Ruta por defecto que redirige a la lista de productos
        path: '', redirectTo: 'inicio', pathMatch: 'full'
    },
    {
        // Ruta para agregar un nuevo producto
        path: 'agregar',component:AddProductComponent
    },
    {
        // Ruta para editar un producto existente
        path: 'editar/:id',component:EditProductComponent
    }
];
