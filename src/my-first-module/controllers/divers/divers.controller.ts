import { Body, Controller, Post } from '@nestjs/common';
import { UpperAndFusionPipe } from 'src/my-first-module/pipes/upper-and-fusion.pipe';

@Controller('divers')
export class DiversController {

    @Post('skills')
    test(@Body(UpperAndFusionPipe) b: any){
      return b
    }
}
