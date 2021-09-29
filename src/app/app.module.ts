import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
// import {appRoutes, AppRoutingModule} from './routes';
import { QuizService } from './shared/quiz.service';
import { AuthGuard } from './auth/auth.guard';
import { DktComponent } from './dkt/dkt.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ResultcardComponent } from './resultcard/resultcard.component';
import {DKTService} from "./service/dkt/dkt.service";
import {MainComponent} from "./main/main.component";
import {MathComponent} from "./math/math.component";
import {IndianIndependenceComponent} from "./independence/India/india.independence.component";
import {IndiaComponent} from "./independence/India/india.component";
import {FlashCardComponent} from "./flashcard/flashCard/flashcard.component";
import {Age2Component} from "./flashcard/age2/age2.component";
import {Age3Component} from "./flashcard/age3/age3.component";
import {Age4Component} from "./flashcard/age4/age4.component";
import {SpeechComponent} from "./flashcard/speechMain/speech.component";
import {Age1Component} from "./flashcard/age1/age1.component";
import {PrivacyPolicyComponent} from "./sitedetail/privacypolicy/privacypolicy.component";
import {TandCComponent} from "./sitedetail/TermsAndConditions/tandc.component";
import {ContactUsComponent} from "./sitedetail/contactus/contactus.component";
import {AboutUsComponent} from "./sitedetail/aboutus/aboutus.component";
import {QuicklinkModule} from "ngx-quicklink";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    DktComponent,
    FlashCardComponent,
    Age1Component,
    Age2Component,
    Age2Component,
    Age3Component,
    Age4Component,
    SpeechComponent,
    FooterComponent,
    ErrorComponent,
    ProgressbarComponent,
    ResultcardComponent,
    MainComponent,
    MathComponent,
    IndianIndependenceComponent,
    IndiaComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TandCComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    //AppRoutingModule,
    //QuicklinkModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService,AuthGuard,DKTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
