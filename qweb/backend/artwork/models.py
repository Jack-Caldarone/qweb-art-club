from django.db import models

# Create your models here.

class Artwork(models.Model):

    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=500)
    Artist = models.CharField(max_length=500)
    Mediums = models.CharField(max_length=500)
    Photo = models.CharField(max_length=500)
    Event = models.CharField(max_length=500)
    Year = models.IntegerField()