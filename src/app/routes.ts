import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes : Routes =[

    {path:'quiz',component:QuizComponent},
    {path:'result',component:ResultComponent},
    {path:'',redirectTo:'/quiz',pathMatch:'full'}
];
