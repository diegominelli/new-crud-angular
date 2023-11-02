import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, oldItem: string, newItem: string): string {
    return value.replaceAll(oldItem, newItem);
  }
}
