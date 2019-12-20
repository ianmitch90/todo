import React from "react";
import { Formik, Field } from "formik";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const TextInputWrapped = props => {
  return <Field {...props} as={TextField} />;
};

TextInputWrapped.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInputWrapped;
