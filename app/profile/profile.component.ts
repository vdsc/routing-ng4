import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor(private test:Router, private now: ActivatedRoute ) {}

  ngOnInit() {
    this.now.queryParams.subscribe(
      (params:Params) => {console.log(params)}
    );

      this.now.fragment.subscribe(
        (fragment:string) => {console.log(fragment)}
      );
    
    
  }


  nav(){
     this.test.navigate(['/messages/1000/bank'],{relativeTo: this.now});
  }

}
