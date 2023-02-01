import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: MainComponent},
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
