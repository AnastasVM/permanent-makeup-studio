import React from 'react'
import s from './Card.module.css'

const Card = (title, image, Children) => {
	return (
		<div className={s.card}>
			<img className={s.image} src={image} alt='' />
			<div className={s.content}>
				<h1 className={s.title}>{title}</h1>
			</div>
			{Children}
		</div>
	)
}

export default Card
