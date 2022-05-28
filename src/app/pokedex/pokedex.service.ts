import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getPokemon(): Observable<Pagination> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon')
      .pipe(map((data: any) => {
        const pagination: Pagination = data;
        return pagination;
      }))
  }




}
