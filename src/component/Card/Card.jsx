import React from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ id, title, image, text, Children }) => {
	return (
		<Link className={s.link} to={`/service/${id}`}>
			<div className={s.card}>
				<div className={s.cardImg}>
					<img className={s.image} src={image} alt='' />
				</div>
				<div className={s.text}>
					<p>{text}</p>
				</div>
				<div className={s.content}>
					<h1 className={s.title}>{title}</h1>
				</div>
				{Children}
			</div>
		</Link>
	)
}

export default Card
