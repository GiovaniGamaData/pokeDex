import { Component, OnInit } from '@angular/core';
import { PokeListCardService } from '../services/poke-list-card.service';
import { map, Observable, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-poke-list-card',
  templateUrl: './poke-list-card.component.html',
  styleUrls: ['./poke-list-card.component.scss']
})
export class PokeListCardComponent implements OnInit {

  pokemons: any[] = []
  totalPokemons: number = 0;

  constructor(private _pokemonService: PokeListCardService) { }

  ngOnInit(): void {
    this._pokemonService.getAllPokemons()
      .subscribe((pokemon: any) => {
        this.totalPokemons = pokemon.count
        pokemon.results.forEach((result: any) => {
          this._pokemonService.getMorePokemons(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse)
              console.log(this.pokemons)
            })
        })
      })
  }
}
