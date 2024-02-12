import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // Database

  // private apiUrl = 'http://localhost:3000';

  // constructor(private http: HttpClient) {}

  // getImages(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/posts`);
  // }

  // getHosting(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/hosting`);
  // }

  // getGames(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/games`);
  // }

  // getMinecraftCreative(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/minecraft/creative`);
  // }

  // getMinecraftSurvival(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/minecraft/survival`);
  // }

  // Local files
  private dbUsers = 'assets/mongoDB/users.json';
  private dbPosts = 'assets/mongoDB/posts.json';
  private dbHosting = 'assets/mongoDB/hosting.json';
  private dbGames = 'assets/mongoDB/games.json';
  private dbMinecraft = 'assets/mongoDB/minecraft.json';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUsers);
  }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.dbPosts);
  }

  getHosting(): Observable<any[]> {
    return this.http.get<any[]>(this.dbHosting);
  }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.dbGames);
  }

  private extractMinecraftCreative(response: any): any[] {
    return response.creative;
  }
  private extractMinecraftSurvival(response: any): any[] {
    return response.survival;
  }
  getMinecraftCreative(): Observable<any[]> {
    return this.http
      .get<any[]>(this.dbMinecraft)
      .pipe(map(this.extractMinecraftCreative));
  }
  getMinecraftSurvival(): Observable<any[]> {
    return this.http
      .get<any[]>(this.dbMinecraft)
      .pipe(map(this.extractMinecraftSurvival));
  }
}
