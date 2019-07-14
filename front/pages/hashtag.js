import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";

const Hashtag = ({ tag }) => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);

  console.log("tag", tag);

  useEffect(() => {
    dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: tag
    });
  }, []);
  console.log("mainPosts", mainPosts);
  return (
    <div>
      {mainPosts.map(c => (
        <PostCard key={+c.createdAt} post={c} />
      ))}
    </div>
  );
};

//getInitialProps  Next 꺼임. 완전 최초 실행됨 componentDidMount 보다 더 먼저 실행 됨.
Hashtag.propTypes = {
  tag: PropTypes.string.isRequired
};

Hashtag.getInitialProps = async context => {
  console.log("hashtag getInitialProps", context.query.tag);
  return { tag: context.query.tag };
};

// Hashtag.getInitialProps = async (context) => {
//   console.log('hashtag getInitialProps', context.query.tag);
//   return { tag: context.query.tag };
// };

export default Hashtag;
