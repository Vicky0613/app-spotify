import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage {

  constructor(
    private sidebar: MenuController, 
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  // ngOnInit() {
  // }

  closeSidebar() {
    this.sidebar.close();
  }

  logout(){
    this.navCtrl.navigateRoot('/login');
    this.storage.set('isLoggedIn', false);
    this.storage.set('user', null);

  }

}
