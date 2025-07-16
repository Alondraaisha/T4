from django.db import models

# Create your models here.
class Song(models.Model):
    song=models.CharField(max_length=80)
    artist=models.CharField(max_length=80)
    release =models.CharField(max_length=80)
    views=models.IntegerField()
    

    def __str__(self):
        return self.song
    