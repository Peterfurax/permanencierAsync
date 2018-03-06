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
            <Paper>
              <Card className={classes.card}>
                <CardHeader title="Permanencier(e.s)"/>
                <CardContent>
                  {post.perma.map((perm, i) => (
                    <span>
                      <Divider />
                      {perm.permaObj.nomLong}
                      <br />
                      <a href={`tel:${perm.permaObj.fixe}`}>
                        Fixe : {perm.permaObj.fixe}
                      </a>
                      <br />
                      <a href={`tel:${perm.permaObj.portable}`}>
                        Portable : {perm.permaObj.portable}
                      </a>
                      <Divider />
                    </span>
                  ))}
                </CardContent>
              </Card>
            </Paper>
          </CardContent>
        </Card>
      </Paper>
      <Divider />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
            Redaction en chef Web du matin
            </Typography>
            <Typography component="p">
              {post.redacChefWeb}
             </Typography>
          </CardContent>
        </Card>
      </div>
      <Divider />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
            Informations générales
            </Typography>
            <Typography component="p">
            {post.general}
             </Typography>
          </CardContent>
        </Card>
      </div>
      <Divider />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
            Urgences Web
            </Typography>
            <Typography component="p">
            {post.urgence}
             </Typography>
          </CardContent>
        </Card>
      </div>
      <Divider />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
            Informatique
            </Typography>
            <Typography component="p">
            {post.informatique}
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
