import {Vineyard} from '../models/vineyard';
import {InjectionToken} from '@angular/core';

export let VINEYARD_LIST_TOKEN = new InjectionToken('vineyard_list');

export const VINEYARD_LIST = [
  new Vineyard(
  'Domaine de Pierre',
  '3 chemin des pins',
  42
  ),
  new Vineyard(
  'Château Bertrand',
  '3 route de la plage',
  51
  ),
  new Vineyard(
  'Saint Maxime',
  '3 allée de la soleil',
  39
  ),
  new Vineyard(
  'Mont Julien',
  '3 boulevard des dunes',
  45
  ),
];
