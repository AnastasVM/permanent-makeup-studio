import React from 'react'
import s from './CareСold.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const CareСold = () => {
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

export default CareСold
