import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { LocalesComponent } from './components/locales/locales.component';
import { MenuComponent } from './components/menu/menu.component';
import { NovedadesComponent } from './components/novedades/novedades.component';


const routes: Routes = [{ path: 'menu', component: MenuComponent },
{ path: 'DetalledelItem', component: ItemDetailComponent },
{ path: 'novedades', component: NovedadesComponent },
{ path: 'locales', component: LocalesComponent },
{ path: '**', component: MenuComponent }];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
