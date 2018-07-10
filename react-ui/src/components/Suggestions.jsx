import React from 'react';
import { Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Suggestions extends React.Component {
  render() {
    return (
    <div>
        <Card className="container" align="center">
          <CardTitle title="Suggestions" subtitle="We would love to hear any feedback that you have for our organization!" />
          <div >
            <TextField
              name="comments"
              multiLine={true}
              rows={8}
              rowsMax={15}
              style={styles.textFieldContainer}
            />
          </div>
          <div>
            <RaisedButton style = {styles.button} type="submit" label="Submit" primary />
          </div>
      </Card>
    </div>
    )
  }
};

export default Suggestions;

const styles = {
  textFieldContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    margin: 10
  }
}
