//import {Routes, RouterModule, PreloadAllModules} from '@angular/router'
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
import {AboutUsComponent} from "./sitedetail/aboutus/aboutus.component";
import {ContactUsComponent} from "./sitedetail/contactus/contactus.component";
import {TandCComponent} from "./sitedetail/TermsAndConditions/tandc.component";
import {PrivacyPolicyComponent} from "./sitedetail/privacypolicy/privacypolicy.component";
// import {NgModule} from "@angular/core";
// import {QuicklinkStrategy} from "ngx-quicklink";


export const appRoutes : Routes =[

    {path:'quiz/:id',component:QuizComponent},
    {path:'flashcard/:id',component:FlashCardComponent},
    {path:'age1speechdevelopment',component:Age1Component},
    {path:'age2speechdevelopment',component:Age2Component},
    {path:'age3speechdevelopment',component:Age3Component},
    {path:'age4speechdevelopment',component:Age4Component},
    {path:'speechdevelopment',component:SpeechComponent},
    {path:'result',component:ResultComponent},
    {path:'dktpracticetest',component:DktComponent},
    {path:'dkt',redirectTo:'/dktpracticetest',pathMatch:'full'},
    {path:'main',component:MainComponent},
    {path:'error', component:ErrorComponent},
    {path:'math',component:MathComponent},
    {path:'indianIndependence',component:IndianIndependenceComponent},
    {path:'india',component:IndiaComponent},
    {path:'australia',component:IndiaComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'termsandconditions',component:TandCComponent},
    {path:'privacypolicy',component:PrivacyPolicyComponent},
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'**',redirectTo:'/error'}

];
//
// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes,{ initialNavigation: 'enabledBlocking', preloadingStrategy: QuicklinkStrategy })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

