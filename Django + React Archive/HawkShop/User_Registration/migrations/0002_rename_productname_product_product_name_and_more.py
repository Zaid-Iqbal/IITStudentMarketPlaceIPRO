# Generated by Django 4.1.1 on 2022-10-05 01:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('User_Registration', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='productName',
            new_name='product_name',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='creditCard',
            new_name='credit_card',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='phoneNumber',
            new_name='phone_number',
        ),
    ]