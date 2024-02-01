import React from 'react'
import s from './SunProtection.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const SunProtection = () => {
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

export default SunProtection
