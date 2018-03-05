import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Button from "material-ui/Button";
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
  const bull = <span className={classes.bullet}>•</span>;
  console.log(posts);
  return (
    <div>
      <p>
        <Paper>
          <Card className={classes.card}>
            <CardHeader title="Parution" subheader={posts[0].datePar} />
            <CardContent>
              <div>
                <Paper>
                  <Card className={classes.card}>
                    <CardHeader title="Permanencier(e.s)" subheader="Les" />
                    <CardContent>
                      <Typography variant="headline" component="h2">
                        {posts[0].perma}
                        <a href="tel:5555555555">Call Us</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </div>
              <p><Divider /></p>
              <div>
                <Paper>
                  <Card className={classes.card}>
                    <CardHeader title="Permanencier(e.s)" subheader="Les" />
                    <CardContent>
                      <Typography variant="headline" component="h2">
                        {posts[0].perma}
                        <a href="tel:5555555555">Call Us</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </div>
            </CardContent>
          </Card>
        </Paper>
      </p>
      <p>
        <Divider />
      </p>
      <p>
        <Paper>
          <Card className={classes.card}>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography className={classes.title}>
                Permanencier(e.s)
              </Typography>
              <Typography variant="headline" component="h2">
                {posts[0].perma}
                <a href="tel:5555555555">Call Us</a>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </p>
      <p>
        <Divider />
      </p>{" "}
      <p>
        <Paper>
          <Card className={classes.card}>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography className={classes.title}>
                Permanencier(e.s)
              </Typography>
              <Typography variant="headline" component="h2">
                {posts[0].perma}
                <a href="tel:5555555555">Call Us</a>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </p>
      <p>
        <Divider />
      </p>{" "}
      <p>
        <Paper>
          <Card className={classes.card}>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography className={classes.title}>
                Permanencier(e.s)
              </Typography>
              <Typography variant="headline" component="h2">
                {posts[0].perma}
                <a href="tel:5555555555">Call Us</a>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </p>
      <p>
        <Divider />
      </p>
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              {posts[0].datePar}
            </Typography>
            <Typography variant="headline" component="h2">
              {posts[0].perma}
            </Typography>
            <Typography className={classes.pos}>
              {posts[0].redacChefWeb}
            </Typography>
            <Typography component="p">
              {posts[0].redacChefWeb}
              <br />
              {posts[0].general}
              <br />
              {posts[0].urgence}
              <br />
              {posts[0].informatique}
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
