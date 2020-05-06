import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './rxjs/subject/subject.component';


const routes: Routes = [
  //{ path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'subject', component: SubjectComponent, data: { title: 'Login' } },

  //{ path: 'home', redirectTo: '/', pathMatch: 'full' },
  // 아래는 추가됨.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
