import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'checkValueUnknown'
})
export class UnknownValuePipe implements PipeTransform {
    transform(value: any) {
        return value == "unknown" || Number.isNaN(value) ? "?" : value; // Pipe replaces unknown values with "?"
    }

}