import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {



  transform(items: any[], search: string): any[] {
    if (!items) { return []; }
    if (!search) { return items; };

    return items.filter(item => item.fName.includes(search) || item.lName.includes(search) || item.phoneN.includes(search) );

}
}
