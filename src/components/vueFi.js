import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardHeader } from "material-ui/Card";
// import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  }
});

function PermanenceCard(props) {
  console.log(props.posts);
  const { classes, posts } = props;
  const post = posts[0];
  console.log(posts);
  return (
    <div>
      <Paper>
        <Card className={classes.card}>
          <CardHeader title="Parution" subheader={post.datePar} />
          <CardContent>
            <div>
              <Paper>
                <Card className={classes.card}>
                  <CardHeader title="Permanencier(e.s)" subheader="Les" />
                  <CardContent>
                    <Typography variant="headline" component="h2">
                      {post.perma}
                      <a href="tel:5555555555">Call Us</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </div>
            <div>
              <Paper>
                <Card className={classes.card}>
                  <CardHeader title="Permanencier(e.s)" subheader="Les" />
                  <CardContent>
                    <Typography variant="headline" component="h2">
                      {post.perma}
                      <a href="tel:5555555555">Call Us</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </div>
          </CardContent>
        </Card>
      </Paper>
      <Divider />
      <Paper>
        <Card className={classes.card}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography className={classes.title}>Permanencier(e.s)</Typography>
            <Typography variant="headline" component="h2">
              {post.perma}
              <a href="tel:5555555555">Call Us</a>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      <Divider />
      <Paper>
        <Card className={classes.card}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography className={classes.title}>Permanencier(e.s)</Typography>
            <Typography variant="headline" component="h2">
              {post.perma}
              <a href="tel:5555555555">Call Us</a>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      <Divider />
      <Paper>
        <Card className={classes.card}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography className={classes.title}>Permanencier(e.s)</Typography>
            <Typography variant="headline" component="h2">
              {post.perma}
              <a href="tel:5555555555">Call Us</a>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
      <Divider />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>{post.datePar}</Typography>
            <Typography variant="headline" component="h2">
              {post.perma}
            </Typography>
            <Typography className={classes.pos}>{post.redacChefWeb}</Typography>
            <Typography component="p">
              {post.redacChefWeb}
              <br />
              {post.general}
              <br />
              {post.urgence}
              <br />
              {post.informatique}
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

PermanenceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanenceCard);
