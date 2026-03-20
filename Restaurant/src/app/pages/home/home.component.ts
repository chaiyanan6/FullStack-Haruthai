import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section with Slideshow -->
    <section class="relative h-screen w-full overflow-hidden">
      
      <!-- Slideshow Container -->
      <div class="absolute inset-0">
        <div 
          *ngFor="let slide of slides; let i = index"
          class="hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out"
          [class.opacity-100]="currentSlide === i"
          [class.opacity-0]="currentSlide !== i">
          <img 
            [src]="slide.image" 
            [alt]="slide.alt" 
            class="w-full h-full object-cover brightness-40 saturate-[1.1]"
            [attr.loading]="i === 0 ? 'eager' : 'lazy'">
        </div>
      </div>
      
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]/60 pointer-events-none"></div>
      
      <!-- Center Content -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div class="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mb-8 animate-scale-in"></div>
        
        <h2 class="font-['Cormorant_Garamond'] text-lg tracking-[0.3em] text-[#d4a853]/80 uppercase mb-4 animate-fade-up">
          Welcome to
        </h2>
        
        <h1 class="font-['Cormorant_Garamond'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-wide animate-fade-up delay-1">
          Savoria
        </h1>
        
        <p class="mt-6 text-lg sm:text-xl text-[#737373] max-w-xl animate-fade-up delay-2">
          Fine dining experience with authentic Thai cuisine
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-3">
          <a routerLink="/reservations" class="px-8 py-4 bg-[#d4a853] text-[#0d0d0d] font-semibold rounded-lg hover:bg-[#a67c3d] transition-colors cursor-pointer">
            Book a Table
          </a>
          <a routerLink="/menu" class="px-8 py-4 border border-[#f5f5f5]/30 text-[#f5f5f5] font-medium rounded-lg hover:bg-[#f5f5f5]/5 transition-colors cursor-pointer">
            View Menu
          </a>
        </div>
        
        <div class="w-[60px] h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mt-12 animate-scale-in delay-3"></div>
      </div>
      
      <!-- Slide Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        <button 
          *ngFor="let slide of slides; let i = index"
          class="slide-dot cursor-pointer"
          [class.active]="currentSlide === i"
          (click)="goToSlide(i)"
          [attr.aria-label]="'Slide ' + (i + 1)">
        </button>
      </div>
      
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1920&q=80', alt: 'Thai curry dish' },
    { image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1920&q=80', alt: 'Pad Thai noodles' },
    { image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1920&q=80', alt: 'Fresh salad' },
    { image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&q=80', alt: 'Thai soup' },
    { image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80', alt: 'Gourmet dish' }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.startSlideshow(); // Reset timer
  }

  private startSlideshow(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }
}