from django.urls import path
from .views import (
    BusListCreateView, BusRetrieveUpdateDestroyView,
    DriverListCreateView, DriverRetrieveUpdateDestroyView,
    RouteListCreateView, RouteRetrieveUpdateDestroyView,
    ScheduleListCreateView, ScheduleRetrieveUpdateDestroyView,
    home
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Home page view
    path('', home, name='home'),

    # Bus CRUD views
    path('buses/', BusListCreateView.as_view(), name='bus-list-create'),
    path('buses/<int:pk>/', BusRetrieveUpdateDestroyView.as_view(), name='bus-detail'),

    # Driver CRUD views
    path('drivers/', DriverListCreateView.as_view(), name='driver-list-create'),
    path('drivers/<int:pk>/', DriverRetrieveUpdateDestroyView.as_view(), name='driver-detail'),

    # Route CRUD views
    path('routes/', RouteListCreateView.as_view(), name='route-list-create'),
    path('routes/<int:pk>/', RouteRetrieveUpdateDestroyView.as_view(), name='route-detail'),

    # Schedule CRUD views
    path('schedules/', ScheduleListCreateView.as_view(), name='schedule-list-create'),
    path('schedules/<int:pk>/', ScheduleRetrieveUpdateDestroyView.as_view(), name='schedule-detail'),

    # JWT authentication views
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
