import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../Models/Todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title!: string;
  description!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmitAddTodo(form: NgForm) {
    if (form.valid) {
      const todo = {
        title: this.title,
        description: this.description,
        active: true,
      };
      this.todoAdd.emit(todo);
      this.toastr.success("ToDo added","Success")
    } else {
      this.toastr.error("Invalid Form","Error");
    }
  }
}
