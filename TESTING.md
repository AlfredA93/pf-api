# PhotoFootprint Testing

## Contents

- [Frontend Testing](#fe)
  - [Validation](#fe-valid)
    - [W3C HTML Validator](#html-valid)
    - [W3C Jigsaw CSS Validator](#css-valid)
    - [ESLint - Javascript Validation](#jsx-valid)
    - [Lighthouse](#lighthouse)
  - [Manual Testing](#fe-manual-testing)
    - [Testing User Stories](#userstories)
    - [Testing Forms](#forms)
    - [Edge Cases](#edge-cases)
  - [Bugs](#fe-bugs)
  - [Responsiveness](#responsive)
- [Backend Testing](#backend)
  - [Validation](#be-valid)
    - [Python - Flake 8](#py-valid)
  - [Manual Testing](#be-manual)
    - [Testing tasks from GitHub Project](#be-tasks) 
    - [Admin Panel Tests](#be-admin)
  - [Automated Testing](#be-auto)
    - [Posts App](#auto-pass)
    - [Comments App](#auto-comments)
  - [Bugs](#be-bugs)


# Frontend Testing<a name="fe"></a>
## Validation<a name="fe-valid"></a>
### [W3C HTML Validator](https://validator.w3.org/#validate_by_input) <a name="html-valid"></a>

#### All HTML code in this project is valid

![HTML Valid](/documentation/testing-imgs/html-valid.webp)

#### I conducted this test by right clicking on each page, selecting View Page Source and then copying the core code across into the direct input section of the [W3C HTML Validator](https://validator.w3.org/#validate_by_input).

![View Page Source Image](/documentation/testing-imgs/test-html.webp)


I tested the following urls
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/feed
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/posts/create
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/bookmarks
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/posts/16
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/posts/16/edit
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/profiles/1
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/signup
- view-source:https://photofootprint-combined-63d886cb4a04.herokuapp.com/signin

### [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator) <a name="css-valid"></a>

#### All CSS in this project is valid

![CSS Valid](/documentation/testing-imgs/css-valid.webp)

#### I conducted this test by copying the contents of each css module into the [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator)

I tested the following files:

- Within the `styles` folder:
    - Asset.module.css
    - Avatar.modules.css
    - Button.module.css
    - Comment.module.css
    - CommentCreateEditForm.module.css
    - MoreDropdown.module.css
    - NavBar.module.css
    - NotFound.module.css
    - Post.module.css
    - PostCreateEditForm.module.css
    - PostsPage.module.css
    - Profile.module.css
    - ProfilePage.module.css
    - SignInUpForm.module.css
- App.module.css
- index.css

### [ESLint - Javascript Validation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) <a name="jsx-valid"></a>
All JSX and Javascript code is valid.

For All Javascript and JSX Code, I installed the ESLint extension provided by Microsoft into my IDE to validate and check all of my code during the development process. The link to the extension used is [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Lighthouse <a name="lighthouse"></a>

The scores for Google Dev Tools Lighthouse are as follows:
- Performance - 86
- Accessibility - 94
- Best Practices - 100
- SEO - 100

![Lighthouse](/documentation/testing-imgs/lighthouse.webp)

The performance score can vary depending on the speed of the API data delivery. The lowest score I received was 56, and the hightest was 90. Internet speeds can also affect this result, alongwith being in a window with many other tabs or in a window on its own. 86 was the most common result.

## Manual Testing <a name="fe-manual-testing"></a>
### Testing User Stories <a name="userstories"></a>

| Milestone |Title |Description	| Checked |
|---------|------|-------------|-------|
|Nav Bar Front-End|	User Story - Nav Bar 	|As a **user** I can **see the navbar consistently across all pages** so that **I can easily navigate around the site**	|✓|
|Nav Bar Front-End|	User Story - Page Routing	|As a **user** I can **quickly switch between content** so that **I can see content change without having to refresh the page**|	✓|
|Nav Bar Front-End|	User Story - Account Sign Up	|As a **user** I can **create an account** so that **I can join in the applications community and share my own posts/comments**	|✓|
|Nav Bar Front-End|	User Story - Account Sign In	|As a **user** I can **sign in** so that **use the full functionality of the application**	|✓|
|Nav Bar Front-End|	User Story - Account Logged In	|As a **user** I can **see my current logged in status** so that **log in or out if necessary**	|✓|
|Nav Bar Front-End|	User Story - Account - Refresh Tokens	|As a **user** I can **stay logged in until i click log out** so that **I can come back to the site with more ease**	|✓|
|Nav Bar Front-End|	User Story - Nav Bar Conditional Rendering|	As a **user** I can **see different navbar options depending if i’m logged in or not** so that **I can interact with the content or sign in/up if needed**|	✓|
|Nav Bar Front-End|	User Story - Profile Image	|As a **user** I can **set a profile image** so that **it's easy to differentiate between users**	|✓|
|Creating, Liking & Bookmarking Posts Front-End|	User Story - Create posts	| As a **logged in user** I can **create posts** so that **join in with the community**	|✓|
|Creating, Liking & Bookmarking Posts Front-End|	User Story - View a post|	As a **user** I can **click on a post to see a more detailed view of it** so that **learn more about it**|	✓|
|Creating, Liking & Bookmarking Posts Front-End|	User Story - Like a post|	As a **logged in user** I can **like a post** so that **show which posts interest me**	|✓|
|Creating, Liking & Bookmarking Posts Front-End|	User Story - Bookmark a post|	As a **logged in user** I can **bookmark a post** so that **save it to view later**|	✓|
|The Posts (& Feed) Page(s) Front-End|	User Story - View up to date posts|	As a **user** I can **see the most recent posts first** so that **I can check on the latest posts**	|✓|
|The Posts (& Feed) Page(s) Front-End|	User Story - Search Filtering	|As a **user**, I can **search through posts with a search bar**, so that **I can find specific posts**|	✓|
|The Posts (& Feed) Page(s) Front-End|	User Story - View bookmarked posts	|As a logged in **user** I can **see posts that I have booked** so that **I have an area for saved posts**	|✓|
|The Posts (& Feed) Page(s) Front-End|	User Story - View Followed user posts	|As a **logged in user** I can **see posts from users that I follow** so that **I can see their most recent posts easily**	|✓|
|The Posts (& Feed) Page(s) Front-End|	User Story - Infinite scroll	|As a **user** I can **scroll through images easily and simply** so that **the website doesn’t need unnecessary interaction**|	✓|
|The Post Page Front-End|	User Story - Post page|	As a **user** I can **view a post’s page** so that **read more about the post and comment on it**	|✓|
|The Post Page Front-End	|User Story - Edit/Delete post	|As a **post owner** I can **delete/edit the details of the post** so that **I can have control over my content**|	✓|
|The Post Page Front-End|	User Story - Create comments	|As a **logged in user** I can **comment on a post** so that **I can share my thoughts about the post**	|✓|
|The Post Page Front-End|	User Story - Comment timestamps|	As a **user** I can **see a timestamp on each comment** so that **I can see how recent each comment was**|	✓|
|The Post Page Front-End|	User Story - View comments|	As a **user** I can **read comments** so that **see what other users think**|	✓|
|The Post Page Front-End|	User Story - Delete comments	|As a **comment owner** I can **delete a comment** so that **I can control my comments on posts**	|✓|
|The Post Page Front-End|	User Story - Edit comments	|As a **comment owner** I can **edit my comment** so that **I can change it whenever I choose**|	✓|
|The Profile Page Front-End|	User Story - Profile page	|As a **user** I can **see other user profiles** so that **see who uses the app**	|✓|
|The Profile Page Front-End|	User Story - Most followed profiles|	As a **user** I can **see the most followed profiles** so that **I can see popular profiles**	|✓|
|The Profile Page Front-End|	User profile - stats	|As a **user** I can **see user specific statistic about: bio, number of posts, followers and following** so that **I can learn more about them**	|✓|
|The Profile Page Front-End|	User Story - Follow/Unfollow a user|	As a **logged in user** I can **follow/unfollow other users** so that **change my own content feed and keep up to date with the content I want**	|✓|
|The Profile Page Front-End|	User Story - See all posts by specific profile|	As a **user** I can **see all posts created by specific profile** so that **interact with their content and/or follow/unfollow them**	|✓|
|The Profile Page Front-End|	User Story - Edit profile	|As a **logged in user** I can **edit my own profile** so that **I can change my data when I choose to**	|✓|
|The Profile Page Front-End|	User Story - Update username and password	|As a **logged in user** I can **update my login details** so that **keep my data secure and in my own control**	|✓|
|The Profile Page Front-End|	User Story - Contact Us	|As a **user** I can **see a contact us button** so that **interact directly with the app team to ask any questions or share views**|	✓|

### Testing Forms <a name="forms"></a>

 ### Authorisation Forms - I tested the forms validation for correct login details, password matching, if a user already exists and for weak passwords. ✓ test passed
  - ![Sign In Form Validation](/documentation/testing-imgs/test-signin.webp)
  - ![Sign Up Form Validation](/documentation/testing-imgs/test-signup.webp)
  - ![Sign Up Form Validation](/documentation/testing-imgs/test-signup-2.webp)
  - ![Sign Up Form Validation](/documentation/testing-imgs/test-signup-3.webp)

### Contact Form - I tested to see if we could send the form without any fields being filled and if the email field wasn't entered correctly. ✓ test passed
  - ![Contact Us Form](/documentation/testing-imgs/test-contact.webp)
  - ![Contact Us Form](/documentation/testing-imgs/test-contact-email.webp)

### Refresh Tokens - I checked to see whether the Authorisation Refresh Token is being stored in local storage. ✓ test passed
  - ![Refresh Tokens](/documentation/testing-imgs/test-refresh.webp)

### Create Post Form - I tested the fields required fields to be populated and if an image is over 2MB. ✓ test passed
  - ![Create Post](/documentation/testing-imgs/test-create-post.webp)

### Page Not Found operating as intended. ✓ test passed
  - ![Page Not Found](/documentation/testing-imgs/test-pagenotfound.webp)

### Edge Case Tests <a name="edge-cases"></a>
|Description| Expected Result | Confirmation of Expected Result |
|-----------|---------|---------|
|Logged in user enters URL to edit post not of there ownership | Redirect the user back to the homepage | ✓ test passed|
|Logged out user enters URL of '/posts/create' to create a new post |Redirect the user back to the homepage |✓ test passed|
|User button mashs (repeatedly presses fast) the post button on comment | The button is disabled after the first press and only one comment is posted | ✓ test passed|
|User button mashs (repeatedly presses fast) the post button on create post | The button is disabled after the first press and only one post is created | ✓ test passed|

## Bugs <a name="fe-bugs"></a>
#### There are no known bugs in the frontend application of this project. All bugs have been fixed and noted in the below section.

- **Problem 1**: Error occuring in the console on the create and edit form pages
  - ![Console Error](/documentation/testing-imgs/bug-form-id.webp)
  - ***Fix 1***: Remove the Bootstrap `controlId` prop from the bootstrap `<Form.Group>` component boilerplate code used for the Travel dropdown options section of the form.
```Javascript 
  <Form.Group>
        <Form.Label>Travel Type</Form.Label>
        <Form.Control
          as="select"
          name="travel"
          value={travel}
          onChange={handleChange}
        >
          <option value="bicycle">Bicycle</option>
          <option value="boat">Boat</option>
          <option value="foot">By Foot</option>
          <option value="car">Combustion Engine Car</option>
          <option value="electric">Electric Car</option>
          <option value="multiple">Multiple</option>
          <option value="other">Other</option>
          <option value="plane">Plane</option>
          <option value="train">Train</option>
        </Form.Control>
  </Form.Group>
```

- **Problem 2**: Infinite Scroll not operating as expected
  - ![InfiniteScroll](/documentation/testing-imgs/bug-cors-infinitescroll.webp)
  - ***Fix 2***: Correct typo in the CLIENT_ORIGIN env.py file - from `https://` to `http://`

- **Problem 3**:  If you repeatedly click very fast on the post button during comment post submission, the comment is posted multiple times.
  - ![Comment Repeat](/documentation/testing-imgs/bug-comment-repeat.webp)
  - ***Fix 3***: Add a `disabled` prop to the button, assign `disabled` to a state of `sending`, which in turn is switched from `false` to `true` throughout the `handleSubmit` function's operation. This solution was also applied to the Create Post, Edit Post, Edit Comment, Contact Us Modal, Profile Edit, Username Edit, Password Edit, Sign In and Sign Up pages/components too. On the Follow buttons through the ProfileDataContext page I applied the same logic but used `[submitting, setSubmitting]` as its variable, to stop any potential conflicts further down the DOM tree with other buttons that appear on the same page e.g. comment's `post` button. 
```JSX
function CommentCreateForm(props) {
...
const [sending, setSending] = useState(false);
...
const handleSubmit = async (event) => {
    setSending(true);
    ...
    try { 
        ...
     } catch (err) {
        ...
    }
    setSending(false);
  };

...
 return (
    ...
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim() || sending}
        type="submit"
      >
... )
}
```

- **Problem 4**: Contact Us Modal not closing on the 'cancel' or the 'x' buttons, as demonstrated in the [Bootstrap documentation](https://react-bootstrap-v4.netlify.app/components/modal/).
  - ***Fix 4***: Add this section of code found on [this thread](https://github.com/react-bootstrap/react-bootstrap/issues/3480) - `<div onClick={e => e.stopPropagation()}></div>`

- **Problem 5**:  If you repeatedly click very fast on the like or bookmark icons, 404 errors can occur in the console due to the frontend sending multiple post requests to the API before the first initial post has been processed by the API.
  - ***Fix 5***: Add a sending logic, similar to Fix #3 but using a ternary phrase instead of a disabled attribute. This means that the button doesn't send any more post requests until API has finished processing the first.

## Responsiveness <a name="responsive"></a>
This application is responsive to screens from small (iPhone SE) to large screens (Desktop Screens)

### iPhone SE Screenshots
- ![iPhone SE Responsive](/documentation/testing-imgs/responsive-se.webp)
- ![iPhone SE Responsive 2](/documentation/testing-imgs/responsive-se-2.webp)
- ![iPhone SE Responsive 3](/documentation/testing-imgs/responsive-se-3.webp)
- ![iPhone SE Responsive 4](/documentation/testing-imgs/responsive-se-4.webp)
- ![iPhone SE Responsive 5](/documentation/testing-imgs/responsive-se-5.webp)

### iPad Air Screenshots
- ![iPad Air Responsive](/documentation/testing-imgs/responsive-ipad.webp)
- ![iPad Air Responsive 2](/documentation/testing-imgs/responsive-ipad-2.webp)
- ![iPad Air Responsive 3](/documentation/testing-imgs/responsive-ipad-3.webp)
- ![iPad Air Responsive 4](/documentation/testing-imgs/responsive-ipad-4.webp)

### Desktop Large Screenshots
- ![Desktop Responsive](/documentation/testing-imgs/responsive-desktop.webp)
- ![Desktop Responsive 2](/documentation/testing-imgs/responsive-desktop-2.webp)
- ![Desktop Responsive 3](/documentation/testing-imgs/responsive-desktop-3.webp)

# Backend Testing <a name="backend"></a>


## Validation <a name="be-valid"></a>

### Python - Flake8 <a name="py-valid"></a>

All python code is valid.

For all python Code, I installed the Flake8 extension provided by Microsoft into my IDE to validate and check all of my code during the development process. The link to the extension used is [here](https://marketplace.visualstudio.com/items?itemName=ms-python.flake8)
## Manual Testing <a name="be-manual"></a>

### Testing tasks from GitHub Project <a name="be-tasks"></a>

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
|Posts API App	|Users can **delete** their own posts	|✓|
|Posts API App	|Users can't **delete** other user posts|	✓|

### Admin Panel Tests <a name="be-admin"></a>

| Milestone | Description	| Checked |
|---------|-------------|-------|
|Admin API |	Only admin's can log in to the admin panel |✓|

  - ![Test Admin Auth](/documentation/testing-imgs/test-admin-auth.webp)

| Milestone | Description	| Checked |
|---------|-------------|-------|
|Admin API |	Admin's can **create** comments, posts and messages (contact us) through the admin panel|✓|

  - ![Test Create Post](/documentation/testing-imgs/test-admin-3.webp)
- If the admin doesn't enter the fields correctly, then these alerts will show - 
  - ![Test Create Post Error Messages](/documentation/testing-imgs/test-admin-2.webp)

| Milestone | Description	| Checked |
|---------|-------------|-------|
|Admin API |	Admin's can **delete** comments, posts and messages (contact us) through the admin panel|✓|
  - ![Test Delete Post](/documentation/testing-imgs/test-admin-4.webp)

| Milestone | Description	| Checked |
|---------|-------------|-------|
|Admin API |	Admin's can **update** posts through the admin panel|✓|
  -![Test Admin Update Post](/documentation/testing-imgs/test-admin-update.webp)

## Automated Testing <a name="be-auto"></a>

The automated tests run on the backend API were done under the guidance and instruction from the CodeInstitute drf-api walkthrough learning materials, so I credit code institute for their brilliant support in learning how to conduct automated tests.
After manually testing the API during development, I wanted to conduct automated tests after deployment, to practice and develop further my knowledge of this. However after writing the first test for the Comment's model and running it, an error appeared because I had changed the Database system from postgres (default) to a cloud based database. At this point I chose not to alter the settings in my API settings.py file and to share the code written however state that this is only practice code and not tested. A copy of the error message is below this paragraph. In future I would edit the settings.py configuration to allow automated tests to happen, however, due to the time remaining on this project, it was not possible.

![Automated Testing Error](/documentation/testing-imgs/automated-testing.webp)<a name="testing-error"></a>

### Posts App - all tests passing. <a name="auto-pass"></a>

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

### Comments App Automated Testing <a name="auto-comments"></a>
As stated in the initial introduction, the testing code for the Comments model was not completed due to the database being cloud based and not local as the testing application expected. I carried out manual tests on these instead, however kept this code included to reference that this will be built upon in future development of the project. (see error picture [above](#testing-error))
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

## Bugs <a name="be-bugs"></a>
There was only one minor bug in the backend API which is mentioned below. Beyond this bug there are no known bugs in the API.

- **Problem**: The filter names not displaying on the api view - this is only visible when debug = True in development mode and does not cause any problems with the functioning of the API
  - ![Known Django Filter Bug](/documentation/testing-imgs/bug-known-djangofilter.webp)
  - ***Fix***: None, this is a known Django REST Framework bug and does not need any additional fix. To help understand which field is which, I commented in the code to give reference.
