import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site',
  imports: [FormsModule],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {
  newMovie = {
  name: '',
  description: '',
  rate: 0,
  image: ''
  };
  movieName: string ='';
  movieList: {
    name: string,
    description: string,
    rate: number,
    image:string
  }[] = []

  filterList: {
    name: string,
    description: string,
    rate: number,
    image:string
  }[] = []

  constructor(){
    this.filterList = this.movieList;
  }

  addMovie(){
    this.movieList.push({
      name: this.newMovie.name,
      description:this.newMovie.description,
      rate:this.newMovie.rate,
      image: this.newMovie.image })
  }
  deleteMovie(i:number){
    this.movieList.splice(i,1);
  }
  filterMovies(){
    this.filterList = this.movieName == ''? this.movieList
    :this.movieList.filter((movie)=> movie.name.toLowerCase().includes(this.movieName.toLowerCase()))
  }
}
