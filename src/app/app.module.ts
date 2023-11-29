import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsModule } from './posts/posts.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplateComponent } from './components/template/template.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UserService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
