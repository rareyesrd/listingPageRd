import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// For search engine component from bootstrap
import { FormsModule } from '@angular/forms';

// Particlejs
import { ParticlesModule } from 'angular-particle';

// Pagination
import {NgxPaginationModule} from 'ngx-pagination';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/details/profile/profile.component';
import { CommentsComponent } from './components/details/comments/comments.component';
import { ResultsComponent } from './components/search/results/results.component';
import { EngineComponent } from './components/search/engine/engine.component';
import { HeaderComponent } from './components/header/header.component';
 



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProfileComponent,
    CommentsComponent,
    ResultsComponent,
    EngineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ParticlesModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
