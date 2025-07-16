import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for [(ngModel)]
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students: any;
  searchTerm: string = '';

  doctors = [
  {
    name: 'Dr. Ayesha Khan',
    specialty: 'Cardiologist',
    timing: 'Mon–Fri: 9AM–1PM',
    image: 'https://mighty.tools/mockmind-api/content/human/124.jpg'
  },
  {
    name: 'Dr. Raj Verma',
    specialty: 'Orthopedic Surgeon',
    timing: 'Tue–Sat: 10AM–2PM',
    image: 'https://mighty.tools/mockmind-api/content/human/122.jpg'
  },
  {
    name: 'Dr. Neha Desai',
    specialty: 'Neurologist',
    timing: 'Mon–Thu: 11AM–4PM',
    image: 'https://mighty.tools/mockmind-api/content/human/97.jpg'
  },
  {
    name: 'Dr. Arjun Reddy',
    specialty: 'Dermatologist',
    timing: 'Wed–Sun: 10AM–1PM',
    image: 'https://mighty.tools/mockmind-api/content/human/99.jpg'
  },
  {
    name: 'Dr. Sneha Iyer',
    specialty: 'ENT Specialist',
    timing: 'Mon–Fri: 8AM–12PM',
    image: 'https://mighty.tools/mockmind-api/content/human/129.jpg'
  },
  {
    name: 'Dr. Karishma Kapoor',
    specialty: 'General Physician',
    timing: 'Daily: 9AM–6PM',
    image: 'https://mighty.tools/mockmind-api/content/human/127.jpg'
  },
  {
    name: 'Dr. Meera Naik',
    specialty: 'Pediatrician',
    timing: 'Mon–Sat: 10AM–1PM',
    image: 'https://mighty.tools/mockmind-api/content/human/108.jpg'
  },
  {
    name: 'Dr. Rohini Malhotra',
    specialty: 'Psychiatrist',
    timing: 'Tue–Fri: 2PM–6PM',
    image: 'https://mighty.tools/mockmind-api/content/human/113.jpg'
  },
  {
    name: 'Dr. Anjali Joshi',
    specialty: 'Gynecologist',
    timing: 'Mon–Sat: 9AM–3PM',
    image: 'https://mighty.tools/mockmind-api/content/human/83.jpg'
  },
  {
    name: 'Dr. Vi Sethi',
    specialty: 'Urologist',
    timing: 'Wed–Sun: 10AM–2PM',
    image: 'https://mighty.tools/mockmind-api/content/human/84.jpg'
  },
  {
    name: 'Dr. Priya Dutta',
    specialty: 'Oncologist',
    timing: 'Mon–Thu: 11AM–5PM',
    image: 'https://mighty.tools/mockmind-api/content/human/86.jpg'
  },
  {
    name: 'Dr. Manish Rawat',
    specialty: 'Pulmonologist',
    timing: 'Tue–Sat: 10AM–1PM',
    image: 'https://mighty.tools/mockmind-api/content/human/79.jpg'
  }
];


  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.students = response;
        console.log('Students fetched successfully:', this.students);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
        alert('Failed to fetch students. Please try again later.');
      }
    });
  }

  bookAppointment(name: string) {
    alert(`Booking appointment with ${name}`);
  }

  get filteredDoctors() {
    if (!this.searchTerm.trim()) return this.doctors;

    const term = this.searchTerm.toLowerCase();
    return this.doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(term) ||
      doctor.specialty.toLowerCase().includes(term)
    );
  }
}
