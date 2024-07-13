# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.urls import path
# from chat_app import consumers

# application = ProtocolTypeRouter({
#     "http": get_asgi_application(),
#     "websocket": URLRouter([
#         path("ws/chat/", consumers.ChatConsumer.as_asgi()),
#     ]),
# })


from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/chating/', consumers.MyConsumer.as_asgi()),
]

