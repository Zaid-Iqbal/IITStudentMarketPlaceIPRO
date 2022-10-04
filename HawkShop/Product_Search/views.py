from django.shortcuts import render
from django.http import HttpResponse
from HawkShop.Product_Upload.models import Product
from django.db import connection, transaction

# def say_hello(request):
#     # return HttpResponse('Hello World')
#
#     # return render(request, 'hello.html')
#
#     return render(request, 'hello.html', {'name' : 'Zaid'})

def searchProduct(request):
    # TODO
    #   1. Get keywords from search box
    #   2. Query Product DB for related products based on keywords
    #   3. Return list of products
    pass