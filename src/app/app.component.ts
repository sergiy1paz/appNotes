import { Component, ViewChild } from '@angular/core';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angHW1';
  filter: string = "all";
  isAll: boolean = true;

  isHidden: boolean = true;
  noteContent = "";

  @ViewChild(NotesComponent, {static: false})
  private notesComponent: NotesComponent | undefined;


  switchFilterOn(arg: string, isAll: boolean) {
    this.filter = arg;
    this.isAll = isAll;
  }

  openDialog() {
    this.isHidden = false;
  }

  addNote() {
    if (this.noteContent && this.noteContent !== "") {
      this.notesComponent?.pushNote(this.noteContent);
      this.noteContent = "";
    }
    this.isHidden = true;
  }

  cancel() {
    this.isHidden = true;
  }
}
