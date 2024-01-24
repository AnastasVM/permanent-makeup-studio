import React, { useState } from 'react'
import s from './MySelect.module.css'
import { Link } from 'react-router-dom'
import cn from 'classnames'

const MySelect = ({ isOpen, setOpen }) => {
	const [nav, setNav] = useState()

	const handleNav = e => {
		e.preventDefault()
		setNav(!nav)
	}

	const handleCloseMenu = e => {
		setNav(!nav)
		setOpen(false)
	}
	return (
		<div
			className={cn(s.wrapper, {
				[s.active]: nav,
			})}
		>
			<button className={s.btn} onClick={handleNav}>
				Статьи
			</button>
			<ul className={s.menu}>
				<li className={s.li}>
					<Link
						to='/articlePermanent'
						className={s.link}
						onClick={handleCloseMenu}
					>
						Перманент
					</Link>
				</li>
				<li className={s.li}>
					<Link
						to='/articleDepilation'
						className={s.link}
						onClick={handleCloseMenu}
					>
						Депиляция
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MySelect
