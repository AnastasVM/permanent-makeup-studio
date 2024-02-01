import React from 'react'
import s from './Nutrition.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const Nutrition = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
			</div>
		</div>
	)
}

export default Nutrition
