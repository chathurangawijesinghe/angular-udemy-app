import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './server';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Server[], propertyName: string): Server[] {
    return values.sort((a, b) => {
      if (a[propertyName] > b[propertyName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
