import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class MedicineComponent {
  cartCount = 0;
  showPopup = false;
  searchTerm = '';

  get filteredMedicines() {
    return this.medicines.filter(med =>
      med.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart(index: number) {
    const med = this.medicines[index];
    if (med.isInCart) {
      med.isInCart = false;
      this.cartCount--;
    } else {
      med.isInCart = true;
      this.cartCount++;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
  onBuyNow() {
  if (this.cartCount > 0) {
    this.showPopup = true;
  }
}



  
 medicines = [
  {
    name: 'Paracetamol',
    description: 'Pain reliever and fever reducer',
    price: 25,
    rating: 4.5,
    image: 'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Ibuprofen',
    description: 'Used to reduce fever and treat pain',
    price: 40,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Amoxicillin',
    description: 'Antibiotic for bacterial infections',
    price: 70,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522335579687-9c718c5184d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Cetirizine',
    description: 'Relieves allergy symptoms',
    price: 20,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Aspirin',
    description: 'Used to reduce pain and inflammation',
    price: 30,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1562243061-204550d8a2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljaW5lfGVufDB8fDB8fHww',
    isInCart: false
  },
  {
    name: 'Azithromycin',
    description: 'Antibiotic for throat infections',
    price: 90,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Metformin',
    description: 'Controls high blood sugar for type 2 diabetes',
    price: 55,
    rating: 4.6,
    image: 'https://plus.unsplash.com/premium_photo-1673455853173-bcbb4f1292aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlsbHxlbnwwfHwwfHx8MA%3D%3D',
    isInCart: false
  },
  {
    name: 'Pantoprazole',
    description: 'Reduces stomach acid',
    price: 60,
    rating: 4.4,
    image: 'https://plus.unsplash.com/premium_photo-1668605108596-2aba740e010a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpbGx8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Loratadine',
    description: 'Antihistamine for allergies',
    price: 25,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isInCart: false
  },
  {
    name: 'Dolo 650',
    description: 'Effective for fever and body pain',
    price: 30,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625144094117-6612bbbe0a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBpbGx8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Ranitidine',
    description: 'Treats and prevents ulcers',
    price: 35,
    rating: 4.0,
    image: 'https://plus.unsplash.com/premium_photo-1669428846195-a757b0ddedd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBpbGx8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Ondansetron',
    description: 'Prevents nausea and vomiting',
    price: 45,
    rating: 4.3,
    image: 'https://media.istockphoto.com/id/1368058797/photo/close-up-of-medicine-vials-on-a-production-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=lIu7w0SJ8tEA9Xnn7e_7HAwCDN0LNKUh9ZZDZp2zqqQ=',
    isInCart: false
  },
  
  {
    name: 'Norflox-TZ',
    description: 'Antihistamine for allergies',
    price: 25,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isInCart: false
  },
  {
    name: 'Crocin Advance',
    description: 'Used to reduce fever and treat pain',
    price: 40,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Montair-LC',
    description: 'Antibiotic for bacterial infections',
    price: 70,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522335579687-9c718c5184d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },
  {
    name: 'Ecosprin 75',
    description: 'Relieves allergy symptoms',
    price: 20,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
    isInCart: false
  },{
  name: 'Blister Pack Combo',
  description: 'Combo of pain and fever relief tablets',
  price: 65,
  rating: 4.3,
  image: 'https://media.istockphoto.com/id/1277009188/photo/close-up-of-hand-holding-blister-packs.webp?a=1&b=1&s=612x612&w=0&k=20&c=TknwM7JDZCu_LLoq1FvxnxUwyuXKcav9irMra7zpi6U=',
  isInCart: false
},
{
  name: 'Anti-Allergy Syrup',
  description: 'Relieves allergy and congestion symptoms',
  price: 50,
  rating: 4.5,
  image: 'https://images.unsplash.com/photo-1631669969504-f35518bf96ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXNjcmlwdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  isInCart: false
},
{
  name: 'Prescription Tablets',
  description: 'Essential prescription medication pack',
  price: 80,
  rating: 4.6,
  image: 'https://images.unsplash.com/photo-1630094539386-280edfb5d46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByZXNjcmlwdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  isInCart: false
},
{
  name: 'Budget Pharma Pack',
  description: 'Affordable pack for regular medication needs',
  price: 45,
  rating: 4.2,
  image: 'https://media.istockphoto.com/id/165943025/photo/rising-cost-of-prescripton-drugs.webp?a=1&b=1&s=612x612&w=0&k=20&c=1hjUcYJzf9tzEXZWCBFC7rL_B8TTM088mTl6Vnikh1s=',
  isInCart: false
}

  // You can keep using the original images from here or provide more replacements.
];


  
}
