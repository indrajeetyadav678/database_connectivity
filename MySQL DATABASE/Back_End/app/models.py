from django.db import models

# Create your models here.
class StudentModel(models.Model):
    Name=models.CharField(max_length=254)
    Standard=models.CharField(max_length=100)
    Math=models.IntegerField()
    Hindi=models.IntegerField()
    English=models.IntegerField()
    Social=models.IntegerField()
    Science=models.IntegerField()
    Sanskrit=models.IntegerField()

    def __str__(self):
        return self.Name