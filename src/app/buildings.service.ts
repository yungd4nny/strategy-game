import { Injectable } from '@angular/core';

@Injectable()
export class BuildingsService {
  buildings = [{
    name: 'Town Hall',
    buildingId: 0,
    level: 0,
   },
   {
    name: 'Lumberyard',
    buildingId: 1,
    level: 0,
   },
   {
    name: 'Mine',
    buildingId: 2,
    level: 0,
   },
   {
    name: 'Clay Pit',
    buildingId: 3,
    level: 0,
   },
   {
    name: 'Barracks',
    buildingId: 4,
    level: 0,
   }]
  constructor() { }

  getBuildings(){
    return this.buildings;
  }
  levelUpBuilding(name){
    this.buildings.name;
  }
}