import { Component, OnInit } from '@angular/core';
import { BuildingsService } from '../buildings.service'

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings = [];
  constructor(
    private buildingService: BuildingsService,
  ) { }

  ngOnInit() {
    this.buildings = this.buildingService.getBuildings();
  }

}