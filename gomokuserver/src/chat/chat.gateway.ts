import {
  ConnectedSocket,
  MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(801)
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer() server;
  afterInit(server: any) {
    console.log('Initialized');
  }

  @SubscribeMessage('events')
  chat (
    @MessageBody() data: string,
  ): string {
    console.log(data);
    return data;
  }

  handleConnection(client: any, ...args: any[]): any {
  }

  handleDisconnect(client: any): any {
  }
}
