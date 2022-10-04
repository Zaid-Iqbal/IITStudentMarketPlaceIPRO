from django.db import models

class User(models.Model):
    user = models.IntegerField()
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    phoneNumber = models.IntegerField()
    password = models.CharField(max_length=100)
    creditCard = models.IntegerField()

class Product(models.Model):
    product = models.IntegerField()
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    productName = models.CharField(max_length=250)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    condition = models.CharField(max_length=100)
    date_posted = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField()
