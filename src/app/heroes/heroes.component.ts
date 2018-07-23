import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // why equal sign here and colon under?
  // heroes = HEROES;

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
    // what happens to UI when it is waiting? How does this solve the problem?
        .subscribe(heroes => this.heroes = heroes);
  }
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  // why not just call it directly, why do we have to pass it as argument?
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
