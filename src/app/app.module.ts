import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { APP_ROUTERS } from './app.routes';
//modulos
import { PagesModule } from './pages/pages.module';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTERS,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
