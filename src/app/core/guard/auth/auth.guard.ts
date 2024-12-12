import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsAuthenticatedUseCase } from '../../../domain/usecases/user/is-authenticated';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(IsAuthenticatedUseCase);
  const router = inject(Router);

  
  if (auth.execute()) {
    return true;
  } else {
    alert('Veuillez vous connecter');
    router.navigate(['/auth/login']);
    return false;
  }
};
