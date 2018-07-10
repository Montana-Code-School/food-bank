import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class Help extends React.Component {
  render() {
    return (
      <div style= {styles.mainDiv} >
          <Card style = {styles.cardOne}>
            <CardTitle title="Use Our Store" subtitle="Asking for help is something that can be difficult to do,
                but getting food at our food bank store is free, simple, and confidential. By following the three
                  easy steps below you will be on your way to filling your shopping cart with nutritious, nourishing food."/>
             <div style = {styles.cardDiv}>
              <Card style = {styles.innerCards}>
                <CardTitle title="1" subtitle = "Welcome"/>
                  <CardText>
                    Asking for help can be difficult to do.
                  </CardText>
                   <CardText>
                    Here at Missoula Food Bank & Community Center, we want you to feel welcome. When you arrive at the store, we will ask you to fill out a simple
                      survey that will be used for statistical purposes. Your personal information will remain confidential.
                   </CardText>
              </Card>
              <Card style = {styles.innerCards}>
                <CardTitle title="2" subtitle = "Interview"/>
                  <CardText>
                    We are here to help
                  </CardText>
                   <CardText>
                      Once we have entered your survey in our system, a trained volunteer will spend a few moments with you to
                      explain how the store works and share information about other resources that may be available to you.
                   </CardText>
              </Card>
              <Card style = {styles.innerCards} >
                <CardTitle title="3" subtitle="Shop & Go!" />
                 <CardText>
                    You're on your way to nourishing food.
                 </CardText>
                 <CardText>
                   Based on the number of people in your household, you are able to select food from the choices available that day.
                    Once you have completed shopping, our volunteer grocery boxers will make sure you received the allotted amount
                      and will box your groceries for easy transport.
                 </CardText>=
            </Card>
          </div>
        </Card>
        <Card style = {styles.cardTwo}>
          <CardTitle title="Contact Us" subtitle="Our Food Bank Store is located at: " style = {styles.cardTitle}/>
          <CardText >
              <p>1720 Wyoming Street
              Missoula, MT 59801</p>
              <p>406.549.0543</p>
              <p><strong>Our Food Distribution Hours: </strong></p>
              <p>Monday, Tuesday & Thursday 10am – 7pm</p>
              <p>Wednesday & Friday 10am – 1pm</p>
              <p>Closed Saturday & Sunday</p>
              <p><strong>Our Donation Drop-Off Hours: </strong></p>
              <p>Monday, Tuesday & Thursday 8am – 7pm</p>
              <p>Wednesday & Friday 8am – 3pm</p>
              <p>Closed Saturday & Sunday</p>
          </CardText>
        </Card>
        <Card style = {styles.cardThree}>
          <iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.5536834431396!2d-114.02528908397404!3d46.87215497914287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535dcdd39384293d%3A0xc513f6364b83d221!2sMissoula+Food+Bank+%26+Community+Center!5e0!3m2!1sen!2sus!4v1530558855133"
              width="100%" height= "300px" frameborder="0" allowfullscreen>
          </iframe>
        </Card>
      </div>
    )
  }
};

export default Help;

const styles = {
  mainDiv : {
    display: "flex",
    margin: 10,
    alignItems: "center",
    justifyContent : "center",
    flexWrap  : "wrap",

  },
  cardDiv : {
    display: "flex",
    justifyContent : "space-around",
    height: 375,
    flexWrap : "wrap"
  },
  innerCards: {
    width: "30%",
    marginTop: 11,
    marginBottom: 20
  },
  cardOne : {
    width : "75%",
    height: 500,
    textAlign : "center",
    marginRight : 5,
  },
  cardTwo : {
    width: "20%",
    height: 500,
    textAlign : "center",
    marginLeft : 5,
  },
  cardThree : {
    width: "80%",
    height: "80%",
    textAlign : "center",
    marginTop : ".5rem",
    marginLeft : 5
  },
  cardTitle : {
    marginBottom : -41
  }

}
