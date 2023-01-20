import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'datatransform'
})
export class DatatransformPipe implements PipeTransform {
  constructor(private datePipe: DatePipe){}
  transform(value:Date) {
    
    return this.datePipe.transform(value,"dd-MM-yyyy")
  }

}
