import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio ok');
   }


   getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARDN5Af3CEFFfCUO0Oe26nX1Mm7jznL8YjtRTGof93vpuZhgwWj9ghuj9pWiJ4IYLfskOjtnctnkXXifI'
      });
    return this.http.get(url, {headers});
   }


   getNewReleases(){
    return this.getQuery('browse/new-releases')
                .pipe( map (data => {
                  return data['albums'].items;
                }));
   }

   /* getNewReleases(){
    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQD48nGQK54Co7n_CBuM_lHI-z75suCKcFGpf5VrJcko4cCCl-baf6pRmaTQo2kg31BN1pGLfxF8A0-yZbU'

     });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe( map (data => {
      return data['albums'].items;
    }));

   } */

   getArtistas( termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe ( map (data => data['artists'].items));
   }

   /* getArtista( termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD48nGQK54Co7n_CBuM_lHI-z75suCKcFGpf5VrJcko4cCCl-baf6pRmaTQo2kg31BN1pGLfxF8A0-yZbU'
      });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    .pipe( map (data => data['artists'].items ));
   } */

   getArtista( id: string ){
     return this.getQuery(`artists/${id}`);

   }

   getArtistaTopTracks( id: string){
     return this.getQuery(`artists/${id}/top-tracks?country=us`)
     .pipe( map (data => data['tracks']));
   }
}
