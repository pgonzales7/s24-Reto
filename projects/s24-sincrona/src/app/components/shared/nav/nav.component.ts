import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( private breakpointObserver: BreakpointObserver, public authentication: AuthenticationService ) {}


  loggedUser: boolean = false;

  ngOnInit(): void {
    this.loggedUser = this.authentication.isLoggedIn('');
    this.authentication.changeLoginStatus$.subscribe(
      (loggedStatus: boolean) => this.loggedUser = loggedStatus
    )
  }

  LogOut() {
    this.authentication.logOut();
  }

}
