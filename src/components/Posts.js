import React from "react";
import PropTypes from "prop-types";
import MultiSelect from "./multiselect";

const Posts = ({ posts }) => <MultiSelect posts={posts} />;

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
