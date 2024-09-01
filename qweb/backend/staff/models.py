from django.db import models

# Create your models here.

class Staff(models.Model):

    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=500)
    Position = models.CharField(max_length=500)
    Desc = models.CharField(max_length=2000)
    Photo = models.ImageField()