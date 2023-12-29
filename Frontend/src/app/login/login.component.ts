import {FormGroup, FormBuilder, Validators, NgForm, ReactiveFormsModule} from '@angular/forms';
import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-login', // le sélecteur est utilisé dans le HTML pour afficher le composant
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailErrorMessage: string = 'Veuillez saisir votre Mail';
  passwordErrorMessage: string = 'Veuillez saisir votre identifiant';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      // Ajoutez ici la logique pour envoyer les données au serveur
    }
    else {
      this.emailErrorMessage = form.controls['email'].hasError('required') ? 'Email is required' : '';
      this.emailErrorMessage = form.controls['email'].hasError('email') ? 'Enter a valid email' : this.emailErrorMessage;

      this.passwordErrorMessage = form.controls['password'].hasError('required') ? 'Password is required' : '';
      // Ajoutez ici d'autres validations si nécessaire
    }
  }
}


