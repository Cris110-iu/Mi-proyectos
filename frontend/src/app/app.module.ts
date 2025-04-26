import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// otros componentes...

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule // <-- necesario para las peticiones al backend
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
