import React from 'react';
import Auth from '../modules/Auth';
import MealPlan from '../components/MealPlan.jsx';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class MealPlanPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      plans: [],
      recipeId: ''
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.findRecipe = this.findRecipe.bind(this);
    this.storeSearchTerm = this.storeSearchTerm.bind(this);
  }

  handleExpandClick (index) {
    let currentPlans = this.state.plans;
    currentPlans[index].expanded = !currentPlans[index].expanded
    this.setState({ plans: currentPlans });
  }

  storeSearchTerm (event) {
    this.setState({
      searchTerm: event.currentTarget.value
    })
  }

  findRecipe () {
    fetch('/api/recipes/' + this.state.searchTerm, {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then ( ( res )  => {return res.json()})
    .then (( data ) => {
      let tempArr = [];
      for (var i = 0; i < data.length; i++) {
        let obj = {
          image_url: data[i].image_url,
          recipe_id: data[i].recipe_id,
          title: data[i].title,
          expanded: false,
          ingredients: data[i].ingredients,
          publisher: data[i].publisher,
          source_url: data[i].source_url
        }

        tempArr.push(obj);
       }
       this.setState({
         plans:tempArr
       })
     })
  }

  componentWillMount() {
    fetch('/api/recipes/' + 'pasta', {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then ( ( res )  => {return res.json()})
    .then (( data ) => {
      let tempArr = [];
      for (var i = 0; i < data.length; i++) {
        let obj = {
          image_url: data[i].image_url,
          recipe_id: data[i].recipe_id,
          title: data[i].title,
          expanded: false,
          ingredients: data[i].ingredients,
          publisher: data[i].publisher,
          source_url: data[i].source_url
        }

        tempArr.push(obj);
       }
       this.setState({
         plans:tempArr
       })
     })

  }

  render() {
    let mealPlans;
    if (this.state.plans.length !== 0) {
      mealPlans = this.state.plans.map((plan, index) =>
        <MealPlan
          handleExpandClick = {this.handleExpandClick}
          index = {index}
          title = {plan.title}
          imageUrl = {plan.image_url}
          expanded = {plan.expanded}
          ingredients = {plan.ingredients}
          publisher = {plan.publisher}
          source_url = {plan.source_url}
        />
      )
    } else {
      mealPlans = (<div></div>)
    }

    return (
      <div>
        <div style = {styles.searchContainer}>
          <Input
          onChange={this.storeSearchTerm}
          style= {styles.searchBox}
          />
          <Button variant="outlined" color="primary" style= {styles.searchBox} onClick={this.findRecipe}>
            Search
          </Button>
        </div>
      <div style={styles.recipesContainer}>
          {mealPlans}
      </div>
    </div>
    );
  }
}

const styles = {
  recipesContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10
  },
  searchBox:{
    backgroundColor: '#F5F5F5'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default MealPlanPage;
