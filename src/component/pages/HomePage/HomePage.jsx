import React from 'react'
import s from './HomePage.module.css'
import SimpleSlider from '../../Slick/SimpleSlider'
import Services from '../../Services/Services'
import Price from '../../Price/Price'

const HomePage = () => {
	return (
		<div className={s.wrapper}>
			<SimpleSlider />
			<Services />
			<Price />
		</div>
	)
}

export default HomePage
