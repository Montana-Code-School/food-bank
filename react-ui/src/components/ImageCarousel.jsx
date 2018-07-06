import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
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

export default class ImageCarousel extends React.Component {
    render() {
        return (
          <Carousel
            autoPlay
            showStatus = {false}
            interval = {2000}
            showThumbs = {false}
            showIndicators = {false}
            width = {500}
            dynamicHeight = {true}
            stopOnHover = {true}
          >
             <div>
               <img src={veggies1} />
             </div>
             <div>
               <img src={breads}  />
             </div>
             <div>
               <img src={cheese}  />
             </div>
             <div>
               <img src={fruits1}  />
             </div>
             <div>
               <img src={fruits2} />
             </div>
             <div>
               <img src={veggies2} />
             </div>
             <div>
               <img src={fruits3} />
             </div>
             <div>
               <img src={veggies3}/>
             </div>
             <div>
               <img src={fruits4} />
             </div>
             <div>
               <img src={veggies4} />
             </div>
             <div>
               <img src={fruits5}/>
             </div>
             <div>
               <img src={veggies5} />
             </div>
             <div>
               <img src={fruits6}/>
             </div>
             <div>
               <img src={veggies6} />
             </div>
          </Carousel>
        );
    }
};
