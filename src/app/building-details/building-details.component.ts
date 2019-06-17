import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingsService } from '../buildings.service'

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})
export class BuildingDetailsComponent implements OnInit {
  buildings = [];
  constructor(
    private route: ActivatedRoute,
    private buildingsService: BuildingsService,
  ) { }

  ngOnInit(){
    this.buildings = this.buildingsService.getBuildings();
    this.route.paramMap.subscribe(params => {
    this.buildings = this.buildings[+params.get('buildingId')];
  });
  }

}