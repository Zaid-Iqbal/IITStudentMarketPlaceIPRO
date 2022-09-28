from django.db import models

class Product(models.Model):
    productID = models.AutoField()
    productName = models.CharField(max_length=250)
    userID = models.ForeignKey('User', on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2)
    description = models.TextField()
    condition = models.CharField(max_length=100)
    date_posted = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField()
