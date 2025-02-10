import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() openPage = new EventEmitter<string>();

  currentPage:string = 'Home';

  activePage(page:any){
    console.log(page);
    this.currentPage = page;
    this.openPage.emit(this.currentPage);
  }
}
