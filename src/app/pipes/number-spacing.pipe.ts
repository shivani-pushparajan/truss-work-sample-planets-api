import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numberSpacing'
})
export class NumberSpacingPipe implements PipeTransform {
    transform(value: any) {
        return value.replace(/(\d)(?=(\d{3})*$)/g, "$1 "); // Pipe uses Regex to group digits and add spaces
    }

}