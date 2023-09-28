from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from likes.models import Like
from bookmarks.models import Bookmark
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    """Post model JSON Serializer"""
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    like_id = serializers.SerializerMethodField()
    likes_count = serializers.ReadOnlyField()
    bookmark_id = serializers.SerializerMethodField()
    comments_count = serializers.ReadOnlyField()
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    def validate_image(self, value):
        """Image Validation"""
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px'
            )
        return value

    def get_created_at(self, obj):
        """Set DATETIME format of created_at field to naturaltime"""
        return naturaltime(obj.created_at)

    def get_updated_at(self, obj):
        """Set DATETIME format of updated_at field to naturaltime"""
        return naturaltime(obj.updated_at)

    def get_is_owner(self, obj):
        """Get the is_owner field"""
        request = self.context['request']
        return request.user == obj.owner

    def get_like_id(self, obj):
        """Get the like_id field"""
        user = self.context['request'].user
        if user.is_authenticated:
            like = Like.objects.filter(
                owner=user, post=obj
            ).first()
            return like.id if like else None
        return None

    def get_bookmark_id(self, obj):
        """Get the bookmark_id field"""
        user = self.context['request'].user
        if user.is_authenticated:
            bookmark = Bookmark.objects.filter(
                owner=user, post=obj
            ).first()
            return bookmark.id if bookmark else None
        return None

    class Meta:
        """Data structuring"""
        model = Post
        fields = [
            'id', 'owner', 'is_owner', 'profile_id', 'profile_image',
            'title', 'travel', 'summary', 'content', 'image', 'like_id',
            'comments_count', 'likes_count', 'created_at', 'updated_at',
            'bookmark_id',
        ]
        extra_kwargs = {'image': {'required': False}}
