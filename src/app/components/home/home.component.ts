import { Component, OnInit } from '@angular/core';
/* import { HttpClient } from '@angular/common/http'; */
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //paises_list: any[] = [];

 /*  constructor( private http: HttpClient) { 
    console.log('Constructor del home');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((paises: any) => {
      this.paises_list = paises;
      console.log(paises);
    });

  } */

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService){
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      console.log(errorServicio.error.error.message);
      this.mensajeError = errorServicio.error.error.message;
    });

  }
  ngOnInit(): void {
  }

}
