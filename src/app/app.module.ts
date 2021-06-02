import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { PresentingComponent } from './content/presenting/presenting.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { ImmoComponent } from './content/services/immo/immo.component';
import { SoulteComponent } from './content/services/soulte/soulte.component';
import { CreditComponent } from './content/services/credit/credit.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MentionsLegalesComponent } from './content/mentions-legales/mentions-legales.component';
import { ConfidentialiteComponent } from './content/confidentialite/confidentialite.component';
import { ProtectionDonneesComponent } from './content/protection-donnees/protection-donnees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PresentingComponent,
    ContactComponent,
    ServicesComponent,
    ImmoComponent,
    SoulteComponent,
    CreditComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    MentionsLegalesComponent,
    ConfidentialiteComponent,
    ProtectionDonneesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
