"""Tests for Comment Model"""
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Comment


class CommentListViewTest(APITestCase):
    """Post List Tests"""
    def setUp(self):
        """Setup for the tests in this class"""
        User.objects.create_user(username='tim', password='qwerty123')
        self.client.login(username='tim', password='qwerty123')
        self.client.post('/posts/', {
            'title': 'a title from tim',
            'summary': 'test summary',
            })

    def test_user_can_comment_on_post(self):
        response = self.client.post('/api/comments/', {
            'post': 'a title from tim',
            'content': 'test comment from tim'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
