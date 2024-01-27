import React from 'react'
import s from './DrySkin.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const DrySkin = () => {
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

export default DrySkin
