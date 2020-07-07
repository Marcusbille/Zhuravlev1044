import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { GoodsRoutingModule } from './goods-routing.module';
import { EditorComponent } from './editor/editor.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GoodsComponent } from './goods.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MatIconModule } from '@angular/material/icon';
import { SearchFPipe } from './pipes/search-f.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { YPipe } from './pipes/y.pipe';

@NgModule({
  declarations: [
    EditorComponent,
    CatalogComponent,
    GoodsComponent,
    SearchFPipe,
    SortPipe,
    YPipe
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ]
})
export class GoodsModule { }
