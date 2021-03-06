import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import {DropdownModule} from "angular-custom-dropdown";

import { ModalModule } from './modal/modal.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CustomInterceptor } from './services/interceptor.service';
import { AuthGuard } from "./services/authGuard.service";
import { AuthService } from './services/auth.service';

import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MyFarmsComponent } from './components/my-farms/my-farms.component';
import { OwnerComponent } from './components/landing/owner/owner.component';
import { FarmerComponent } from './components/landing/farmer/farmer.component';
import { SharedService } from './services/shared.service';
import { MyProposalsComponent } from './components/my-proposals/my-proposals.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { GoogleMapsService } from './services/google-maps.service';
import {FarmService} from "./services/farm.service";
import { ProposalService } from './services/proposal.service';
import { ForumService } from './services/forum.service';
import { UserService } from './services/user.service';
import { ForumsComponent } from './components/forums/forums.component';
import { ForumDetailsComponent } from './components/forum-details/forum-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminComponent } from './components/landing/admin/admin.component';
import { FeedComponent } from './components/feed/feed.component';
import { MyFeedComponent } from './components/my-feed/my-feed.component';
import { FeedService } from './services/feed.service';
import {JasperoAlertsModule} from "@jaspero/ng2-alerts/dist";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function authServiceFactory(authService: AuthService): Function {
  return () => authService.checkSession();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    MyFarmsComponent,
    OwnerComponent,
    FarmerComponent,
    MyProposalsComponent,
    ProposalComponent,
    ForumsComponent,
    ForumDetailsComponent,
    ProfileComponent,
    EditProfileComponent,
    AdminComponent,
    FeedComponent,
    MyFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaI2kPf5ry2flRY1Gu4Jbf2OyvtWBa9uE',
      libraries: ["places"]
    }),
    ModalModule,
    NguiAutoCompleteModule,
    DropdownModule,
    BrowserAnimationsModule,
    JasperoAlertsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: authServiceFactory,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
    SharedService,
    GoogleMapsService,
    FarmService,
    ProposalService,
    ForumService,
    UserService,
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
