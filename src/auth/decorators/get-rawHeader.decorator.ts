import { ExecutionContext, createParamDecorator } from '@nestjs/common';
export const RawHeader = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const { rawHeaders } = req;

  console.log(rawHeaders);
});
