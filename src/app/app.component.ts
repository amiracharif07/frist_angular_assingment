import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RoutingPages } from './interfaces/routing-pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  routePage: RoutingPages[] = [
    {
      icon: 'home',
      label: 'Home',
      path: 'home'
    },
    {
      icon: 'list',
      label: 'About',
      path: 'about'
    },
    {
      icon: 'person',
      label: 'Portfolio',
      path: 'portfolio'
    },
    {
      icon: 'settings',
      label: 'Contact',
      path: 'contact'
    }
  ]
  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; 
    } else {
      this.sidenav.open(); 
      this.isCollapsed = !this.isCollapsed;
    }
  }
}