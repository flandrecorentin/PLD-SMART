import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormService } from '../config/form.service';

@Injectable({
  providedIn: 'root'
})
export class FormAlreadySentGuard implements CanActivate {

  constructor(private formService: FormService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.formService.hasAlreadySentForm().subscribe(
        (hasAlreadySent: boolean) => {
          if(hasAlreadySent) {
            this.router.navigateByUrl('/home')
            return true
          } else {
            return false
          }
        },
        (err) => {
          return false
        }
      )
    return true;
  }
  
}
