import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

  newTask: string = '';
  allTasks: any[] = [];
  compTasks: any[] = [];

  addTask() {
    let id;
    if (this.allTasks.length == 0) {
      id = 1;
    }
    else {
      id = this.allTasks[this.allTasks.length - 1]?.id + 1;
    }
    this.allTasks.push({ id: id, name: this.newTask });
    console.log(this.allTasks);
    this.newTask = '';
  }

  removeTask(id:any){
    console.log(this.allTasks.filter(d => d.id == id))
    this.allTasks = this.allTasks.filter(d => d.id !== id);
  }

  // taskComp(id:any){
  //   console.log(id);
  // }

}
