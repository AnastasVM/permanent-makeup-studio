import React from 'react'
import s from './ContentHeader.module.css'
import { Link } from 'react-router-dom'

const ContentHeader = ({ title, children }) => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<Link to='/' className={s.link}>
					<span className={s.text}>Главная</span>
				</Link>
				<span className={s.separator}>/</span>
				<span className={s.title}>{title}</span>
				{children}
			</div>
		</div>
	)
}

export default ContentHeader
