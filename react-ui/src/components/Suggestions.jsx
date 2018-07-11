import React from 'react';
import { Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SuggestionAlert from './SuggestionAlert.jsx'
import Auth from '../modules/Auth';

class Suggestions extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        suggestion: '',
        open: false,
      }
    this.onChange = this.onChange.bind(this);
    this.suggestionCall = this.suggestionCall.bind(this);
    this.suggestionReset = this.suggestionReset.bind(this);
  }

  onChange(event) {
    this.setState({suggestion: event.target.value})
  }

  suggestionCall() {
    fetch('/api/suggestion', {
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json',
         Authorization:
          `bearer ${Auth.getToken()}`
       },
       body:JSON.stringify({suggestion: this.state.suggestion})
     })
     .then ( res   => res.json())
     .then ( data  => console.log(data))
  }

  suggestionReset() {
    this.setState({suggestion: ''})
  }

  render() {
    return (
    <div>
      <Card
        className="container"
        align="center"
      >
        <CardTitle
          title="Suggestions"
          subtitle={`We would love to hear any` +
                    ` feedback that you have for our organization!`}
        />
        <div
          style = {styles.suggContainer}
        >
          <TextField
            name="comments"
            multiLine={true}
            rows={8}
            rowsMax={15}
            style={styles.textFieldContainer}
            onChange = {this.onChange}
            value = {this.state.suggestion}
          />
        </div>
        <div>
          <SuggestionAlert
            suggestionCall = {this.suggestionCall}
            suggestionReset = {this.suggestionReset}
          />
        </div>
      </Card>
    </div>
    )
  }
};

export default Suggestions;

const styles = {
  button: {
    margin: 10
  },
  suggContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    height: 220,
    width: 400
  },
}
