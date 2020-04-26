import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component'
import { HttpClientModule } from '@angular/common/http';
import { TempComponent } from './temp/temp.component';
import { AuthGuard } from './auth.guard';
// import { MatButtonModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SliderComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SubscribeComponent,
    ContactComponent,
    ReactiveComponent,
    TemplateComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // MatButtonModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
