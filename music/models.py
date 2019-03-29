from django.db import models


class Song(models.Model):
    title = models.CharField(max_length=300)
    videoid = models.CharField(max_length=100, unique=True)
    liked = models.BooleanField(default=False)

    def __str__(self):
        return self.title
