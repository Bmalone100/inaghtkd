import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { environment

 } from '../../environment.prod';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  public bannerImage: string = `${environment.assetPath}leftbanner.jpg`;
  public instructorImages: { [key: string]: string } = {
    jaime: `${environment.assetPath}jaime.jpg`,
    darren: `${environment.assetPath}darren-rigney.jpg`,
    declan: `${environment.assetPath}declan-devereaux.jpg`,
    brian: `${environment.assetPath}brian-malone.jpg`,
    chloe: `${environment.assetPath}chloe-lin.jpg`,
    ciara: `${environment.assetPath}ciara-white.jpg`,
    jeffrey: `${environment.assetPath}jeffrey-lin.jpg`
  };

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
