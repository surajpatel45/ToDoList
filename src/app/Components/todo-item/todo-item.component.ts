import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  constructor(private toastr: ToastrService) {}
  ngOnInit() {}

  @Input()
  todo!: Todo;
  @Input()
  index!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClickDelete(todo: Todo) {
    console.log('Todo has been triggered.');
    this.todoDelete.emit(todo);
    this.toastr.warning("ToDo deleted");
  }

  onCheckboxClick(todo: Todo) {
    console.log(todo);
    this.todoCheckbox.emit(todo);
    this.toastr.info("Todo checked");
  }
}
