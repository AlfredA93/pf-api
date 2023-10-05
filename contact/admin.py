from django.contrib import admin
from .models import Message


@admin.register(Message)
class ContactUsAdmin(admin.ModelAdmin):
    """Admin fields for Post Model"""
    list_display = ('name', 'email', 'subject', 'created_at')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')
