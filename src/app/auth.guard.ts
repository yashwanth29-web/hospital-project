import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('token')) {
    console.warn('Access denied. No token found.'); 
    router.navigate(['/login']); 
    return false; 
  } 
  return true;
};
