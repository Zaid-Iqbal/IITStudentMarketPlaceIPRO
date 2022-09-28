from django.db import models

class User(models.Model):
    userID = models.AutoFiled()
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    phoneNumber = models.IntegerField()
    password = models.CharField(max_length=100)
    creditCard = models.IntegerField()