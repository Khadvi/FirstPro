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
  completedTasks: any[] = [];

  addTask() {
    let id;
    if (this.allTasks.length == 0) {
      id = 1;
    }
    else {
      id = this.allTasks[this.allTasks.length - 1]?.id + 1;
    }
    this.allTasks.push({ id: id, name: this.newTask });
    console.log('Upaded all tasks',this.allTasks);
    this.newTask = '';
  }

  removeTask(id:any){
    console.log('Removed task is ',this.allTasks.filter(d => d.id == id))
    this.allTasks = this.allTasks.filter(d => d.id !== id);
  }

  taskComp(id:any){
    let addCompTask = this.allTasks.filter(d => d.id == id);
    this.completedTasks.push(addCompTask[0]);
    console.log('Completed task added',addCompTask);
    console.log('Completed task updated',this.completedTasks);
    this.allTasks = this.allTasks.filter(d => d.id !== id);
  }

  deleteTask(id:any){
    console.log('Deleted task from completed',this.completedTasks.filter(d => d.id == id));
    this.completedTasks = this.completedTasks.filter(d => d.id !== id);
  }

}
