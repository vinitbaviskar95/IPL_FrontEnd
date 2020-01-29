import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { PasswordhistorylogComponent } from './passwordhistorylog/passwordhistorylog.component';
import { OnlineusersComponent } from './onlineusers/onlineusers.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { UpdateplayerComponent } from './updateplayer/updateplayer.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddteamComponent } from './addteam/addteam.component';
import { UpdateteamComponent } from './updateteam/updateteam.component';
import { ResultComponent } from './result/result.component';
import { BidComponent } from './bid/bid.component';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AuthGuard } from './auth.guard';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    SignInComponent,
    FooterComponent,
    RoleComponent,
    UserComponent,
    PasswordhistorylogComponent,
    OnlineusersComponent,
    ChangepasswordComponent,
    ContactComponent,
    SignUpComponent,
    TeamComponent,
    PlayerComponent,
    AddplayerComponent,
    UpdateplayerComponent,
    UserdashboardComponent,
    AddteamComponent,
    UpdateteamComponent,
    ResultComponent,
    BidComponent,
    BidhistoryComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"",component:HomeComponent},
      {path:"aboutus",component:AboutComponent},
      
      {path:"dashboard",component:DashboardComponent,
      children:
      [{path:"bidhistory",component:BidhistoryComponent},
      {path:"onlineusers",component:OnlineusersComponent},
      {path:"forgetpassword",component:ForgetpasswordComponent},
      {path:"passwordhistory",component:PasswordhistorylogComponent},
      {path:"changepassword",component:ChangepasswordComponent},
      {path:"user",component:UserComponent},
      {path:"player",component:PlayerComponent},
      {path:"team",component:TeamComponent}],
    },

      {path:"footer",component:FooterComponent},
      {path:"onlineusers",component:OnlineusersComponent},
      {path:"passwordhistory",component:PasswordhistorylogComponent},
      {path:"role",component:RoleComponent},
      {path:"changepassword",component:ChangepasswordComponent},
      {path:"signup",component:SignUpComponent},
      {path:"user",component:UserComponent},
      {path:"contact",component:ContactComponent},
      {path:"signin",component:SignInComponent},
      {path:"team",component:TeamComponent},
      {path:"player",component:PlayerComponent},
      {path:"addplayer",component:AddplayerComponent},
      {path:"updateplayer/:PlayerId",component:UpdateplayerComponent},
      {path:"userdashboard",component:UserdashboardComponent,children:[{path:"bidhistory",component:BidhistoryComponent},
        {path:"changepassword",component:ChangepasswordComponent},{path:"player",component:PlayerComponent},{path:"team",component:TeamComponent}],
      },
      
      {path:"addteam",component:AddteamComponent},
      {path:"updateteam/:TeamId",component:UpdateteamComponent},
      {path:"result",component:ResultComponent},
      {path:"bid/:PlayerId",component:BidComponent},
      {path:"bidhistory",component:BidhistoryComponent},
      {path:"forgetpassword",component:ForgetpasswordComponent}
      
    ])
   
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
