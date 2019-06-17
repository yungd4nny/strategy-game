import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  resources = [];
   id: number;
  constructor(
    private playerDataService: PlayerDataService,
  ) { }

  ngOnInit() {
    this.resources = this.playerDataService.getResources();
    console.log(this.id);
  }

}