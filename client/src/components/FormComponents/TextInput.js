import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextInput = ({
  fieldName,
  onChange,
  value = "",
  type = "text",
  ...rest
}) => (
  <TextField
    className="field"
    required
    id={fieldName}
    name={fieldName}
    type={type}
    label={fieldName.toUpperCase()}
    variant="outlined"
    // value={value}
    onChange={e => onChange(e.target.value)}
    {...rest}
  />
);
