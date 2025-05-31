import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss', '../../../../../styles.scss'],
  standalone: true,
  imports: [DragDropModule],
})
export class FormEditorComponent {
  onDropInRow(event: CdkDragDrop<string>) {
    if (event.previousContainer.data === 'field-selector') {
      //Add our field to the row
      return
    }
  }
}
