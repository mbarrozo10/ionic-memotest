import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-juego-normal',
  templateUrl: './juego-normal.page.html',
  styleUrls: ['./juego-normal.page.scss'],
})
export class JuegoNormalPage implements OnInit {
  cardsBien: any[] = [
    {
      nombre: "destornillador",
      img:"../../assets/herramientas/destornillador.png"
    }, 
    {
      nombre: "pinza",
      img:"../../assets/herramientas/pinza.png"
    }, {
      nombre: "serrucho",
      img:"../../assets/herramientas/serrucho.png"
    }, {
      nombre: "llave",
      img:"../../assets/herramientas/llave.png"
    }, {
      nombre: "martillo",
      img:"../../assets/herramientas/martillo.png"
    }];
    cards: any[] = [
      {
        nombre: "destornillador",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, 
      {
        nombre: "destornillador",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, 
      {
        nombre: "pinza",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "pinza",
        img:"../../assets/animales/estrella.png",
        ok: false
  
      }, {
        nombre: "serrucho",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "serrucho",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "llave",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "llave",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "martillo",
        img:"../../assets/animales/estrella.png",
        ok: false
      }, {
        nombre: "martillo",
        img:"../../assets/animales/estrella.png",
        ok: false
      }];
  maxCardPerRow: number =2;
  contador: number = 0;
  private intervalId: any;
  constructor( private firestore: Firestore, private router: Router, private authService: AuthService) {
   
   }
  ngOnInit() {
    this.shuffleArray(this.cards);
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.contador++;
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.intervalId);
  }


  getRows(cards: any[]): any[][] {
    const rows: any[][] = [];
    for (let i = 0; i < cards.length; i += this.maxCardPerRow) {
      const row = cards.slice(i, i + this.maxCardPerRow);
      rows.push(row);
    }
    
    return rows;
  }
  aplicar(){
    const x = document.getElementById("prueba") || document.createElement("div");
    console.log(x);
  }
  contadorCartas:number=0;
  cartasElegidas: any[] = [];

  mostrarNumero(carta: any) {
    if(carta.ok==false){
      const cartaBuena=this.cardsBien.find(c => c.nombre== carta['nombre']);
      carta.ok=true;
      this.cartasElegidas.push(carta);
      carta['img'] = cartaBuena['img'];
      if(this.cartasElegidas.length==2){
        if(this.cartasElegidas[0].nombre == this.cartasElegidas[1].nombre){
          this.cards.forEach(c => {
            if(c.nombre==this.cartasElegidas[0].nombre){ 
              c.ok=true;
            }
          });
          this.cartasElegidas=[]
          this.contadorCartas=-1;
        }else{
          setTimeout(() => {
            this.cartasElegidas.forEach(c => {
              c.img="../../assets/animales/estrella.png"
              c.ok=false;
            })
            this.cartasElegidas=[]
            this.contadorCartas=-1;
          }, 2000);
        }
      }
      this.contadorCartas++;
    }
    if (this.verificarVictoria()){
      this.stopTimer();
      Swal.fire({
        titleText:"Ganaste!",
        text: "Te tiempo fue: " + this.contador,
        heightAuto:false
      }).then(() => {
        const datos={
          dificultad:"normal",
          usuario: this.authService.retornarUsuario(),
          fecha: new Date().toString(),
          tiempo: this.contador
        }
        const placeRef = collection(this.firestore,"PartidasFacil");
        addDoc(placeRef, datos);
        this.router.navigateByUrl("home",{replaceUrl:true});
      })
    }
  }
  verificarVictoria() {
    const x= this.cards.find(x =>x.ok==false);
    if(x ==undefined) return true;
    return false;
  }


   shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
  }

}
