import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JuegoService {
    private dificultad?: number ;
    constructor() {
        
     }
     setData(data:number){
      this.dificultad = data;
     }
     
     getData(){
      return this.dificultad;
     }
  }
  