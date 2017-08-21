import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  id = 4000;
  constructor(private router:Router) { }

  ngOnInit() {
  }
   
  nav(){
   this.router.navigate(['/profile'], {queryParams:{data:'3000',bank:'swiss'}, fragment:'loading'});
  }
}
