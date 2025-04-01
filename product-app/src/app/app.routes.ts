import { Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    {
        path: 'inicio',component:ListProductComponent
    },
    {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
    },
    {
        path: 'agregar',component:AddProductComponent
    },
    {
        path: 'editar/:id',component:EditProductComponent
    }
];
