import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './main/main.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TempComponent } from './temp/temp.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{path:'', component:MainComponent},
                        {path:'about', component:AboutComponent},
                        {path:'reactive', component:ReactiveComponent},
                        {path:'subs', component:SubscribeComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'temp', component:TempComponent,canActivate:[AuthGuard]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
