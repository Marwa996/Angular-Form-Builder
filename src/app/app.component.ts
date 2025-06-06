import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldSettingsComponent } from './components/field-settings/field-settings.component';
import { MainCanvasComponent } from './components/main-canvas/main-canvas.component';
import { FormElementsMenuComponent } from './components/form-elements-menu/form-elements-menu.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [
    FieldSettingsComponent,
    MainCanvasComponent,
    FormElementsMenuComponent, DragDropModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
})
export class AppComponent {
  title = 'form-builder';
}
