import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, FlexLayoutModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('instructorCards') instructorCards!: ElementRef;
  currentIndex = 0;
  itemWidth = 0;
  itemsPerPage = 3; // Define the number of items to show per page

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateItemWidth();
    this.updateCarouselPosition();
  }

  updateItemWidth() {
    const cards = this.instructorCards.nativeElement as HTMLElement;
    if (cards && cards.children.length > 0) {
      this.itemWidth = cards.children[0].clientWidth;
    }
  }

  prevSlide() {
    const totalItems = this.instructorCards.nativeElement.children.length;
    this.currentIndex = (this.currentIndex - 1 + Math.ceil(totalItems / this.itemsPerPage)) % Math.ceil(totalItems / this.itemsPerPage);
    this.updateCarouselPosition();
  }

  nextSlide() {
    const totalItems = this.instructorCards.nativeElement.children.length;
    this.currentIndex = (this.currentIndex + 1) % Math.ceil(totalItems / this.itemsPerPage);
    this.updateCarouselPosition();
  }

  updateCarouselPosition() {
    const cards = this.instructorCards.nativeElement as HTMLElement;
    if (cards) {
      const offset = this.itemWidth * this.currentIndex * this.itemsPerPage;
      this.renderer.setStyle(cards, 'transform', `translateX(-${offset}px)`);
    }
  }
}
