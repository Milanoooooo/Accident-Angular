import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceDate'
})
export class NiceDatePipe implements PipeTransform {

  transform(value: string): any {

    return value;
  }

}
