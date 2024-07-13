import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import User, Messagestore
from .serializers import Userserializer, Messageserializer

class MyConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = "test_chat"
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)

        if "user" in data:
            user_data = data['user_id']
            user_instance = User.objects.create(**user_data)
            serializer = Userserializer(user_instance)
        elif "message" in data:
            message_data = data['msg']
            message_instance = Messagestore.objects.create(**message_data)
            serializer = Messageserializer(message_instance)

        # Broadcast the data to all clients in the group
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'update_data',
                'data': serializer.data
            }
        )

    async def update_data(self, event):
        data = event['data']
        await self.send(text_data=json.dumps(data))
