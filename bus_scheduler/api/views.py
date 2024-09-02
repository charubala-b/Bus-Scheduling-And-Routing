from django.shortcuts import render
from rest_framework import generics
from .models import Bus, Driver, Route, Schedule
from .serializers import BusSerializer, DriverSerializer, RouteSerializer, ScheduleSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Bus Scheduler API!")

# CRUD for Bus
class BusListCreateView(generics.ListCreateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class BusRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

# CRUD for Driver
class DriverListCreateView(generics.ListCreateAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

class DriverRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

# CRUD for Route
class RouteListCreateView(generics.ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

class RouteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

# CRUD for Schedule
class ScheduleListCreateView(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class ScheduleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
