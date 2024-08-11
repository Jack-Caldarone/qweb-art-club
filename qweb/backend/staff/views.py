from django.shortcuts import render
from .models import Staff
from .serializers import StaffSerializer
from rest_framework import viewsets
# Create your views here.

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer