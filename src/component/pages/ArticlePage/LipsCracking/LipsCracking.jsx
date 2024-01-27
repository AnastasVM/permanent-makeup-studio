import React from 'react'
import s from './LipsCracking.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const LipsCracking = () => {
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

export default LipsCracking
