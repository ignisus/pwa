import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  users: any;
  posts: any[] = [];
  selPost: any;
  showDelete = false;

  constructor(private DataService: DatabaseService) {}

  ngOnInit() {
    this.loadUsers();
    this.loadImages();
  }

  loadUsers() {
    this.DataService.getUsers().subscribe((data) => {
      this.users = data[0];
    });
  }

  loadImages() {
    this.DataService.getImages().subscribe((data) => {
      this.posts = data;
    });
  }

  openImage(post: any) {
    if (!this.showDelete) {
      this.selPost = post;
    }
  }

  closeImage() {
    this.selPost = null;
  }

  toggleDelete() {
    this.showDelete = !this.showDelete;
    if (this.showDelete) {
      this.closeImage();
    }
  }

  deletePost(postId: number) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.isVisible = false;
    }
  }
}
