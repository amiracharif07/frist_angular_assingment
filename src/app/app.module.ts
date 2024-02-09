import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { customIconsList } from './custom-icons-list';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconsComponent } from './shared/icons/icons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    IconsComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    IconsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
  ) {
      Object.entries(customIconsList.fill).forEach((entry) => {
          const [key, value] = entry
          value.forEach((icon: string) => {
              this.matIconRegistry.addSvgIcon(
                  `${icon}-fill`,
                  this.domSanitizer.bypassSecurityTrustResourceUrl(
                      `assets/icons/fill/${key}/${icon}.svg`
                  )
              )
          })
      })

      Object.entries(customIconsList.stroke).forEach((entry) => {
          const [key, value] = entry
          value.forEach((icon: string) => {
              this.matIconRegistry.addSvgIcon(
                  `${icon}-stroke`,
                  this.domSanitizer.bypassSecurityTrustResourceUrl(
                      `assets/icons/stroke/${key}/${icon}.svg`
                  )
              )
          })
      })
  }
}