import { Component, OnInit } from '@angular/core';
import { TmdbService } from './services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  movies: any[] = [];
  featured: any[] = [];
  currentSlide = 0;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
      this.featured = this.movies.slice(0, 5);
    });
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.featured.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.featured.length - 1) ? 0 : this.currentSlide + 1;
  }
}
