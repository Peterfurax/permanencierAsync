/* eslint-disable react/prop-types */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Input from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import ArrowDropDownIcon from "material-ui-icons/ArrowDropDown";
import CancelIcon from "material-ui-icons/Cancel";
import ArrowDropUpIcon from "material-ui-icons/ArrowDropUp";
import ClearIcon from "material-ui-icons/Clear";
import Chip from "material-ui/Chip";
import Select from "react-select";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
// import Autors from './auteurs_internes'
import "react-select/dist/react-select.css";
// import Autors from './auteurs_internes.json'

class Option extends Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

function SelectWrapped(props) {
  const { classes, ...other } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{"No results found"}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => {
        const { value, children, onRemove } = valueProps;

        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }
        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  // We had to use a lot of global selectors in order to style react-select.
  // We are waiting on https://github.com/JedWatson/react-select/issues/1679
  // to provide a better implementation.
  // Also, we had to reset the default style injected by the library.
  "@global": {
    ".Select-control": {
      display: "flex",
      alignItems: "center",
      border: 0,
      height: "auto",
      background: "transparent",
      "&:hover": {
        boxShadow: "none"
      }
    },
    ".Select-multi-value-wrapper": {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    ".Select--multi .Select-input": {
      margin: 0
    },
    ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value": {
      padding: 0
    },
    ".Select-noresults": {
      padding: theme.spacing.unit * 2
    },
    ".Select-input": {
      display: "inline-flex !important",
      padding: 0,
      height: "auto"
    },
    ".Select-input input": {
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "default",
      display: "inline-block",
      fontFamily: "inherit",
      fontSize: "inherit",
      margin: 0,
      outline: 0
    },
    ".Select-placeholder, .Select--single .Select-value": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0
    },
    ".Select-placeholder": {
      opacity: 0.42,
      color: theme.palette.common.black
    },
    ".Select-menu-outer": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: "absolute",
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: "100%",
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5
    },
    ".Select.is-focused:not(.is-open) > .Select-control": {
      boxShadow: "none"
    },
    ".Select-menu": {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: "auto"
    },
    ".Select-menu div": {
      boxSizing: "content-box"
    },
    ".Select-arrow-zone, .Select-clear-zone": {
      color: theme.palette.action.active,
      cursor: "pointer",
      height: 21,
      width: 21,
      zIndex: 1
    },
    // Only for screen readers. We can't use display none.
    ".Select-aria-only": {
      position: "absolute",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      height: 1,
      width: 1,
      margin: -1
    }
  }
});

class IntegrationReactSelect extends React.Component {
  state = {
    datePar: null,
    perma: null,
    redacChefWeb: null,
    general: null,
    urgence: null,
    informatique: null,
    permanenciers: null
  };

  handleChangeDatePar = datePar => event => {
    console.log(datePar);
    this.setState({
      datePar: event.target.value
    });
  };

  handleChangePerma = perma => {
    this.setState({
      perma
    });
  };

  handleChangeRedacChefWeb = RCW => event => {
    this.setState({
      redacChefWeb: event.target.value
    });
  };
  handleChangeGeneral = General => event => {
    this.setState({
      general: event.target.value
    });
  };
  handleChangeUrgence = urgence => event => {
    this.setState({
      urgence: event.target.value
    });
  };
  handleChangeInformatique = informatique => event => {
    this.setState({
      informatique: event.target.value
    });
  };

  render() {
    console.log(this.props);
    const permanenciers = this.props.posts[1].map(permanencier => ({
      value: permanencier.nomCourt,
      label:
        permanencier.nomLong +
        " - " +
        permanencier.portable +
        " - " +
        permanencier.fixe
    }));

    // console.log(permanenciers);

    const { classes } = this.props;
    const {
      datePar,
      perma,
      redacChefWeb,
      general,
      urgence,
      informatique
    } = this.state;
    console.log(this.state);
    // let info1 = "vide"
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            {/* date parution */}
            <Typography>Parution</Typography>
            <TextField
              id="date"
              type="date"
              defaultValue={this.props.posts[0].datePar}
              className={classes.textField}
              onChange={this.handleChangeDatePar()}
              InputLabelProps={{
                shrink: true
              }}
            />
            <p> </p>
            {/* permanencier */}
            <Typography>Permanencier(e.s)</Typography>
            <Input
              fullWidth
              inputComponent={SelectWrapped}
              inputProps={{
                classes,
                value: perma,
                multi: true,
                onChange: this.handleChangePerma,
                placeholder: "Saisie permanencier",
                instanceId: "react-select-chip",
                id: "react-select-chip",
                name: "react-select-chip",
                simpleValue: true,
                options: permanenciers
              }}
            />
            <p />
            {/* RedacChefWeb */}
            <TextField
              id="full-width"
              label="RC web matin :"
              defaultValue={this.props.posts[0].redacChefWeb}
              helperText="Redaction en chef Web du matin"
              fullWidth
              margin="normal"
              onChange={this.handleChangeRedacChefWeb()}
            />
            {/* General */}
            <TextField
              id="full-width"
              label="Générale"
              defaultValue={this.props.posts[0].general}
              helperText="Générale"
              fullWidth
              margin="normal"
              onChange={this.handleChangeGeneral()}
            />
            {/* Urgence */}
            <TextField
              id="full-width"
              label="Urgence"
              defaultValue={this.props.posts[0].urgence}
              helperText="Urgence"
              fullWidth
              margin="normal"
              onChange={this.handleChangeUrgence()}
            />
            {/* Informatique */}
            <TextField
              id="full-width"
              label="Informatique"
              defaultValue={this.props.posts[0].informatique}
              helperText="Urgence"
              fullWidth
              margin="normal"
              onChange={this.handleChangeInformatique()}
            />
          </CardContent>
          <CardActions>
            {/* push to api button */}
            <Button
              variant="raised"
              color="primary"
              fullWidth={true}
              href={
                "http://localhost:4001" +
                "/datePar/" +
                datePar +
                "/perma/" +
                perma +
                "/general/" +
                general +
                "/redacChefWeb/" +
                redacChefWeb +
                "/urgence/" +
                urgence +
                "/informatique/" +
                informatique
              }
            >
              push to api
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationReactSelect);
