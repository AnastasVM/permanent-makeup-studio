import React from 'react'
import s from './ContentHeader.module.css'
import { Link } from 'react-router-dom'

const ContentHeader = ({ link, subtitle, title, children }) => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<Link to='/' className={s.link}>
					<span>Главная</span>
				</Link>
				<span className={s.separator}>/</span>
				<Link to={`/${link}`} className={s.link}>
					<span>{subtitle}</span>
				</Link>
				<span className={s.title}>{title}</span>
				{children}
			</div>
		</div>
	)
}

export default ContentHeader
