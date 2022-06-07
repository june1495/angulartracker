import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
})
export class SelectedComponent implements OnInit {
  animeSelectedRes: MyAnime[] = [];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeSelectedRes =
      JSON.parse(localStorage.getItem('myAnime') as any) || [];
    this.animeService.getAnimeSelected().subscribe((res) => {
      this.animeSelectedRes.push(res);
      localStorage.setItem('myAnime', JSON.stringify(this.animeSelectedRes));
    });
  }
  increaseWatch(anime: MyAnime) {
    anime.watched_episodes++;
    localStorage.setItem('myAnime', JSON.stringify(this.animeSelectedRes));
  }
  decreaseWatch(anime: MyAnime) {
    anime.watched_episodes--;
    localStorage.setItem('myAnime', JSON.stringify(this.animeSelectedRes));
  }
}
