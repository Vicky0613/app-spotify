import { Injectable } from '@angular/core';
import * as artistData from './json/artist.json'
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = environment.apiMusic
  private readonly httpHeaders = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  getArtistsJSON() {
    return artistData;
  }

  getArtists() {
    return this.http.get<any[]>(`${this.apiUrl}/artists`, this.httpHeaders);
  }

  getSongsByArtist(artistId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/tracks/artist/${artistId}`, this.httpHeaders);
  }
}
