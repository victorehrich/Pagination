import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'paginacao';

  criador:string[] = [];

  itensTotal (z:number){
    for(let i = 0; i<12; i++){
      this.criador[i] = "item "+(i+1);
    }
    return this.criador[z];
  }

  itensShow(i:number, tamanhoShow:number){
    let shower:string[] = [] ;

    let v = 0;
    for(i; i < tamanhoShow; i++){
      shower[v]= this.itensTotal(i);
      v++;
    } 
    console.log(shower,tamanhoShow)
    return shower;
  }

  nextItem(){
    if(this.x < this.criador.length/3){
      this.x++;
    }
  }
  prevItem(){
    if(this.x > 1){
      this.x--;
    }
  }
  firstItem(){
    this.x = 1;
  }
  lastItem(){
    
    this.x = this.criador.length/3;
  }
  x = 1;
  valueReturner(){
    return {value: this.x}
  }
}



