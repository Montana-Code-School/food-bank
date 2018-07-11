import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  userFormObj,
  toggleAuthenticateStatus
}) => (
  <Card className="container" align="center">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={userFormObj.email}
          autoComplete="email"
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={userFormObj.password}
          autoComplete="current-password"
        />
      </div>
      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>
      <CardText>Don't have an account? <Link to={'/'}>Create one</Link>.</CardText>
    </form>
  </Card>
);


export default LoginForm;
