import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }

  async loginUser(credentials: any){
    return new Promise<any>(async (resolve, reject) => {
      const user = await this.storage.get("user")
      if(credentials.email === user.email && credentials.password === atob(user.password)){
        resolve({message: 'Login successful'});
      }else {
        reject({message: 'Invalid credentials'});
      }
    })
  }

  register(data: any) {
    data.password = btoa(data.password)
    return this.storage.set("user", data)
  }
}
