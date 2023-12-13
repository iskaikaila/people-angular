import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  people:any[]
  query:string

  constructor(private ps:PeopleService) {
    this.query = ''
    this.people=[]
    
    // this.people = [
    //   {
    //     name : "bobby",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "aaa",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "bbbb",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   },
    //   {
    //     name : "ccc",
    //     age: 42,
    //     instructor: true,
    //     added_on: new Date().getTime()
        
    //   }
      
    // ]
  }
  ngOnInit(): void {
    this.people=this.ps.get()
  }

  onPersonDelete(evt: { person_name: string }) {
    let del_per = evt.person_name
    // this.people = this.people.filter((p: { name: string }) => p.name != del_per)
    this.people=this.ps.delete(del_per)
    console.log(`person ${del_per} is deleted`)
    
  }
  

}
