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
	return (
		<div
			className={cn(s.wrapper, {
				[s.active]: nav,
			})}
		>
			<ul className={s.menu}>
				Статьи
				<span className={s.arrow} onClick={handleNav}></span>
				<li className={s.li}>
					<Link
						to='/articlePermanent'
						className={s.link}
						onClick={() => setOpen(false)}
					>
						Перманент
					</Link>
				</li>
				<li className={s.li}>
					<Link
						to='/articleDepilation'
						className={s.link}
						onClick={() => setOpen(false)}
					>
						Депиляция
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MySelect
