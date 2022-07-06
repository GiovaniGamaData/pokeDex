import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListCardComponent } from './poke-list-card/poke-list-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'poke-list'
  },
  {
    path: 'poke-list',
    component: PokeListCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
