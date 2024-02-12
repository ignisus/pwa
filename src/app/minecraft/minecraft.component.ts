import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {
  survival: any[] = [];
  creative: any[] = [];

  constructor(private DataService: DatabaseService) { }

  ngOnInit() {
    this.loadMinecraft();
  }

  loadMinecraft() {
    this.DataService.getMinecraftCreative().subscribe(data => {
      this.creative = data;
    });
    this.DataService.getMinecraftSurvival().subscribe(data => {
      this.survival = data;
    });
  }
}
