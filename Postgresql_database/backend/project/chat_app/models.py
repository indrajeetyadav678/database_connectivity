from django.db import models
# import uuid 

# Create your models here.
# def generated_admin_id():
#     return f'"admin"+{str(uuid.uuid4())[:4]}'

class User(models.Model):
    name=models.CharField(max_length=200)
    user_id=models.CharField(max_length=100, unique=True)
    password=models.CharField(max_length=200)

    # def save(self, *args, **kwargs):
    #     if not self.admin_id:
    #         user_id = generated_admin_id()
    #     super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class Messagestore(models.Model):
    user_id=models.ForeignKey(User, on_delete=models.CASCADE, to_field='user_id')
    msg=models.CharField(max_length=100)
     
    def __str__(self):
        return self.user_id