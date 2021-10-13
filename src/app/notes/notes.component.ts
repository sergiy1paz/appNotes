import { Component, Input, OnInit } from '@angular/core';

export interface Note {
  content: string,
  isChecked: boolean
}


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() filterType: string = "all";

  notes: Note[] = [
    {content: "Create new note", isChecked: false},
  ];


  
  
  constructor() { }

  ngOnInit(): void {

  }

  pushNote(content: string) {
    const note = {
      content: content,
      isChecked: false
    };
    this.notes.push(note);
  }

  removeNote(note: Note) {
    this.notes = this.notes.filter(n => n !== note);
  }

  checkNote(note: Note) {
    note.isChecked = !note.isChecked;
  }

  filter(note: Note): boolean {
    if (this.filterType === "all") {
      return true;
    } else {
      return note.isChecked;
    }
  }
}
