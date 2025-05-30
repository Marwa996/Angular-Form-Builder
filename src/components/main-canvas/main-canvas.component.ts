import { Component } from '@angular/core';
import { FormEditorComponent } from './components/form-editor/form-editor.component';

@Component({
  selector: 'main-canvas',
  templateUrl: './main-canvas.component.html',
  styleUrls: ['./main-canvas.component.scss'],
  standalone: true,
  imports: [FormEditorComponent],
})
export class MainCanvasComponent {
  constructor() {}
}
