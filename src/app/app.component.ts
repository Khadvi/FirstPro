import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { CommonModule } from '@angular/common';
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { MoreComponent } from './more/more.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,HomeComponent,ExploreComponent, CommonModule, ReelsComponent, MessagesComponent, NotificationsComponent, CreateComponent, ProfileComponent, TaskManagerComponent, MoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstPro';
  currentPage = 'Home';

  getCurrentPage(page: any){
    this.currentPage = page
    console.log(page, 'app-comp');
  }
}
