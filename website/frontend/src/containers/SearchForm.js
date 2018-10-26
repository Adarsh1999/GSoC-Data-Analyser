import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SearchForm extends Component {
  state = {
    query: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="Search Your Organisation"
          style={{ margin: 0 }}
          placeholder="Enter Organisation Name"
          fullWidth
          variant="outlined"
          onChange={this.handleChange("query")}
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Search
        </Button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchForm);
