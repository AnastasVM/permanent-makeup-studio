import React, { Component } from 'react'
import Slider from 'react-slick'
import './SimpleSlider.css'

import Inna1 from './images/IMG_8752.JPG'
import Inna from './images/IMG_8428.JPG'
import lipsWork from './images/IMG_8707.JPG'
import Inna2 from './images/IMG_8475.JPG'
import Inna3 from './images/IMG_8544.JPG'
import Inna4 from './images/IMG_8547.JPG'
import Inna5 from './images/IMG_8651.JPG'
import Inna6 from './images/IMG_8679.JPG'

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 3000,
		// adaptiveHeight: true,
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
					<img
						// data-lazy={Inna}
						src={lipsWork}
						alt=''
						className='slider__img'
					/>
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna2} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna3} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna4} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna5} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna6} alt='' className='slider__img' />
				</div>
				<div className='slider__item'>
					<h3 className='slider__title'>Перманентный Make Up</h3>
					<img src={Inna} alt='' className='slider__img' />
				</div>
			</Slider>
		</div>
	)
}

export default SimpleSlider
