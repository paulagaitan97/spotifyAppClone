import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loadling: boolean;
  constructor(private spotify: SpotifyService) {
   }
  buscar(termino: string){
    this.loadling = true;
    this.spotify.getArtistas(termino)
    .subscribe( (data: any) => {
      this.artistas = data;
      console.log(data);
      this.loadling = false;

    });
    console.log(termino);

  }

}
