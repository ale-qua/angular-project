import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: '', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
