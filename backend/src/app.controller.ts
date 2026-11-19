import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Application')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Get application information',
  })
  @ApiOkResponse({
    description: 'Application name, version and status',
    schema: {
      type: 'object',
      required: ['name', 'version', 'status'],
      properties: {
        name: {
          type: 'string',
          example: 'Maintenix API',
        },
        version: {
          type: 'string',
          example: '1.0.0',
        },
        status: {
          type: 'string',
          example: 'running',
        },
      },
    },
  })
  @Get()
  getAppInfo() {
    return this.appService.getAppInfo();
  }
}
