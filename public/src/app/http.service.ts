import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data=>{
      console.log(data);
      let ab1=data.abilities[0].ability.name;
      let ab2=data.abilities[1].ability.name
      console.log(data.forms[0].name,"'s ablilities are",ab1,"and",ab2);

      let  ability1 =this._http.get(data.abilities[0].ability.url);
      let  ability2 =this._http.get(data.abilities[1].ability.url);
      ability1.subscribe(data=>{console.log(data.pokemon.length,'Pokemon have the ',ab1,'ability.');})
      ability2.subscribe(data=>{console.log(data.pokemon.length,'Pokemon have the ',ab2,'ability.');})

    });
}
}
