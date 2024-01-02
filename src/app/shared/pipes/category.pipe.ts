import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(category: string): string {
   switch (category) {
    case "Adventure": return "hiking"
    case "Action": return "directions_run"
   }

   return "hiking";
  }
}
