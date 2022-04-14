import React from 'react';
import Slider from './Slider';

class SliderParent extends React.Component {
  constructor(props) {
    super(props);
    //this.slides = props.slides;
    console.log(typeof this.slides);
    console.log(this.slides);
    console.log(typeof props.slides);
    console.log(props.slides);
  }

  render() {
   return (
    <div className="parent">
     <Slider>
      {this.props.slides.map(value => {
       return (
        <div key={value.getName()} className="child">
         {value.getName()}
        </div>
       );
      })}
     </Slider>
    </div>
   );
  }
 }

 export default SliderParent;
