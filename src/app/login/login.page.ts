import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
 loginForm!: FormGroup;

 toastMessage: string = '';
 isToastOpen: boolean = false;

 validation_message = {
   email: [
    {type: 'required', message: 'El Email es requerido'},
    {type: 'email', message: 'Email invalido'}
   ],
   password: [
    {type: 'required', message: 'La contraseña es requerida'},
    {type: 'minlength', message: 'La contraseña debe contener al menos 8 caracteres'}
   ],
 }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
  ) { 
    
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "", 
        Validators.compose(
          [Validators.required, Validators.email]
        )),
      password:  new FormControl(
        "", 
        Validators.compose(
          [Validators.required, Validators.minLength(8)]
        ))
    });
  }


  login(data: any){
    this.authService.loginUser(data).then(resp => {
      this.storage.set('isLoggedIn', true);
      this.navCtrl.navigateForward("/sidebar/home")
    }).catch(err => {
      this.storage.set('isLoggedIn', false);
      this.toastMessage = err.message;
      this.isToastOpen = true;
    });
  }

  setOpen(isOpen: boolean){
    this.isToastOpen = isOpen;
  }
  // ngOnInit() {
  // }

}
