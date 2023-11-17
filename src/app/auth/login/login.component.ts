import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public formSubmitted = false;

  miFormulario: FormGroup = this.fb.group({
    username: ['', [ Validators.required, Validators.minLength(4) ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]],
    remember: [false]
  });


  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router){}


  login(){
    this.formSubmitted = true;


    this.userService.loginUser(this.miFormulario.value)
      .subscribe(
        {
          next: resp => {
            if(this.miFormulario.get('remember')!.value){
              localStorage.setItem('email', resp.email);
            }else{
              localStorage.removeItem('email')
            }
            this.router.navigateByUrl('/inicio')
            
          },
          error: (err) =>{Swal.fire('Error', err.error.msg, 'error')}
        }
      )
    

  }


  //VALIDACIONES DE FORMULARIO
  campoNoValido(campo: string): boolean {
    if(this.miFormulario.get(campo)?.invalid && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }

}
