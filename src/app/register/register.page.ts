import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup

  validation_message = {
    email: [
     {type: 'required', message: 'El Email es requerido'},
     {type: 'email', message: 'Email invalido'}
    ],
    password: [
     {type: 'required', message: 'La contraseña es requerida'},
     {type: 'minlength', message: 'La contraseña debe contener al menos 8 caracteres'}
    ],
    name: [
     {type:'required', message: 'El nombre es requerido'},
     {type:'minlength', message: 'El nombre debe tener al menos 3 caracteres'}
    ],
    lastname: [
      {type:'required', message: 'El apellido es requerido'},
      {type:'minlength', message: 'El apellido debe tener al menos 3 caracteres'}
     ],
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private _authService: AuthService
   ) { 
    
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '', 
        [Validators.required, Validators.email]
       ),
      name: new FormControl(
        '', 
        [Validators.required, Validators.minLength(3)]
      ),
      password: new FormControl(
        '', 
        [Validators.required, Validators.minLength(8)]
    ),
    lastname: new FormControl(
      '', 
      [Validators.required, Validators.minLength(3)]
   )
  })
}

  // ngOnInit() {
  // }

  register(data: any) {
    this._authService.register(data).then((response: any) =>{
      this.navCtrl.navigateBack("/login")
    })
  }

  navigateToLogin(){
    this.navCtrl.navigateBack("/login")
  }

}
