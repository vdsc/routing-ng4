import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  prinit(msg:any){
   
    console.log(msg);
  }

}
