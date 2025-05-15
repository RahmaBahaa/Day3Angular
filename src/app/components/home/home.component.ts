import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { IntroComponent } from "./intro/intro.component";
import { SliderComponent } from "./slider/slider.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, IntroComponent, SliderComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
