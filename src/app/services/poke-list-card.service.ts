import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokeListCardService {

  private _url: string = environment.apiUrl + 'pokemon'
  private _pokemons: any[] = []

  constructor(private _http: HttpClient) { }

  getAllPokemons(): Observable<any> {
    const urlAll = `${this._url}?limit=1`
    return this._http.get(urlAll)
  }

  getMorePokemons(name: string): Observable<any> {
    const urlName = `${this._url}/${name}`
    return this._http.get(urlName)
  }

}
