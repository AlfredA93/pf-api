from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    """Admin fields for Post Model"""
    list_filter = ('owner', 'title')
    list_display = ('owner', 'title', 'created_at')
    readonly_fields = ('owner', 'title', 'summary', 'content',
                       'image', 'travel', 'created_at', 'updated_at')
