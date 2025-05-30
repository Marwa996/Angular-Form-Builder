import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldSettingsComponent } from '../components/field-settings/field-settings.component';
import { MainCanvasComponent } from '../components/main-canvas/main-canvas.component';
import { FormElementsMenuComponent } from '../components/form-elements-menu/form-elements-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    FieldSettingsComponent,
    MainCanvasComponent,
    FormElementsMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'form-builder';
}
