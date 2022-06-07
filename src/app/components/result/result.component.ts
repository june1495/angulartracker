import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
  animeResults: Anime[] = [];
  animeSuscription!: Subscription;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeSuscription = this.animeService
      .getResultAnime()
      .subscribe((res) => {
        this.animeResults = res;
      });
  }
  ngOnDestroy(): void {
    this.animeSuscription.unsubscribe;
  }
  addAnime(anime: Anime) {
    const addAnime: MyAnime = {
      id: anime.mal_id,
      title: anime.title,
      imagen: anime.images['jpg'].image_url,
      total_episodes: anime.episodes,
      watched_episodes: 0,
    };
    this.animeService.animeSelected(addAnime);
    this.animeResults = [];
  }
  increaseWatch(anime: MyAnime) {
    anime.watched_episodes++;
  }
  decreaseWatch(anime: MyAnime) {
    anime.watched_episodes--;
  }
}
