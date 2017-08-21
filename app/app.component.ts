import { Component, OnInit } from '@angular/core';
import { CenterService} from './center.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CenterService]
})
export class AppComponent implements OnInit {
    
  constructor(private cs:CenterService){}

  ngOnInit(){

    this.cs.logdata();
  }


 
  }










