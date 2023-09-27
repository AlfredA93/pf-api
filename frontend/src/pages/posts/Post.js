import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

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

  //   let updatedTravel;
  //     if (travel === 'bicycle'){
  //         updatedTravel = 'Bicycle'
  //     } else if (travel === 'boat'){
  //         updatedTravel = 'Boat'
  //     } else if (travel === 'foot'){
  //         updatedTravel = 'By Foot'
  //     } else if (travel === 'car'){
  //         updatedTravel = 'Combustion Engine Car'
  //     } else if (travel === 'electric'){
  //         updatedTravel = 'Electric Car'
  //     } else if (travel === 'multiple'){
  //         updatedTravel = 'Multiple'
  //     } else if (travel === 'other'){
  //         updatedTravel = 'Other'
  //     } else if (travel === 'plane'){
  //         updatedTravel = 'Plane'
  //     } else if (travel === 'train'){
  //         updatedTravel = 'Train'
  //     }

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {travel && (
          <Card.Title className="text-center">Travel Type: {travel}</Card.Title>
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
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : bookmark_id ? (
            <span onClick={"handleUnbookmark"}>
              <i className={`fas fa-bookmark ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={"handleBookmark"}>
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
