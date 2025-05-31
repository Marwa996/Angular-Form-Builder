import { AfterViewInit, Component, inject } from '@angular/core';
import { FieldButtonComponent } from './components/field-button/field-button.component';
import { FieldTypesService } from '../../services/field-types.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'form-elements-menu',
  templateUrl: './form-elements-menu.component.html',
  styleUrls: ['./form-elements-menu.component.scss', '../../../styles.scss'],
  standalone: true,
  imports: [FieldButtonComponent, DragDropModule],
})
export class FormElementsMenuComponent {
  fieldTypesService = inject(FieldTypesService);
  constructor() { }

  fieldTypes = this.fieldTypesService.getAllFieldTypes();
}
