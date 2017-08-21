import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  msg1;
  msg2;
  constructor(private data:ActivatedRoute) { }


  ngOnInit() {
        this.msg1 = this.data.snapshot.params['msg1'];
        this.msg2 = this.data.snapshot.params['msg2'];
        this.data.params.subscribe(
          (val:Params) =>{
            this.msg1 = val['msg1'];
            this.msg2 = val['msg1'];
            console.log(val);
          }
        )
  }
  

    
  
}
