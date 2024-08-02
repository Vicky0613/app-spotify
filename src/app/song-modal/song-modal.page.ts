import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {

  artist: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.artist = this.navParams.get('artist');
    console.log('this.artist:', this.artist)
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  async selectedSong(song: any){
    await this.modalController.dismiss(song);
  }

}
