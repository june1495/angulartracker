import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Anime, APIAnime, MyAnime } from '../interfaces/api-anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private API_URL: string = 'https://api.jikan.moe/v4/anime?q=';
  private anime_response$ = new Subject<Anime[]>();
  private anime_selected$ = new Subject<MyAnime>();

  constructor(private http: HttpClient) {}
  getAnimes(searchTerm: string): Observable<APIAnime> {
    const url = `${this.API_URL}${searchTerm}`;
    return this.http.get<APIAnime>(url.replaceAll(' ', ''));
  }
  addResultAnime(anime: Anime[]) {
    this.anime_response$.next(anime);
  }
  getResultAnime(): Observable<Anime[]> {
    return this.anime_response$.asObservable();
  }
  animeSelected(anime: MyAnime) {
    this.anime_selected$.next(anime);
  }
  getAnimeSelected(): Observable<MyAnime> {
    return this.anime_selected$.asObservable();
  }
}
