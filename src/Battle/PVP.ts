import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    public _p1: Fighter,
    public _p2: Fighter,
  ) {
    super(_p1);
  }

  get p1(): Fighter { return this._p1; }
  get p2(): Fighter { return this._p2; }

  fight(): number {
    const rodada = (atack: Fighter, defence: Fighter): number => {
      atack.attack(defence);
      if (defence.lifePoints >= 0) {
        rodada(defence, atack);
      }
      return atack.lifePoints;
    };

    const resultRodada = rodada(this.p1, this.p2);
    const validadeResult = resultRodada === -1 ? -1 : 1;
    return validadeResult;
  }
}