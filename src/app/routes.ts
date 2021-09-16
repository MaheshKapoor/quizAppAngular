import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
import {DktComponent} from "./dkt/dkt.component";
import {ErrorComponent} from "./error/error.component";
import {MainComponent} from "./main/main.component";
import {MathComponent} from "./math/math.component";
import {IndianIndependenceComponent} from "./independence/India/india.independence.component";
import {IndiaComponent} from "./independence/India/india.component";
import {FlashCardComponent} from "./flashcard/flashCard/flashcard.component";
import {Age2Component} from "./flashcard/age2/age2.component";
import {Age3Component} from "./flashcard/age3/age3.component";
import {Age4Component} from "./flashcard/age4/age4.component";
import {Age1Component} from "./flashcard/age1/age1.component";
import {SpeechComponent} from "./flashcard/speechMain/speech.component";


export const appRoutes : Routes =[

    {path:'quiz',component:QuizComponent},
    {path:'flashcard/:id',component:FlashCardComponent},
    {path:'age1speechdevelopment',component:Age1Component},
    {path:'age2speechdevelopment',component:Age2Component},
    {path:'age3speechdevelopment',component:Age3Component},
    {path:'age4speechdevelopment',component:Age4Component},
    {path:'speechdevelopment',component:SpeechComponent},
    {path:'result',component:ResultComponent},
    {path:'dkt',component:DktComponent},
    {path:'main',component:MainComponent},
    {path:'math',component:MathComponent},
    {path:'indianIndependence',component:IndianIndependenceComponent},
    {path:'india',component:IndiaComponent},
    {path:'australia',component:IndiaComponent},
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'**',component:ErrorComponent}

];
