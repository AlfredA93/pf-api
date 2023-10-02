from rest_framework import serializers
from .models import Profile
from followers.models import Follower


class ProfileSerializer(serializers.ModelSerializer):
    """JSON serializer for Profile model"""
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    following_id = serializers.SerializerMethodField()
    posts_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        """Get the is_owner field"""
        request = self.context['request']
        return request.user == obj.owner

    def get_following_id(self, obj):
        """Get the following_id field"""
        user = self.context['request'].user
        if user.is_authenticated:
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()
            return following.id if following else None
        return None

    class Meta:
        """Data structure for profile serializer"""
        model = Profile
        fields = [
            'id', 'owner',  'name', 'bio', 'image',
            'is_owner', 'following_id', 'posts_count',
            'followers_count', 'following_count', 'created_at',
            'updated_at',
        ]
