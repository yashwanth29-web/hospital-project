import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('announcementFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent {
  hospitalName = 'MedCare Multispeciality Hospital';
  welcomeMessage = 'Your Health, Our Mission.';
  announcements = [
    { text: '📢 Join our Free Health Check-up Camp this Sunday at 10 AM. Limited slots available!' },
    { text: '🏩 New Cardiology Wing opening next month! Book your consultation now.' },
    { text: '🩺 Free webinar on mental health awareness this Friday at 6 PM.' }
  ];
  currentAnnouncementIndex = 0;
  currentAnnouncement = this.announcements[0];
  highlights = [
    {
      title: '24/7 Emergency Services',
      description: 'Immediate care for critical emergencies, available any time by trained staff.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Expert Doctors in All Specialties',
      description: 'From cardiology to pediatrics, consult with top doctors across departments.',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Advanced Diagnostic Lab',
      description: 'Latest technology ensuring accurate reports and faster diagnostics.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37jPrrj9UZbDrENDt0FUri0EGHr5Fq_8qIA&s'
    },
    {
      title: 'Online Appointment Booking',
      description: 'Schedule consultations online anytime, anywhere with our easy booking portal.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjaxYuZiR68LCrakQeIN2xtH9YOOS-xr3nA&s'
    }
  ];
  userName = '';
  email = '';

  constructor(private cdr: ChangeDetectorRef) {
    // Ensure initial rendering
    setTimeout(() => this.cdr.detectChanges(), 0); // Delay to ensure DOM is ready
  }

  showAlert(nameInput: HTMLInputElement) {
    alert(`Thank you, ${nameInput.value}, for showing interest in ${this.hospitalName}!`);
  }

  learnMore(title: string) {
    alert(`Learn more about ${title}! Contact us for details.`);
  }

  scrollToServices() {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  }

  nextAnnouncement() {
    this.currentAnnouncementIndex = (this.currentAnnouncementIndex + 1) % this.announcements.length;
    this.currentAnnouncement = this.announcements[this.currentAnnouncementIndex];
    this.cdr.detectChanges();
  }

  subscribe() {
    if (this.email) {
      alert(`Thank you, ${this.email}, for subscribing to MedCare Hospital updates!`);
      this.email = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
}