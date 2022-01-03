import React from 'react'	 
import Portfolio from '../images/Projetos/cover_gero_portif.png';
import SolarSystem from '../images/Projetos/cover_solar_system.png';
import Trunfo from '../images/Projetos/cover_trunfo.png';
import ToDoList from '../images/Projetos/cover_to_do_list.png';
import Forms from '../images/Projetos/cover_trybe_warts.png';
import PixelArt from '../images/Projetos/cover_pixel_art.png';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: Portfolio,	
    thumbnail: Portfolio,
  },
  {
    original: SolarSystem,
    thumbnail: SolarSystem,
  },
	{
    original: Trunfo,
    thumbnail: Trunfo,
  },
  {
    original: ToDoList,
    thumbnail: ToDoList,
  },
  {
    original: Forms,
    thumbnail: Forms,
  },
  {
    original: PixelArt,
    thumbnail: PixelArt,
  },
];

export default class Carousel extends React.Component {
  render() {
    return <ImageGallery 
		additionalClass='carousel' 
		items={images}
    showFullscreenButton={false}
		showNav={false}
		showThumbnails={false}
		showPlayButton={false}
		autoPlay={true}
    
		/>;
  }
}