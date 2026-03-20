import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  template: `
    <app-sidebar 
      [isOpen]="isSidebarOpen" 
      (closeSidebar)="closeSidebar()">
    </app-sidebar>
    
    <!-- Mobile Menu Toggle -->
    <button 
      class="fixed top-4 left-4 z-[60] lg:hidden p-3 bg-[#161616]/90 backdrop-blur border border-[#2d2d2d] rounded-xl"
      (click)="toggleSidebar()"
      aria-label="Toggle menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
    
    <!-- Main Content -->
    <main class="lg:ml-72 min-h-screen">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  isSidebarOpen = false; // Hidden by default on mobile, visible on desktop via CSS

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}