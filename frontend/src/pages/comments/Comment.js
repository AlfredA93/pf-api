import React from "react";
import styles from "../../styles/Comment.module.css";
import { Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

  return (
    <div>
      <hr />
      <Media>
      <Link to={`/profiles/${profile_id}`}>
        <Avatar src={profile_image} height={50} />
      </Link>
      <Media.Body className="align-self-center ml-2">
        <Link to={`/profiles/${profile_id}`}>
          <span className={styles.Owner}>{owner}</span>
        </Link>
        <span className={styles.Date}>{updated_at}</span>
        <p>{content}</p>
      </Media.Body>
      {is_owner && (<MoreDropdown handleEdit={""} handleDelete={""}/>)}
      </Media>
    </div>
  );
};

export default Comment;
