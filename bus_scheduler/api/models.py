from django.db import models

class Bus(models.Model):
    bus_number = models.CharField(max_length=10, unique=True, default='UNKNOWN')
    capacity = models.PositiveIntegerField(default=30)  # Default capacity of 30
    model = models.CharField(max_length=100, default='Unknown Model')  # Default model

    def __str__(self):
        return self.bus_number

class Driver(models.Model):
    name = models.CharField(max_length=100, default='Unknown Driver')  # Default name
    license_number = models.CharField(max_length=50, unique=True, default='UNKNOWN123')  # Default license number
    contact_number = models.CharField(max_length=15, default='0000000000')  # Default contact number

    def __str__(self):
        return self.name

class Route(models.Model):
    route_number = models.CharField(max_length=10, unique=True, default='UNKNOWN')
    start_point = models.CharField(max_length=100, default='Start Point Not Specified')  # Default start point
    end_point = models.CharField(max_length=100, default='End Point Not Specified')  # Default end point
    distance = models.FloatField(default=0.0)  # Default distance of 0.0 km

    def __str__(self):
        return f"{self.route_number}: {self.start_point} to {self.end_point}"

class Schedule(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    start_time = models.DateTimeField(default=models.fields.datetime.datetime.now)  # Default to current time
    end_time = models.DateTimeField(default=models.fields.datetime.datetime.now)  # Default to current time
    is_linked = models.BooleanField(default=True)  # Default to linked duty

    def __str__(self):
        return f"Schedule {self.id}: {self.bus} - {self.route}"

class CrewAssignment(models.Model):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    assignment_time = models.DateTimeField(default=models.fields.datetime.datetime.now)  # Default to current time

    def __str__(self):
        return f"Assignment: {self.driver} - {self.bus} - {self.schedule}"

class RestPeriod(models.Model):
    driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
    start_time = models.DateTimeField(default=models.fields.datetime.datetime.now)  # Default to current time
    end_time = models.DateTimeField(default=models.fields.datetime.datetime.now)  # Default to current time

    def __str__(self):
        return f"Rest Period: {self.driver} from {self.start_time} to {self.end_time}"
