import React from 'react'
import s from './Pregnancy.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const Pregnancy = () => {
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

export default Pregnancy
