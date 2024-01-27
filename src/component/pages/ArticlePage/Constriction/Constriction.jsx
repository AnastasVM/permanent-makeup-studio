import React from 'react'
import s from './Constriction.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const Constriction = () => {
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

export default Constriction
