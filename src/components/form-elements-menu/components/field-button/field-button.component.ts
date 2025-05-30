import { Component, input } from '@angular/core';
import { FieldTypeDefinition } from '../../../../models/field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'field-button',
  templateUrl: './field-button.component.html',
  styleUrls: ['./field-button.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class FieldButtonComponent {
  field = input.required<FieldTypeDefinition>();
}
