import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    comments_count,
    content,
    id,
    image,
    like_id,
    likes_count,
    owner,
    bookmark_id,
    profile_id,
    profile_image,
    summary,
    title,
    travel,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // const [isPost, setIsPost] = useState(false);

  //   const {pathname} = useLocation()

  //   useEffect((id) => {
  //     if ({id} in pathname){
  //     setIsPost(true);
  //   }}, [pathname])

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/api/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/api/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/api/likes/${like_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleBookmark = async () => {
    try {
      const { data } = await axiosRes.post("/api/bookmarks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id ? { ...post, bookmark_id: data.id } : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnbookmark = async () => {
    try {
      await axiosRes.delete(`/api/bookmarks/${bookmark_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id ? { ...post, bookmark_id: null } : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const travelCategory = {
    bicycle: "Bicycle",
    boat: "Boat",
    foot: "By Foot",
    car: "Combustion Engine Car",
    electric: "Electric Car",
    multiple: "Multiple",
    other: "Other",
    plane: "Plane",
    train: "Train",
  };

  const travelIcons = {
    bicycle: <i className="fa-solid fa-person-biking" />,
    boat: <i className="fa-solid fa-sailboat" />,
    foot: <i className="fa-solid fa-shoe-prints" />,
    car: <i className="fa-solid fa-car-side" />,
    electric: <i className="fa-solid fa-bolt" />,
    multiple: <i className="fa-solid fa-truck-plane" />,
    other: <i className="fa-brands fa-fly" />,
    plane: <i className="fa-solid fa-plane-departure" />,
    train: <i className="fa-solid fa-train-subway" />,
  };

  const travelIcon = travelIcons[travel];
  const updatedTravel = travelCategory[travel];

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {travel && (
          <Card.Title className="text-center">
            Travel Type: {updatedTravel} {travelIcon}
          </Card.Title>
        )}
        {summary && <Card.Text className="text-center">{summary}</Card.Text>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like you're own post...</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like a post...</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {/* Comments Icon */}
          <Link to={`/posts/${id}`}>
            <i className="fa-solid fa-comments" />
          </Link>
          {comments_count}
          {/* Bookmark Icon */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't bookmark you're own post...</Tooltip>}
            >
              <i className="far fa-bookmark" />
            </OverlayTrigger>
          ) : bookmark_id ? (
            <span onClick={handleUnbookmark}>
              <i className={`fas fa-bookmark ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleBookmark}>
              <i className={`far fa-bookmark ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to bookmark a post...</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
