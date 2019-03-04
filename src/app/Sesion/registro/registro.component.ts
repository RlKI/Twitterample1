import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  user: User = new User();

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      passconf : new FormControl('', [Validators.required])
    });

    this.user.id=1;
  }

  ngOnInit() {
  }

  getErrorMessage(fc: FormControl) {
    //return 'Debe ingresar un valor'
    return fc.hasError('required') ? 'Debes ingresar un valor' :
        fc.hasError('email') ? 'Correo inválido' :
            '';
  }

  registroClick(){ 
    alert("Registro completo");
    console.log(this.user);
  }

}
