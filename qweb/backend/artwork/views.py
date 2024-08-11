from django.shortcuts import render
from .models import Artwork
from .serializers import ArtworkSerializer
from rest_framework import viewsets
# Create your views here.

class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer