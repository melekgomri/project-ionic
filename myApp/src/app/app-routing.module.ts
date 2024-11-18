import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'trajet',
    loadChildren: () => import('./trajet/trajet.module').then( m => m.TrajetPageModule)
  },
  {
    path: 'list-trajet',
    loadChildren: () => import('./list-trajet/list-trajet.module').then( m => m.ListTrajetPageModule)
  },
  {
    path: 'add-delete-reservation/:id',
    loadChildren: () => import('./add-reservation/add-delete-reservation.module').then( m => m.AddDeleteReservationPageModule)
  },
  {
    path: 'liste-delete-reservation',
    loadChildren: () => import('./liste-delete-reservation/liste-delete-reservation.module').then( m => m.ListeDeleteReservationPageModule)
  },
  {
    path: 'utilisteur-list',
    loadChildren: () => import('./utilisteur-list/utilisteur-list.module').then( m => m.UtilisteurListPageModule)
  },
  {
    path: 'list-trajet-covoitureur',
    loadChildren: () => import('./list-trajet-covoitureur/list-trajet-covoitureur.module').then( m => m.ListTrajetCovoitureurPageModule)
  },
  // {
  //   path: 'update-profile',
  //   loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  // },
  {
    path: 'edit-trajet',
    loadChildren: () => import('./edit-trajet/edit-trajet.module').then( m => m.EditTrajetPageModule)
  },
  {
    path: 'profile-passager/:id',
    loadChildren: () => import('./profile-passager/profile-passager.module').then( m => m.ProfilePassagerPageModule)
  },
  {
    path: 'changepwd-passager/:id',
    loadChildren: () => import('./changepwd-passager/changepwd-passager.module').then( m => m.ChangepwdPassagerPageModule)
  },
  {
    path: 'reservations-passager/:id',
    loadChildren: () => import('./reservations-passager/reservations-passager.module').then( m => m.ReservationsPassagerPageModule)
  },
  {
    path: 'list-covoitureurs',
    loadChildren: () => import('./list-covoitureurs/list-covoitureurs.module').then( m => m.ListCovoitureursPageModule)
  },
  {
    path: 'rate-carpooler/:id',
    loadChildren: () => import('./rate-carpooler/rate-carpooler.module').then( m => m.RateCarpoolerPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
