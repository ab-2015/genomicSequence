import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPathogenComponent} from '../app/list-pathogen/list-pathogen.component';
import { AddPathogenComponent} from '../app/add-pathogen/add-pathogen.component';


const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListPathogenComponent},
    {path: 'add', component: AddPathogenComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
