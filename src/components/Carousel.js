import React from 'react'	 
import car0 from '../images/car0.png'
import car1 from '../images/stockIMG.jpg'
import car2 from '../images/car2.png'
import car3 from '../images/car3.png'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: car0,	
    thumbnail: car0,
  },
  {
    original: car1,
    thumbnail: car1,
  },
  {
    original: car2,
    thumbnail: car2,
  },
	{
    original: car3,
    thumbnail: car3,
  },
];

export default class Carousel extends React.Component {
  render() {
    return <ImageGallery 
		additionalClass='carousel' 
		items={images} 
		showNav={false}
		showThumbnails={false}
		showPlayButton={false}
		autoPlay={true}
		/>;
  }
}