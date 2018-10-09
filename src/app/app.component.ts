import { Component } from '@angular/core';

class Todo {
  description : string;
  isDone : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [];
  public description : string;
  
  addNewTodo(): void{
    this.todos.push({
      description: this.description,
      isDone : false
    })
    this.description = null;

    console.log(this.todos)
  }
  deleteTodo(indice){     
   const index = this.todos.indexOf(indice) ;
   this.todos.splice(index,1)
  }
}
