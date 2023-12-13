import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrl: './person-view.component.css'
})
export class PersonViewComponent {
  pname: string
  constructor(private activeedRoute: ActivatedRoute) {
    this.pname = activeedRoute.snapshot.params['name']
  }

}
