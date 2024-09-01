from django.shortcuts import render
from .models import Events
from .serializers import EventsSerializer
from rest_framework import viewsets
# Create your views here.

class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer