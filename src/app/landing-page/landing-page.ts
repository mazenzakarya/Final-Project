import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  // Counter properties
  studentsCount: number = 0;
  tutorsCount: number = 0;
  successRate: number = 0;

  // Target values
  targetStudents: number = 500;
  targetTutors: number = 50;
  targetSuccessRate: number = 95;

  // Counter animation flags
  studentsAnimated: boolean = false;
  tutorsAnimated: boolean = false;
  successRateAnimated: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
      delay: 200,
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.handleScrollAnimations();
    this.checkCounterVisibility();
  }

  private initScrollAnimations(): void {
    // Add scroll-animate class to elements that should animate on scroll
    const elements = document.querySelectorAll(
      '.feature-card, .stat-item, .about-content, .about-image'
    );
    elements.forEach((el) => {
      el.classList.add('scroll-animate');
    });
  }

  private handleScrollAnimations(): void {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        element.classList.add('animate');
      }
    });
  }

  private checkCounterVisibility(): void {
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      const rect = statsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if stats section is visible
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        this.startCounters();
      }
    }
  }

  private startCounters(): void {
    // Start students counter
    if (!this.studentsAnimated) {
      this.studentsAnimated = true;
      this.animateCounter('studentsCount', this.targetStudents, 2000);
    }

    // Start tutors counter
    if (!this.tutorsAnimated) {
      this.tutorsAnimated = true;
      this.animateCounter('tutorsCount', this.targetTutors, 2000);
    }

    // Start success rate counter
    if (!this.successRateAnimated) {
      this.successRateAnimated = true;
      this.animateCounter('successRate', this.targetSuccessRate, 2000);
    }
  }

  private animateCounter(
    property: string,
    target: number,
    duration: number
  ): void {
    const startTime = Date.now();
    const startValue = 0;
    const increment = target / (duration / 16); // 60fps

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const currentValue = Math.min(
          startValue + (increment * elapsed) / 16,
          target
        );

        switch (property) {
          case 'studentsCount':
            this.studentsCount = Math.floor(currentValue);
            this.addCounterAnimation('students');
            break;
          case 'tutorsCount':
            this.tutorsCount = Math.floor(currentValue);
            this.addCounterAnimation('tutors');
            break;
          case 'successRate':
            this.successRate = Math.floor(currentValue);
            this.addCounterAnimation('success');
            break;
        }

        requestAnimationFrame(animate);
      } else {
        // Set final value
        switch (property) {
          case 'studentsCount':
            this.studentsCount = target;
            break;
          case 'tutorsCount':
            this.tutorsCount = target;
            break;
          case 'successRate':
            this.successRate = target;
            break;
        }
      }
    };

    requestAnimationFrame(animate);
  }

  private addCounterAnimation(type: string): void {
    // Add a small visual feedback when counter updates
    const statItems = document.querySelectorAll('.stat-item h3');
    statItems.forEach((item, index) => {
      if (
        (type === 'students' && index === 0) ||
        (type === 'tutors' && index === 1) ||
        (type === 'success' && index === 2)
      ) {
        item.classList.add('counting');
        setTimeout(() => {
          item.classList.remove('counting');
        }, 100);
      }
    });
  }

  // Add fun interactive methods
  playSound(): void {
    // This would play a fun sound effect
    console.log('🎵 Fun sound effect!');
  }

  addConfetti(): void {
    // This would add confetti animation
    console.log('🎉 Confetti!');
  }

  // Smooth scroll to sections
  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Get navbar height to offset the scroll
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80;

      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }

  // Add hover effects for interactive elements
  onElementHover(event: any): void {
    const element = event.target;
    element.style.transform = 'scale(1.05)';
  }

  onElementLeave(event: any): void {
    const element = event.target;
    element.style.transform = 'scale(1)';
  }
}
