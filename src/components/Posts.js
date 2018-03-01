import React from 'react'
import PropTypes from 'prop-types'
import MultiSelect from './multiselect'

const Posts = ({posts}) => (
  <ul>
      <MultiSelect posts={posts}></MultiSelect>
      <li >{posts.length}</li>
    
    {posts.map((post, i) =>
      <li key={i}>{post.nomLong}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
