import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperAndFusionPipe implements PipeTransform {
  transform(value: { skills : string[] }, metadata: ArgumentMetadata) {
    if( metadata.type === 'body'){
      if(!value.skills){
        return new BadRequestException()
      }
      let fusion = ""
      for (let index = 0; index < value.skills.length; index++) {
        const skill = value.skills[index];
        fusion = fusion + skill.toUpperCase() + "-"        
      }
      fusion = fusion.slice(0, fusion.length - 2)
      return fusion;
    }
    return value.skills
  }
}
