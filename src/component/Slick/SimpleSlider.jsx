import React, { useState } from 'react'
import SliderOne from 'react-slick'
import s from './SimpleSlider.module.css'
import Inna1 from './images/IMG_87521.jpg'
import Inna from './images/IMG_84281.jpg'
import lipsWork from './images/IMG_87071.jpg'
import Inna2 from './images/IMG_84751.jpg'
import Inna3 from './images/IMG_85441.jpg'
import Inna4 from './images/IMG_85471.jpg'
import Inna5 from './images/IMG_86511.jpg'
import Inna6 from './images/IMG_86791.jpg'
import Inna7 from './images/IMG_85531.jpg'

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	}

	return (
		<div className={s.wrapper}>
			<SliderOne className={s.sliderOne} {...settings}>
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
					<img src={lipsWork} alt='' className={s.slider__img} />
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
