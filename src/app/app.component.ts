import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentStep: number = 1; // You can change this value dynamically
  totalSteps: number = 2;
  users: any[] = [];
  searchText: string = '';
  isMatched: boolean = false;
  selectedOption: string = '';
  today: Date = new Date();

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);

        this.users = data;
      });
  }
  checkMatch() {
    this.isMatched = this.users.some((user) => {
      if (user.username.toLowerCase() === this.searchText.toLowerCase()) {
        this.selectedOption = '';
        return true;
      } else return false;
    });
  }
}
