from django.db import models

# Create your models here.

class Events(models.Model):

    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=500)
    Desc = models.CharField(max_length=2000)
    Year = models.IntegerField()
    Loc = models.CharField(max_length=500)
    Date = models.DateField()
    Photo = models.ImageField()