import React, { Component } from 'react'
import Slider from 'react-slick'
import './SimpleSlider.css'

import Inna1 from './images/Inna.png'
import Inna from './images/Inna_pink.png'

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
				{/* <div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div> */}
			</Slider>
		</div>
	)
}

export default SimpleSlider
