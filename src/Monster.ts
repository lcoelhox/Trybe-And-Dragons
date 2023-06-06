import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(
    public _lifePoints: number = 85,
    public _strength: number = 63,
  ) {}

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(atack: number): number {
    this._lifePoints -= atack;
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(monster: SimpleFighter): void {
    monster.receiveDamage(this.strength);
  }
}