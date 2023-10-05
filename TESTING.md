# PhotoFootprint Testing

# Frontend Testing

## Validation

### HTML

### CSS

### ESLint
For All Javascript and JSX Code, I installed the ESLint extension provided by Microsoft into my IDE to validate and check all of my code during the development process. There are no errors in the code.

### Lighthouse
## Manual Testing

| Milestone |Title |Description	| Checked |
|---------|------|-------------|-------|

## Bugs

# Backend Testing

## Validation

### Python - Flake8
To validate and check my code for errors I installed the Flake8 extension to my IDE which checks all the code written during the development process. This confirms there are no errors in the code. 


### Manual Testing
| Milestone | Description	| Checked |
|---------|-------------|-------|
|Profiles API|	Users can **create** a profile 	|✓|
|Profiles API|	Users can ** update** profile fields - username and bio	|✓|
|Followers API App|	Users can **create** or **delete** a follow|✓|
|Followers API App|	Users can **read** posts from the users they follow.	|✓|
|Contact API App	|Users can **create** a message to send to the PhotoFootprint Team	|✓|
|Contact API App	|Users recieve a confirmation email from the PhotoFootprint Team after submitting the message|	✓|
|Comments API App	|Users can **create** comments on posts when logged in	|✓|
|Comments API App	|Users can't **create** comment on posts when logged out|	✓|
|Comments API App|	Users can **update** their own comments on posts when logged in	|✓|
|Comments API App|	Users can't **update** or **delete** other user's comments|	✓|
|Likes API App	|Users can **create** a like for a post when logged in|	✓|
|Likes API App|	Users can **delete** a like on a post. (unlike)	|✓|
|Likes API App|	Users can't **create** or **delete** likes when logged out|	✓|
|Bookmarks API App|	Users can **create** a bookmark for a post when logged in	|✓|
|Bookmarks API App|	Users can **delete** a bookmark on a post.	|✓|
|Bookmarks API App|	Users can't **create** or **delete** bookmarks when logged out	|✓|
|Admin API |	Admin's can delete comments, posts and messages (contact us) through the admin panel|✓|
|Posts API App	|Users can delete their own posts	|✓|
|Posts API App	|Users can't delete other user posts|	✓|

### Automated Testing
The automated tests run on the backend API were done under the guidance and instruction from the CodeInstitute drf-api walkthrough learning materials, so I credit code institute for their brilliant support in learning how to conduct automated tests.
After manually testing the API during development, I wanted to conduct automated tests after deployment, to practice and develop further my knowledge of this. However after writing the first test for the Comment's model and running it, an error appeared because I had changed the Database system from postgres (default) to a cloud based database. At this point I chose not to alter the settings in my API settings.py file and to share the code written however state that this is only practice code and not tested. A copy of the error message is below this paragraph. In future I would edit the settings.py configuration to allow automated tests to happen, however, due to the time remaining on this project, it was not possible.

![Automated Testing Error](/documentation/testing-imgs/automated-testing.webp)<a name="testing-error"></a>

### Code Examples of the automated tests completed, all passing.

| Milestone  |Description	| Checked |
|---------|-------------|-------|
|Posts API App|	Users can **read** a list of posts	|✓|
```python
class PostListViewTests(APITestCase):
    """Post List Tests"""
    def setUp(self):
        """Setup for the tests in this class"""
        User.objects.create_user(username='tim', password='qwerty123')

    def test_can_list_posts(self):
        """
        Test List
        # 1. Get the User
        # 2. Create a post with the user, Tim
        # 3. Test the response when requesting an url.
        # 4. Is the response equal to 200 OK?
        """
        tim = User.objects.get(username='tim')  # 1
        Post.objects.create(owner=tim, title='test title')  # 2
        response = self.client.get('/posts/')  # 3
        self.assertEqual(response.status_code, status.HTTP_200_OK)  # 4
```
| Milestone |Description	| Checked |
|---------|-------------|-------|
|Posts API App|	Users can **create** a post when logged in	|✓|
```python
    def test_logged_in_user_can_create_post(self):
        """
        Logged In Post Creation Test
        # 1. Login as Tim
        # 2. Make a request to posts url, create a post
        # 2.5 Must have the required fields filled for serializer to validate
        # 3. Count all the posts in 'posts/'
        # 4. Test if it is equal to 1
        # 5. Test if response code is 201_CREATED
        """
        self.client.login(username='tim', password='qwerty123')  # 1
        response = self.client.post('/posts/', {  # 2
            'title': 'a title',
            'summary': 'test summary',  # 2.5
            })
        count = Post.objects.count()  # 3
        self.assertEqual(count, 1)  # 4
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)  # 5
```
| Milestone |Description	| Checked |
|---------|-------------|-------|
|Posts API App	|Users must be logged in to **create** a post	|✓|
```python
    def test_user_logged_in_to_post(self):
        """Test User must be logged in to post"""
        response = self.client.post('/posts/', {'title': 'title2'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
```

