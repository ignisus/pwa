import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent implements OnInit {
  posts: any[] = [];
  selPost: any;
  constructor(private DataService: DatabaseService) {
  }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.DataService.getImages().subscribe(data => {
      this.posts = data;
    });
  }

  openImage(post: any) {
    this.selPost = post;
  }

  closeImage() {
    this.selPost = null;
  }

}
