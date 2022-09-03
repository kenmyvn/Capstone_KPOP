# Generated by Django 4.1 on 2022-09-03 17:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('stayc', '0004_stayc_image'),
        ('staycwant', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staycwant',
            name='photocard',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stayc.stayc'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='staycwant',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
