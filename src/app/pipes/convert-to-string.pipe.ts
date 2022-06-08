import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toString'
})
export class ConvertToStringPipe implements PipeTransform { 
    transform(value: any) { // Pipe transforms number to string
        return "" + value;
    }

}