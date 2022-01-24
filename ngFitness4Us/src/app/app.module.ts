import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WeightExerciseComponent } from './components/weight-exercise/weight-exercise.component';
import { CardioExerciseComponent } from './components/cardio-exercise/cardio-exercise.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { WeightExcerciseService } from './services/weight-excercise.service';
import { WeightTrainingService } from './services/weight-training.service';
import { CardioExcerciseService } from './services/cardio-excercise.service';
import { CardioTrainingService } from './services/cardio-training.service';
import { ImageService } from './services/image.service';
import { VideoService } from './services/video.service';
import { DailyLogEntrieService } from './services/daily-log-entrie.service';
import { WorkoutService } from './services/workout.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WeightExerciseComponent,
    CardioExerciseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UserService, WeightExcerciseService, WeightTrainingService, CardioExcerciseService, CardioTrainingService,
              ImageService, VideoService, DailyLogEntrieService, WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
