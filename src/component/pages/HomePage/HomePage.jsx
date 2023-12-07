import React from 'react'
import s from './HomePage.module.css'
import SimpleSlider from '../../Slick/SimpleSlider'
import Services from '../../Services/Services'

const HomePage = () => {
	return (
		<div className={s.wrapper}>
			<SimpleSlider />
			<Services />
		</div>
	)
}

export default HomePage
