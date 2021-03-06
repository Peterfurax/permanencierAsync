import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Reboot from "material-ui/Reboot";
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from "../actions";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import SimpleAppBar from "../components/BarApp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Permanence from "../components/vueFi";
class App extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  render() {
    const Home = () => (
      <div>
        {isEmpty ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Permanence posts={posts} />
          </div>
        )}
      </div>
    );

    const Editor = () => (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={["listePerma", "json"]}
        />
        {isEmpty ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
        <p>
          {lastUpdated && (
            <span>
              Derniere mise a jour le  {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
      </div>
    );
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <SimpleAppBar />
        <Router>
          <div>
            <Link to="/">clt</Link> <Link to="/edit">edit</Link>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Editor} />
          </div>
        </Router>
        <Reboot />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
