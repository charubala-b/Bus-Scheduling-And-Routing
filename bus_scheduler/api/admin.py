# bus_scheduler/admin.py

from django.contrib import admin
from .models import Bus, Driver, Route, Schedule, CrewAssignment, RestPeriod

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('bus_number', 'capacity', 'model')

@admin.register(Driver)
class DriverAdmin(admin.ModelAdmin):
    list_display = ('name', 'license_number', 'contact_number')

@admin.register(Route)
class RouteAdmin(admin.ModelAdmin):
    list_display = ('route_number', 'start_point', 'end_point', 'distance')

@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('bus', 'driver', 'route', 'start_time', 'end_time', 'is_linked')

@admin.register(CrewAssignment)
class CrewAssignmentAdmin(admin.ModelAdmin):
    list_display = ('driver', 'bus', 'schedule', 'assignment_time')

@admin.register(RestPeriod)
class RestPeriodAdmin(admin.ModelAdmin):
    list_display = ('driver', 'start_time', 'end_time')
