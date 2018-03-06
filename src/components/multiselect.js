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
// import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
// import Autors from './auteurs_internes'
import "react-select/dist/react-select.css";
// import Autors from './auteurs_internes.json'
import ButtonPost from "../components/ButtonPost";
import styles from "./MultiSelectStyle";


class Option extends Component {
  handleClick = event => {
    console.log('handleClick', this.props.option)
    console.log('handleClick', event)
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
  console.log("SelectWrapped props", props.value)
  // this.props.value = "1sr"
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
        console.log("valueComponent valueProps", value)
        console.log("valueComponent value", value)
        console.log("valueComponent children", children)
        // console.log("valueComponent", value)

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

class IntegrationReactSelect extends React.Component {

  state = {
    datePar: null,
    perma: null,
    redacChefWeb: null,
    general: null,
    urgence: null,
    informatique: null
  };


  handleChangeDatePar = datePar => event => {
    this.setState({
      datePar: event.target.value
    });
  };

  handleChangePerma = perma => {
    console.log("handleChangePerma", perma)
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
    console.log("PROPS", this.props);
    const permanenciers = this.props.posts[1].map(permanencier => ({
      permaObj: permanencier,
      // T OUCHE ICI+
      // value: permanencier.nomCourt,
      value: permanencier.nomCourt,
      label:
        permanencier.nomLong +
        " - " +
        permanencier.portable +
        " - " +
        permanencier.fixe
    }));

    // console.log(permanenciers);

    const { classes, posts } = this.props;
    console.log("posts", posts);
    const {
      datePar,
      perma,
      redacChefWeb,
      general,
      urgence,
      informatique
    } = this.state;
    // console.log(this.state);
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
              defaultValue={posts[0].datePar}
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
                simpleValue: false,
                options: permanenciers
              }}
            />
            <p />
            {/* RedacChefWeb */}
            <TextField
              id="full-width"
              label="RC web matin :"
              defaultValue={posts[0].redacChefWeb}
              helperText="Redaction en chef Web du matin"
              fullWidth
              margin="normal"
              onChange={this.handleChangeRedacChefWeb()}
            />
            {/* General */}
            <TextField
              id="full-width"
              label="Générale"
              defaultValue={posts[0].general}
              helperText="Générale"
              fullWidth
              margin="normal"
              onChange={this.handleChangeGeneral()}
            />
            {/* Urgence */}
            <TextField
              id="full-width"
              label="Urgence"
              defaultValue={posts[0].urgence}
              helperText="Urgence"
              fullWidth
              margin="normal"
              onChange={this.handleChangeUrgence()}
            />
            {/* Informatique */}
            <TextField
              id="full-width"
              label="Informatique"
              defaultValue={posts[0].informatique}
              helperText="Urgence"
              fullWidth
              margin="normal"
              onChange={this.handleChangeInformatique()}
            />
          </CardContent>
          <CardActions>
            {/* push to api button */}

            <ButtonPost val={this.state} />
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
