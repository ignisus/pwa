import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

interface Item {
  name: string;
  icon: string;
  keywords: string;
  categories: string[];
  url: string;
}

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css'],
})
export class HostingComponent implements OnInit {
  items: Item[] = [];
  filteredItems: Item[] = [];
  searchText: string = '';
  selectedCategory: string = 'all';
  constructor(private DataService: DatabaseService) {
  }

  ngOnInit() {
    this.loadHosting();
  }

  loadHosting() {
    this.DataService.getHosting().subscribe(data => {
      this.items = data;
      this.filteredItems = data;
    });
  }

  onItemClick(url: string): void {
    window.open(url);
  }

  filterItems() {
    if (this.selectedCategory) {
      this.filteredItems = this.items.filter(item =>
        item.keywords.toLowerCase().includes(this.searchText.toLowerCase()) &&
        item.categories.includes(this.selectedCategory)
      );
    } else {
      this.filteredItems = this.items.filter(item =>
        item.keywords.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  filterByCategory(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = 'all';
    } else {
      this.selectedCategory = category;
    }
    this.filterItems();
  }

  searchItems() {
    this.filterItems();
  }

  isCategoryActive(category: string): boolean {
    return this.selectedCategory === category;
  }
}
