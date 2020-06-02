import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoadableModule, matcher } from 'ngx-loadable';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    LoadableModule.forRoot({
			moduleConfigs: [
        { name: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule), matcher }]
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
