from django.test import TestCase

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class BusTests(APITestCase):
    def test_get_buses(self):
        url = reverse('bus-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_bus(self):
        url = reverse('bus-list-create')
        data = {'bus_number': '123', 'capacity': 50, 'model': 'Model X'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
