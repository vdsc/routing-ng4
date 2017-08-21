import { Component, OnInit } from '@angular/core';
import { CenterService} from '../center.service'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [CenterService]
})
export class PersonsComponent implements OnInit {
  
  Persons;
  constructor(private cs:CenterService) { }

  ngOnInit() {
    this.Persons = this.cs.data;
  }

}
