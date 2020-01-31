import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSource = new BehaviorSubject(new Data('', '' ,'' ,false));

  data = this.dataSource.asObservable();

  constructor() {}

  dataHasChanged(data: Data) {
    this.dataSource.next(data);
  }
}
