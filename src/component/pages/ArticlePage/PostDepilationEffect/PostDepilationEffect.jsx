import React from 'react'
import s from './PostDepilationEffect.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'

const PostDepilationEffect = () => {
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

export default PostDepilationEffect
