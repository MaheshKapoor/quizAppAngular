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


export const appRoutes : Routes =[

    {path:'quiz',component:QuizComponent},
    {path:'result',component:ResultComponent},
    {path:'dkt',component:DktComponent},
    {path:'main',component:MainComponent},
    {path:'math',component:MathComponent},
  {path:'IndianIndependence',component:IndianIndependenceComponent},
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'**',component:ErrorComponent}

];
