import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-notedit',
  templateUrl: './notedit.component.html',
  styleUrls: ['./notedit.component.css']
})
export class NoteditComponent implements OnInit {
   
  query_value;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {

    this.ar.queryParams.subscribe(
    (params:Params) => {
this.query_value = params['save'];
                      }

                                  )
            }

}
