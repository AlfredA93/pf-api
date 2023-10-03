from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """
    Post model, related to 'owner', User model.
    Default image set so that we can always reference image.url.
    """
    CATEGORIES = [
        ('bicycle', 'Bicycle'),
        ('boat', 'Boat'),
        ('foot', 'By Foot'),
        ('car', 'Combustion Engine Car'),
        ('electric', 'Electric Car'),
        ('multiple', 'Multiple'),
        ('other', 'Other'),
        ('plane', 'Plane'),
        ('train', 'Train'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    summary = models.TextField(max_length=250)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_post_mzto5w', blank=True
        )
    travel = models.CharField(
        max_length=30, choices=CATEGORIES, default='multiple'
        )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """Data Structuring"""
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
