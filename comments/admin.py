from django.contrib import admin
from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    """Admin fields for Post Model"""
    list_filter = ('owner', 'post')
    list_display = ('owner', 'content', 'post', 'created_at')
    readonly_fields = ('owner', 'content', 'post', 'created_at')
