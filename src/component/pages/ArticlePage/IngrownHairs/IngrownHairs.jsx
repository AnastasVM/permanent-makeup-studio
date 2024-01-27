import React from 'react'
import s from './IngrownHairs.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const IngrownHairs = () => {
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

export default IngrownHairs
