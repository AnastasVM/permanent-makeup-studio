import React from 'react'
import s from './TeenageEpilation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const TeenageEpilation = () => {
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

export default TeenageEpilation
