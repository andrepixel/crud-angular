import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogGenericComponent } from './components/dialog-generic/dialog-generic.component';
import { CategoryPipe } from './pipes/category.pipe';
import { MatIconModule } from '@angular/material/icon';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DialogGenericComponent, CategoryPipe],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    DialogGenericComponent,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CategoryPipe
  ],
})
export class SharedModule {}
