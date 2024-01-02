import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-generic',
  templateUrl: './dialog-generic.component.html',
  styleUrls: ['./dialog-generic.component.scss'],
})
export class DialogGenericComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
