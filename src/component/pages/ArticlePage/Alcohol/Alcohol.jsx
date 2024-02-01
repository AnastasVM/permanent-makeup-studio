import React from 'react'
import s from './Alcohol.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const Alcohol = () => {
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

export default Alcohol
