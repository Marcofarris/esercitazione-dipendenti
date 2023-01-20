import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datatransform'
})
export class DatatransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
