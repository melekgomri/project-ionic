import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisteur-list',
  templateUrl: './utilisteur-list.page.html',
  styleUrls: ['./utilisteur-list.page.scss'],
})
export class UtilisteurListPage implements OnInit {

  utilisateurs: any[] = [];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit() {
    // Charger tous les utilisateurs au démarrage de la page
    this.loadUtilisateurs();
  }

  // Fonction pour charger la liste des utilisateurs
  loadUtilisateurs() {
    this.utilisateurService.getallutilisateur().subscribe(
      (data) => {
        this.utilisateurs = data;
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );
  }
  deleteUtilisateur(id: string) {
    this.utilisateurService.deleteutilisateur(id).subscribe(
      (response) => {
        console.log('User deleted:', response);
        this.loadUtilisateurs(); // Recharger les utilisateurs après suppression
      },
      (error) => {
        console.log('Error deleting user:', error);
      }
    );
  }


}
