import React, { Component } from 'react'
import Slider from 'react-slick'
import './SimpleSlider.css'

import Inna1 from './images/Inna.png'
import Inna from './images/Inna_pink.png'
import lipsWork from './images/ГубыРабота.jpeg'

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div className='wrapper'>
			{/* <h2> Single Item</h2> */}
			<Slider {...settings}>
				<div className='slider__item'>
					<h3 className='slider__title'>
						Перманентный Make Up & <br /> Депиляция
					</h3>
					<img src={Inna1} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>
						Скидка 10% на любую услугу <br /> при первом визите!
					</h3>
					<img src={Inna} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={lipsWork} alt='' className='slider__img' />
				</div>
			</Slider>
		</div>
	)
}

export default SimpleSlider
