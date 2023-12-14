import React from 'react'
import s from './AboutPage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'
import AboutMe from '../../AboutMe/AboutMe'
import SliderDiplomas from '../../SliderDiplomas/SliderDiplomas'

const AboutPage = () => {
	return (
		<div className={s.about}>
			<div className='container'>
				<ContentHeader title={'Обо мне'} />
				<AboutMe />
			</div>
			<SliderDiplomas />
		</div>
	)
}
export default AboutPage
