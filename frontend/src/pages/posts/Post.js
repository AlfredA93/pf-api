import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
  const {
    comments_count,
    content,
    id,
    image,
    like_id,
    likes_count,
    owner,
    profile_id,
    profile_image,
    summary,
    title,
    travel,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
        {travel && <Card.Title className="text-center">Travel Type: {travel}</Card.Title>}
        {summary && <Card.Text className="text-center">{summary}</Card.Text>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Post;
