from rest_framework import serializers
from artwork.models import Artwork

class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model=Artwork
        fields=('__all__')