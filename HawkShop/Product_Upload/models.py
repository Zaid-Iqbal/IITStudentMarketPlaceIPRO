from django.db import models

class Product(models.Model):
    productID = models.AutoField()
    userID = models.AutoField()
    price = models.DecimalField(decimal_places=2)
    description = models.TextField()
    condition = models.CharField(max_length=100)
    date_posted = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField()
