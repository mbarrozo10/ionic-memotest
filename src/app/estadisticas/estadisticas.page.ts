import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  partidas:any[]=[];
  constructor(private router: Router, private firestore: Firestore) { }
  filtro:string="facil"
  ngOnInit() {
    this.ConseguirPartidas();
  }
  ConseguirPartidas() {
    const place= collection(this.firestore,"PartidasFacil");
    collectionData(place).subscribe(data =>{
      this.partidas=[];
      data.sort((a,b) => a['tiempo']-b['tiempo']);
      console.log(data);
      data.forEach(x => 
        {
          if(x['dificultad']==this.filtro)
          this.partidas.push(x);
        })
        console.log(this.partidas);
    });
  }
  Volver(){
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }

  CambiarFiltro(event : any){
    const dato= event.detail.value;
    this.filtro=dato;
    this.ConseguirPartidas();
  }
}
