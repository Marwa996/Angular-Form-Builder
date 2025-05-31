import { Component, input } from '@angular/core';
import { FieldTypeDefinition } from '../../../../models/field';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop'
@Component({
  selector: 'field-button',
  templateUrl: './field-button.component.html',
  styleUrls: ['./field-button.component.scss', '../../../../../styles.scss'],
  standalone: true,
  imports: [MatIconModule, DragDropModule],
})
export class FieldButtonComponent {
  field = input.required<FieldTypeDefinition>();
}
