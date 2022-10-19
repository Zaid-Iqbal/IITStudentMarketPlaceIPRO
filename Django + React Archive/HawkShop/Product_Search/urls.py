from django.urls import path
from . import views

#URLConf Module
urlpatterns = [
    path('search/', views.searchProduct)
]