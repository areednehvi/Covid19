import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatPhone"
})
export class PhonePipe implements PipeTransform {
  transform(rawNum: string) {

    if(rawNum){
        return rawNum.substr(0,3) + '-' + rawNum.substr(3,3) + '-' + rawNum.substr(6);
    }

    return rawNum;
  }
}