import React from 'react'
import './SliderHorizontalDiploma.css'
import SliderThree from 'react-slick'

import diploma1 from './images/IMG_5825.jpeg'
import diploma2 from './images/IMG_5827.jpeg'
import diploma3 from './images/IMG_5829.jpeg'
import diploma4 from './images/IMG_5830.jpeg'
import diploma5 from './images/IMG_5832.jpeg'
import diploma6 from './images/IMG_5834.jpeg'
import diploma7 from './images/IMG_5835.jpeg'
import diploma8 from './images/IMG_5838.jpeg'
import diploma9 from './images/IMG_5839.jpeg'
import diploma10 from './images/IMG_5840.jpeg'

const SliderHorizontalDiploma = () => {
	const settings = {
		// точки внизу
		dots: false,
		// infinite: true,
		speed: 500,
		//  сколько слайдев показывается сразу
		slidesToShow: 3,
		// сколько спри скролле прокручивается слайдов
		slidesToScroll: 1,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<>
			<div className='wrapper'>
				<SliderThree className='sliderTwo' {...settings}>
					<div className='itemImg'>
						<img src={diploma1} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma2} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma3} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma4} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma5} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma6} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma7} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma8} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma9} alt='' className='images' />
					</div>
					<div className='itemImg'>
						<img src={diploma10} alt='' className='images' />
					</div>
				</SliderThree>
			</div>
		</>
	)
}

export default SliderHorizontalDiploma
