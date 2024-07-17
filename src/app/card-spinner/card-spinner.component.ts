import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-card-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule], // Adicione o CommonModule aqui
  templateUrl: './card-spinner.component.html',
  styleUrls: ['./card-spinner.component.css']
})
export class CardSpinnerComponent implements OnInit {
  cards = [
    { content: 'https://teste.com/1', loading: true },
    { content: 'https://teste.com/2', loading: true },
    { content: 'https://teste.com/3', loading: true }
  ];

  ngOnInit() {
    this.cards.forEach(card => {
      setTimeout(() => {
        card.loading = false;
      }, Math.random() * 5000);
    });
  }
}
