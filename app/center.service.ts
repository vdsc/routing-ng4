import { Injectable } from '@angular/core';
import { LoggerService} from './logger.service'

@Injectable()
export class CenterService {

  data = [{name:'Mark', age: 5},{name:'Jen', age: 4},{name:'Ann', age: 3}];
  
  constructor(private logger:LoggerService) { }

  logdata(){

    this.logger.prinit(this.data);
  }

}
