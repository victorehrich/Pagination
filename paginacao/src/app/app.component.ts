import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginacao';

  criador:string[] = [];
  itensTotal = function(z:number){
    let criador:string[] = [];
    for(let i = 0; i<12; i++){
      criador[i] = "item "+(i+1);
    }
    return criador[z];
  }
  itensShow(i:number, tamanhoShow:number){
    let shower:string[] = [] ;
    
    for(i; i < tamanhoShow; i++){
      shower[i]= this.itensTotal(i);
    }
    console.log(shower,tamanhoShow)
    tamanhoShow += tamanhoShow;
    return shower;
  }

  nextItem(){
    this.x++;
  }
  prevItem(){
    this.x--;
  }
  x = 1;
  valueReturner(){
    return {value: this.x}
  }
}



