from django.contrib import admin
from .models import User
from .models import Product

class UserUploadAdmin(admin.ModelAdmin):
    list_display = ('user', 'name', 'email', 'phone_number', 'password', 'credit_card')

class ProductUploadAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'product_name', 'price', 'description', 'condition', 'date_posted', 'sold')   

# Register your models here.
admin.site.register(User, UserUploadAdmin)
admin.site.register(Product, ProductUploadAdmin)
