import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './notes.component';

@Pipe({
  name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {

  transform(notes: Note[], filterType: string): Note[] {
    if (filterType === "all") {
      return notes;
    } else {
      return notes.filter(note => note.isChecked);
    }
  }
}
