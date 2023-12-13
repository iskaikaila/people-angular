import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { PeopleService } from '../people.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent {
  form: FormGroup
  constructor(private ps: PeopleService, private router:Router){
    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
        
      ]),
      instructor: new FormControl(),
      age: new FormControl()
    }
    this.form = new FormGroup(formControls)
  }

    

  formValidator: ValidatorFn = ( control: AbstractControl ):ValidationErrors| null=> {
    const name = control.get("name")
    const ins = control.get("instructor")
    const valid_name = ['bobby', 'steve']
    return valid_name.includes(name!.value.trim()) && ins!.value || !ins!.value ?
       null: {form_error: true}
      
  }
    

  onSubmit(newPerson:any) {
    // console.log(newPerson)
    this.ps.add(newPerson)
    this.router.navigate(["/people"])
  }
}