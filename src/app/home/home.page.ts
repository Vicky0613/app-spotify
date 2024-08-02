import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  artists: any[] = [];
  song = {
    name: '',
    playing: false,
    preview_url: ''
  };

  currentSong: any;
  newTime: any; 

  constructor(
    private router: Router,
    private _musicService: MusicService,
    private modalController: ModalController
  ) {}
  ngOnInit(): void {
  this.getArtists(); 
  }

  getArtistsJSON(){
    this.artists = this._musicService.getArtistsJSON().artists;
  }

  getArtists(){
   this._musicService.getArtists().subscribe({
      next: (data) => {
        this.artists = data;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }

 

 async showSongs(event: any) {
  const {id} = event;
  const songs = await this.getSongsByArtist(id)
    const modal = await this.modalController.create({
      component: SongModalPage,
      componentProps: {
        artist: {
          ...event,
          songs
        }
      }
    })

    modal.onDidDismiss().then((result: any) => {
      console.log('result:', result)
      this.song = result.data;
    });

    modal.present();
  }

  getSongsByArtist(artistId: number) {
    return new Promise((resolve, reject) => {
      this._musicService.getSongsByArtist(artistId).subscribe({
        next: (data: any) => resolve(data),
        error: (error: any) => reject(error)
      });
    });
  }

  play(){
   this.currentSong = new Audio(this.song.preview_url)
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime = (1 / this.currentSong.duration ) * (this.currentSong.currentTime);
    })
    this.song.playing = true;
  }

  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time = '0.00') {
    if(time){
      const partTime = parseInt(time.toString().split('.')[0], 10);
      let minutes = Math.floor(partTime/60).toString();
      let seconds = Math.floor(partTime % 60).toString();
  
      if(minutes.length == 1){
        minutes = '0' + minutes;
      }
  
      if(seconds.length == 1){
        seconds = '0' + seconds;
      }
       
      return minutes + ":" + seconds
    }

    return null;
  }

  navigateToIntro(){
    this.router.navigateByUrl("/intro")
  }
}
