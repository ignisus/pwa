import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  games: any[] = [];
  selectedSystem: string = '';
  selectedGenre: string = '';
  selectedSort: string = '';
  galleryClass: string = '';
  filteredGames: any[] = [];


  constructor(private DataService: DatabaseService) {
  }

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.DataService.getGames().subscribe(data => {
      this.games = data;
      this.applyFilters();
    });
  }
  applyFilters() {
    this.filteredGames = this.games.filter(game => {
      const systemFilter = !this.selectedSystem || this.selectedSystem === "" || game.platforms[this.selectedSystem];
      const genreFilter = !this.selectedGenre || this.selectedGenre === "" || game.genre[this.selectedGenre]
      return systemFilter && genreFilter;
    });
  }
  onSortChange() {
    if (this.selectedSort === 'lessPlayed') {
      this.galleryClass = 'reverse';
    } else {
      this.galleryClass = '';
    }
  }
}
