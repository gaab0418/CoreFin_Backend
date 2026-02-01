import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): object {
		return {
			version: process.env.APP_VERSION || '',
			name: process.env.APP_NAME || '',
			defaultPath: process.env.DEFAULT_PATH || '',
			environment: process.env.ENV || '',
		};
	}
}