| Milestone |Description	| Checked |
|--------|-------------|-------|
|Posts API App|	Users can **read** an individual post|	✓|
```python
class PostDetailTests(APITestCase):
    """Post Detail View Tests"""
    def setUp(self):
        """
        Data setup for this class of Tests
        # 1. Create Users
        # 2. Create post by each user
        """
        harry = User.objects.create_user(
            username='harry', password='pass123')  # 1
        sally = User.objects.create_user(
            username='sally', password='pass987')  # 1
        Post.objects.create(  # 2
            owner=harry,
            title='Harry travelling',
            summary='Harry travel summary',
            content='Harry content',
        )
        Post.objects.create(  # 2
            owner=sally,
            title='Sally travelling',
            summary='Sally travel summary',
            content='Sally content',
        )

    def test_can_retrieve_post_using_valid_id(self):
        """
        Test retrieve post
        # 1. View the post detail
        # 2. Test Title data
        # 3. Test status code
        """
        response = self.client.get('/posts/1/')  # 1
        self.assertEqual(response.data['title'], 'Harry travelling')  # 2
        self.assertEqual(response.status_code, status.HTTP_200_OK)  # 3
```
| Milestone  |Description	| Checked |
|---------|-------------|-------|
|Posts API App	|Users **read** a page not found when searching an invalid id	|✓|
```python
    def test_page_not_found_invalid_post(self):
        """Retrieve data with invalid id"""
        response = self.client.get('/posts/123456789/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
```
| Milestone  |Description	| Checked |
|-------------|-------------|-------|
|Posts API App	|Users can **update** they're own post	|✓|

```python
    def test_user_can_update_own_post(self):
        """
        User can update own post
        # 1. User Login
        # 2. Put request to update post with data
        # 3. Test the title is the same as put request
        # 4. Test the status code of update request is 200 OK
        """
        self.client.login(username='harry', password='pass123')  # 1
        response = self.client.put('/posts/1/', {  # 2
            'title': 'Harry goes walking',
            'summary': 'Harry summary editted'
            })
        post = Post.objects.filter(pk=1).first()
        self.assertEqual(post.title, 'Harry goes walking')  # 3
        self.assertEqual(response.status_code, status.HTTP_200_OK)  # 4
```
| Milestone  |Description	| Checked |
|------------|-------------|-------|
|Posts API App	|Users can't **update** other user's posts	|✓|
```python
    def test_user_cant_update_other_users_post(self):
        """
        User cant update other users posts
        # 1. User Login
        # 2. Put request to update data of post not owned by User
        # 3. Test the HTTP response is FORBIDDEN
        """
        self.client.login(username='harry', password='pass123')  # 1
        response = self.client.put('/posts/2/', {  # 2
            'title': 'Harry edits Sallys post',
            'summary': 'Harry edits Sallys summary'
            })
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)  # 3
```

### Comments Model Testing
As stated in the initial introduction, the testing code for the Comments model was not completed due to the database being cloud based and not local as the testing application expected. (see error picture [above](#testing-error))
```python
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
        """Test User can comment on a post"""
        response = self.client.post('/api/comments/', {
            'post': 'a title from tim',
            'content': 'test comment from tim'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
```


### Bugs