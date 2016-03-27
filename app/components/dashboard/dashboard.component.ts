import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html'
})

export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _heroService:HeroService,
    private _router:Router
  ) {}

  ngOnInit() {
    this._heroService.getHeroes()
      .then((heroes) => this.heroes = heroes.slice(1, 5));
  }

  goToDetail(hero: Hero) {
    // console.log('wtf');
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }

}