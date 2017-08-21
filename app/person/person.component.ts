import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name; age ;flag:boolean;

  constructor(private ar:ActivatedRoute, private rt:Router) { }

  ngOnInit() {
    this.ar.params.subscribe(
      (params:Params) => {
        this.name = params['name']
        this.age = params['age']
      }
      
    )

    this.ar.queryParams.subscribe(
      (params:Params) =>{
         this.flag = (params['editable'] == 'true');
      }
    )
    
  }

  nav(){
   this.rt.navigate(['/profile/edit'], {queryParamsHandling:'preserve'});
  }

}
