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
 formData: any;

  getData(e: any) {
    e.preventDefault(); // Prevents the default form submission behavior
    this.formData = new FormData(e.target); // Collects form data
    // Accessing the form data values by name
    console.log(this.formData.get('Name'));
    console.log(this.formData.get('Date'));
    console.log(this.formData.get('Time'));
    console.log(this.formData.get('Phone'));
    console.log(this.formData.get('TotalPerson'));
  }


}
