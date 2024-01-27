import React from 'react'
import s from './ReactionDepilation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const ReactionDepilation = () => {
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

export default ReactionDepilation
