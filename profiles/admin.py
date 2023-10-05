from django.contrib import admin
from .models import Profile


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """Admin fields for Post Model"""
    list_display = ('owner', 'created_at')
    readonly_fields = ('owner', 'created_at', 'updated_at',
                       'name', 'bio', 'image')
