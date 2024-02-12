import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: any[] = [];
  selPost: any;

  constructor(private DataService: DatabaseService) {
    this.selectedButton = 'following';
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

  selectedButton: string | null = null;

  selectButton(button: string): void {
    this.selectedButton = this.selectedButton === button ? this.selectedButton : button;
  }
}
