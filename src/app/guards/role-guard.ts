import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storedRole = localStorage.getItem('role');
  const expectedRole = route.data?.['role'];

  if (storedRole === expectedRole) {
    return true;
  }

  // Redirect to home or unauthorized page
  router.navigate(['/unauthorized']); // أو ['home'] أو ['login']
  return false;
};
