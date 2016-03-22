import {Hero} from '../models/hero';
import {HEROES} from '../data/mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 2000));
  }
}