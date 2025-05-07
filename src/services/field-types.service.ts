import { FieldTypeDefinition } from './../models/field';
import { Injectable } from '@angular/core';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text',
  icon: 'chat',
};

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
};
@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  constructor() {}

  getAllFieldTypes(): FieldTypeDefinition[] {
    // .values returns an iterator and from because it is a Map
    return Array.from(this.fieldTypes.values());
  }
}
