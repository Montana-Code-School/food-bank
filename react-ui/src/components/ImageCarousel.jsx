import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import veggies1 from '../photos/veggies1.jpg';
import veggies2 from '../photos/veggies2.jpg';
import veggies3 from '../photos/veggies3.jpg';
import veggies4 from '../photos/veggies4.jpg';
import veggies5 from '../photos/veggies5.jpg';
import veggies6 from '../photos/veggies6.jpg';
import fruits1 from '../photos/fruits1.jpg';
import fruits2 from '../photos/fruits2.jpg';
import fruits3 from '../photos/fruits3.jpg';
import fruits4 from '../photos/fruits4.jpg';
import fruits5 from '../photos/fruits5.jpg';
import fruits6 from '../photos/fruits6.jpg';
import breads from '../photos/breads.jpg';
import cheese from '../photos/cheese.jpg';

export default class ImageCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        showStatus = {false}
        interval = {2000}
        showThumbs = {false}
        showIndicators = {false}
        width = {'500px'}
        dynamicHeight = {true}
        stopOnHover = {true}
      >
         <div>
           <img src={veggies1} alt="Vegetables" />
         </div>
         <div>
           <img src={breads} alt="Bread" />
         </div>
         <div>
           <img src={cheese} alt="Cheese" />
         </div>
         <div>
           <img src={fruits1} alt="Fruit" />
         </div>
         <div>
           <img src={fruits2} alt="Fruits"/>
         </div>
         <div>
           <img src={veggies2} alt="Vegetables" />
         </div>
         <div>
           <img src={fruits3} alt="Fruit" />
         </div>
         <div>
           <img src={veggies3} alt="Vegetables" />
         </div>
         <div>
           <img src={fruits4} alt="Fruits" />
         </div>
         <div>
           <img src={veggies4} alt="Vegetables" />
         </div>
         <div>
           <img src={fruits5} alt="Fruit" />
         </div>
         <div>
           <img src={veggies5} alt="Vegetables" />
         </div>
         <div>
           <img src={fruits6} alt="Fruit" />
         </div>
         <div>
           <img src={veggies6} alt="Vegetables" />
         </div>
      </Carousel>
    );
  }
};
