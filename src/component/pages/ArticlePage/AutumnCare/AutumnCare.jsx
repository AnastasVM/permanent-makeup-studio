import React from 'react'
import s from './AutumnCare.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const AutumnCare = () => {
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

export default AutumnCare
