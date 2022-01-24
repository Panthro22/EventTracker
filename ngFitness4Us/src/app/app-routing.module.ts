import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardioExerciseComponent } from './components/cardio-exercise/cardio-exercise.component';
import { HomeComponent } from './components/home/home.component';
import { WeightExerciseComponent } from './components/weight-exercise/weight-exercise.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cardioexcercises', component: CardioExerciseComponent},
  { path: 'weightexcercises', component: WeightExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
