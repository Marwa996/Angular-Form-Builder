import { AfterViewInit, Component, inject } from '@angular/core';
import { FieldTypesService } from '../../services/field-types.service';
import { FieldButtonComponent } from './components/field-button/field-button.component';

@Component({
  selector: 'form-elements-menu',
  templateUrl: './form-elements-menu.component.html',
  styleUrls: ['./form-elements-menu.component.scss'],
  standalone: true,
  imports: [FieldButtonComponent],
})
export class FormElementsMenuComponent {
  fieldTypesService = inject(FieldTypesService);
  constructor() {}

  fieldTypes = this.fieldTypesService.getAllFieldTypes();
}
