import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { DiversController } from './controllers/divers/divers.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { HelmetMiddleware } from '@nest-middlewares/helmet';

@Module({
  controllers: [TodoController, DiversController],
  providers: [TodoService],
})
export class MyFirstModuleModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(HelmetMiddleware).forRoutes('')
    .apply(LoggerMiddleware, 
      (req: Request, res: Response, next: () => void) => {
      console.log("In Logger Function");
      //console.log("Request :", req);
      next();
    }).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
