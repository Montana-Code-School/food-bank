import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

class MealPlan extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                yum
              </Avatar>
            }
            action={
              <IconButton>
              </IconButton>
            }
            title={this.props.title}
          />
          <CardMedia
            className={classes.media}
            image={this.props.imageUrl}
          />
          <CardContent>
            <Typography component="p">
              //not paella stuff
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.props.expanded,
              })}
              onClick={() => {this.props.handleExpandClick(this.props.index)}}
              aria-expanded={this.props.expanded}
              aria-label="Show more"
            >
            <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Ingredients:
              </Typography>
              <Typography paragraph>
              {this.props.ingredients}
              </Typography>
              <Typography paragraph>
                Directions:
              </Typography>
              <Typography paragraph>
                View on --put blog name here
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

      MealPlan.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      const styles = theme => ({
        card: {
          maxWidth: 400,
        },
        media: {
          height: 0,
          paddingTop: '56.25%',
        },
        actions: {
          display: 'flex',
        },
        expand: {
          transform: 'rotate(0deg)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
          marginLeft: 'auto',
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      });

  export default withStyles(styles)(MealPlan);
