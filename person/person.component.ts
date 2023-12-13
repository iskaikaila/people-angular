import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit{
  @Input() person: any
  @Output() delete=new EventEmitter()

  
  constructor(private router:Router) {
    // this.person = {
    //   name : "bobby",
    //   age: 42,
    //   instructor: true,
    //   added_on: new Date().getTime()
      
    // }
    
  }

  onDelete(evt: any, person_name:string) {
    evt["person_name"] = person_name
    this.delete.emit(evt)
  }

  ngOnInit(): void {
  }

  onView() {
    this.router.navigate(["/person",this.person.name])
  }
  


}
