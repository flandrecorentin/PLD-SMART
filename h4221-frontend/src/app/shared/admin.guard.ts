import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let isAdmin = true;
    this.authenticationService.getUserRole().subscribe(
      resp => {
        if (resp == "ROLE_ADMIN") {
          isAdmin = true;
        } else {
          this.router.navigateByUrl('/home')
        }
      }
    );
    return isAdmin;
  }

}
