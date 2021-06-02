import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { PresentingComponent } from './content/presenting/presenting.component';
import { ServicesComponent } from './content/services/services.component';
import { ConfidentialiteComponent } from './content/confidentialite/confidentialite.component';
import { ProtectionDonneesComponent } from './content/protection-donnees/protection-donnees.component';
import { MentionsLegalesComponent } from './content/mentions-legales/mentions-legales.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'presenting', component: PresentingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'confidentialite', component: ConfidentialiteComponent},
  {path: 'protection-donnees', component: ProtectionDonneesComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
