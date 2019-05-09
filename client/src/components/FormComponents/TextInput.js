import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextInput = ({
  fieldName,
  onChange,
  value = "",
  label,
  type = "text",
  ...rest
}) => (
  <TextField
    className="field"
    required
    id={fieldName}
    name={fieldName}
    type={type}
    label={label ? label : fieldName}
    variant="outlined"
    // value={value}
    // onChange={e => onChange(e.target.value)}
    {...rest}
  />
);
