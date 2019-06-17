import { Injectable } from '@angular/core';

@Injectable()
export class PlayerDataService {
  private experience = 0;
  private level = 0;
  private resources = [
    {
      name: 'Wood',
      amount: 1
    },
    {
      name: 'Iron',
      amount: 0
    },
    {
      name: 'Clay',
      amount: 0
    },
  ]
  constructor() { }

  addExp(expAdded){
    this.experience = this.experience + expAdded
    return this.experience;
  }
  levelUpChecker(){
    if(this.experience>10){
      this.level++;
    }
    return this.level;
  }
  getResources(){
    return this.resources;
  }
}