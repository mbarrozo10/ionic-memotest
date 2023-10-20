import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { PluginListenerHandle  } from '@capacitor/core';
import { JuegoService } from '../services/juegoService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  acellHandler?: PluginListenerHandle;

  constructor(private authService: AuthService, private router: Router, private firestore : Firestore, private juego: JuegoService) {
    const placeref= collection(this.firestore, 'usuarios');
     const retorno= collectionData(placeref);
     retorno.subscribe(data =>
     {
      
      // const retorno= data.find(item => item['correo']===this.authService.retornarUsuario());
      for (const x of data){
        if(x['correo']=== this.authService.retornarUsuario() ){
          this.usuario= x['usuario'];
        }
      }
     })
   }
   
   usuario?:  any;
  ngOnInit() {
  }
  
  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl: true});
   }


  async activar(nivel: number){
    this.juego.setData(nivel);
    this.router.navigateByUrl('/juego', {replaceUrl: true});
  }

  
  
}
