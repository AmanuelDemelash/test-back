import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestmidMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
