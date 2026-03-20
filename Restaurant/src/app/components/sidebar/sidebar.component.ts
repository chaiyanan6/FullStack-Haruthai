import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Backdrop for mobile -->
    <div 
      *ngIf="isOpen" 
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      (click)="closeSidebar.emit()">
    </div>

    <!-- Sidebar -->
    <aside 
      class="fixed left-0 top-0 h-full w-72 bg-[#161616]/95 backdrop-blur-xl border-r border-[#2d2d2d] z-50 transform transition-transform duration-300"
      [class.-translate-x-full]="!isOpen"
      [class.translate-x-0]="isOpen"
      [class.lg:translate-x-0]="true">
      
      <!-- Logo -->
      <div class="p-8 border-b border-[#2d2d2d]">
        <h1 class="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#d4a853] tracking-wide">Savoria</h1>
        <p class="text-xs text-[#737373] mt-1 tracking-widest uppercase">Fine Dining Experience</p>
      </div>
      
      <!-- Navigation -->
      <nav class="p-4 space-y-1">
        <a 
          *ngFor="let item of menuItems"
          [routerLink]="item.path"
          routerLinkActive="active"
          class="sidebar-link flex items-center gap-4 px-5 py-4 rounded-r-lg text-left cursor-pointer"
          (click)="closeSidebar.emit()">
          <span [innerHTML]="item.icon"></span>
          <span class="font-medium">{{ item.name }}</span>
        </a>
      </nav>
      
      <!-- Footer -->
      <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-[#2d2d2d]">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a853] to-[#a67c3d] flex items-center justify-center">
            <span class="font-semibold text-[#0d0d0d]">J</span>
          </div>
          <div>
            <p class="font-medium text-sm">John Doe</p>
            <p class="text-xs text-[#737373]">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Output() closeSidebar = new EventEmitter<void>();

  menuItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>`
    },
    { 
      name: 'Menu', 
      path: '/menu', 
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>`
    },
    { 
      name: 'Reservations', 
      path: '/reservations', 
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>`
    },
    { 
      name: 'My Orders', 
      path: '/orders', 
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>`
    },
    { 
      name: 'My Profile', 
      path: '/profile', 
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>`
    }
  ];
}