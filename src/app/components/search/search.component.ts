import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}
  search() {
    this.animeService.getAnimes(this.searchTerm).subscribe((res) => {
      console.log(res);
      this.animeService.addResultAnime(res.data);
      this.searchTerm = '';
      // console.log(res.data);
    });
  }
}
