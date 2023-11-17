import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  public formSubmitted = false;

  miFormulario: FormGroup = this.fb.group({
    username: ['', [ Validators.required, Validators.minLength(4) ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]],
    roles:[['ROLE_USER']]
  });

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router){

  }

  register(){
    this.formSubmitted = true;

    if(this.miFormulario.invalid){
      return;
    }
  
    this.userService.registerUser(this.miFormulario.value)
      .subscribe(
        {
          next: resp => {Swal.fire('Te has registrado con éxito'),
                          this.router.navigateByUrl('/inicio')},
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
