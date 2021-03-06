import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {PostModule} from './post/post.module';
import {ResidentModule} from './resident/resident.module';
import {BusinessModule} from './business/business.module';
import {NotificationModule} from './notification/notification.module';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {NeighborhoodModule} from './neighborhood/neighborhood.module';
import {LandingModule} from './landing/landing.module';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LayoutModule} from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RegistrationModule} from './neighborhoodLayout/default/registration.module';
import {AccountSettingsModule} from './account-settings/account-settings.module';
import {NeighborhoodRegistrationModule} from './neighborhood-registration/neighborhood-registration.module';
import {VisibilityService} from "./shared/visibility-service.service";
import { LoginResgistrationModule } from './login-resgistration/login-resgistration.module';

import { LocationRegistrationModule } from './location-registration/location-registration.module';
import {HomeModule} from "./home/home.module";
import { AgmCoreModule } from '@agm/core';
import { NeighborhoodLayoutModule } from './neighborhoodLayout/neighborhoodLayout.module';
import {GroupModule} from "./group/group.module";
import { LocationModule } from './location/location.module';
import { FavorModule } from './favor/favor.module';
import { BusinessRegistrationRoutingModule } from './businessRegistration/BusinessRegistrationRouting.module';
import { BusinessRegistrationModule } from './businessRegistration/businessRegistration.module';
import { FavorRoutingModule } from './favor/favor-routing/favor-routing.module';
import { FavorRegistrationRoutingModule } from './favor-registration/favorRegistrationRouting.module';
import { FavorRegistrationModule } from './favor-registration/favor-registration.module';
import { LocationRegistrationRoutingModule } from './location-registration/location-registration-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: LandingComponent},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    }),
    LandingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PostModule,
    ResidentModule,
    BusinessModule,
    BusinessRegistrationRoutingModule,
    BusinessRegistrationModule,
    FavorRoutingModule,
    FavorRegistrationRoutingModule,
    FavorRegistrationModule,
    NotificationModule,
    LocationRegistrationRoutingModule,
    NeighborhoodModule,
    LoginResgistrationModule,
    LoginModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    NeighborhoodRegistrationModule,
    NeighborhoodLayoutModule,
    AccountSettingsModule,
    LocationRegistrationModule,
    LocationModule,
    HomeModule,
    GroupModule,
    FavorModule,

  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
