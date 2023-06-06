import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter {
  lifePoints: number
  strength: number
  defense: number
  energy?: Energy
  special?(enemy: Fighter): void
  levelUp(): void
  attack(enemy: SimpleFighter): void
  receiveDamage(attackPoints: number): number
}