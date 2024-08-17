import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('instructorCards') instructorCards!: ElementRef;
  currentIndex = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateCarouselPosition();
  }

  prevSlide() {
    const totalItems = this.instructorCards.nativeElement.children.length;
    this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
    this.updateCarouselPosition();
  }

  nextSlide() {
    const totalItems = this.instructorCards.nativeElement.children.length;
    this.currentIndex = (this.currentIndex + 1) % totalItems;
    this.updateCarouselPosition();
  }

  updateCarouselPosition() {
    const cards = this.instructorCards.nativeElement as HTMLElement;
    if (cards) {
      const cardWidth = cards.clientWidth; // Full width of the carousel container
      const offset = cardWidth * this.currentIndex;
      this.renderer.setStyle(cards, 'transform', `translateX(-${offset}px)`);
    }
  }
}
