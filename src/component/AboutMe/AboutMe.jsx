import React from 'react'
import s from './AboutMe.module.css'
import ContentHeader from '../ContentHeader/ContentHeader'

const AboutMe = () => {
	return (
		<div className={s.about}>
			<div className='container'>
				<ContentHeader title={'Обо мне'} />
			</div>
		</div>
	)
}
export default AboutMe
