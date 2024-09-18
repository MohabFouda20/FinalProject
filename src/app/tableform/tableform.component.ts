import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableform',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tableform.component.html',
  styleUrl: './tableform.component.css'
})
export class TableformComponent {
  formData :any;
  getData(e :any){
    e.preventDefault()
    this.formData = new FormData(e.target)
    console.log(this.formData.get('Name'))
  }

}
