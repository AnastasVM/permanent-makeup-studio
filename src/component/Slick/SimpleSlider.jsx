import React, { useState } from 'react'

import SliderOne from 'react-slick'
import s from './SimpleSlider.module.css'

import Inna1 from './images/IMG_8752.JPG'
import Inna from './images/IMG_8428.JPG'
import lipsWork from './images/IMG_8707.JPG'
import Inna2 from './images/IMG_8475.JPG'
import Inna3 from './images/IMG_8544.JPG'
import Inna4 from './images/IMG_8547.JPG'
import Inna5 from './images/IMG_8651.JPG'
import Inna6 from './images/IMG_8679.JPG'
import Inna7 from './images/IMG_8553.JPG'

const SimpleSlider = () => {
	const [slider1, setSlader1] = useState(null)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		// adaptiveHeight: true,
		// asNavFor: 'SimpleSlider',
	}

	return (
		<div className={s.wrapper}>
			<SliderOne className={s.sliderOne} {...settings} ref={slider => slider1}>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>
						Перманентный Make Up & <br /> Депиляция
					</h3>
					<img src={Inna1} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>
						Скидка 10% на любую услугу <br /> при первом визите!
					</h3>
					<img
						// data-lazy={Inna}
						src={lipsWork}
						alt=''
						className={s.slider__img}
					/>
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna2} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna3} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna4} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna5} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna6} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>Перманентный Make Up</h3>
					<img src={Inna} alt='' className={s.slider__img} />
				</div>
				<div className={s.slider__item}>
					<h3 className={s.slider__title}>
						Скидка 10% на любую услугу <br /> при первом визите!
					</h3>
					<img src={Inna7} alt='' className={s.slider__img} />
				</div>
			</SliderOne>
		</div>
	)
}

export default SimpleSlider
