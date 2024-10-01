import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
   items:any[] = [];

  constructor(private http: HttpClient) {

   }

    getItems(){
    try{
    this.http.get('http://localhost:3050/menu').subscribe((data:any) => {
      this.items = data;
      console.log(this.items);
    });
   }catch(e){
    console.log(e);
   }
  }
  ngOnInit(): void {
    this.getItems();
  }
}
