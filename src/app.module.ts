import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketModule } from './web-socket/web-socket.module';
import { NotificationsController } from './web-socket/web-socket.controller';
import { NotificationsGateway } from './web-socket/notifications.gateway';

@Module({
  imports: [WebSocketModule],
  controllers: [AppController, NotificationsController],
  providers: [AppService, NotificationsGateway],
})
export class AppModule {}
