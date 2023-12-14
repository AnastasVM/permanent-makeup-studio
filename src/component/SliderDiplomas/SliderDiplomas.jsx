// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import React, { useState } from 'react'
import SliderTwo from 'react-slick'
import './SliderDiplomas.css'
import diplome from './images/IMG_5819.jpeg'
import diplome1 from './images/IMG_5822.jpeg'
import diplome2 from './images/IMG_5823.jpeg'
import diplome3 from './images/IMG_5831.jpeg'

const SliderDiplomas = () => {
	const [slider2, setSlader2] = useState(null)
	const settings = {
		className: 'center',
		centerMode: true,
		// centerPadding: '60px',
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
				breakpoint: 990,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					centerMode: false,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
					centerMode: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
				},
			},
		],
	}
	return (
		<>
			<div className='wrapper'>
				<SliderTwo className='sliderTwo' {...settings} ref={slider => slider2}>
					<div className='item'>
						<img src={diplome} alt='' className='img' />
					</div>
					<div className='item'>
						<img src={diplome1} alt='' className='img' />
					</div>
					<div className='item'>
						<img src={diplome2} alt='' className='img' />
					</div>
					<div className='item'>
						<img src={diplome3} alt='' className='img' />
					</div>
					{/* <div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div>
					<div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div>
					<div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div>
					<div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div>
					<div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div>
					<div className={s.item}>
						<img src={diplome3} alt='' className={s.img} />
					</div> */}
				</SliderTwo>
			</div>
		</>
	)
}

export default SliderDiplomas
