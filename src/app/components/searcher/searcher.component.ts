import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any[] = [];
  text:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
      console.log(this.heroes);
    })
  }

  verHeroe( idx:number) {
    this.router.navigate( ['/heroe', idx]);
  }

}
