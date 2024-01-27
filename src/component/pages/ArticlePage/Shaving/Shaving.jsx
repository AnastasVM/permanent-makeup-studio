import React from 'react'
import s from './Shaving.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const Shaving = () => {
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

export default Shaving
