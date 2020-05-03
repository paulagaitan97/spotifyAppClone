import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  loadling: boolean;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadling = true;
    this.router.params.subscribe( params => {
      console.log(params['id']);
      this.getArtista( params['id'] );
      this.getArtistaTopTrack ( params['id']);

    });
  }

  getArtista(id: string){
    this.loadling = true;
    this.spotify.getArtista(id)
    .subscribe(artistaService => {
      this.artista = artistaService;
      this.loadling = false;
    });
    
  }

  getArtistaTopTrack(id: string){
      this.loadling = true;
      this.spotify.getArtistaTopTracks(id)
      .subscribe(artistaTopTracksService => {
          console.log(artistaTopTracksService);
          this.topTracks = artistaTopTracksService;
      });

  }

}
