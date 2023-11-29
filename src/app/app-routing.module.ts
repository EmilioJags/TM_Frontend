import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './listPerson/listPerson.component';
import { AddPersonComponent } from './addPerson/addPerson.component';
import { DisplayPersonComponent } from './displayPerson/displayPerson.component';

const routes: Routes = [
  { path: 'home', component: ListPersonComponent },
  { path: 'add', component: AddPersonComponent },
  { path: ':id', component: DisplayPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
