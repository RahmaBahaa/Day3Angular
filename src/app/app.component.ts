import { Component } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { SiteComponent } from "./components/movies/site.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, HomeComponent, SiteComponent, FooterComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  page:string = "home";
  view(pageName:string){
    this.page = pageName;
  }
}
