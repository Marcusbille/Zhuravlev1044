import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './goods.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: 'thing',
        component: EditorComponent
      },
      {
        path: 'thing/:id',
        component: EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
