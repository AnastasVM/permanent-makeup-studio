import React, { useState } from 'react'
import s from './Footer.module.css'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Social from '../Social/Social'

const Footer = ({ setActive }) => {
	const [isOpen, setOpen] = useState()

	const handleOpenContacts = () => {
		setActive(true)
		setOpen(false)
	}

	return (
		<div className={s.footer}>
			<div className='container'>
				<div className={s.wrapper}>
					<Link to='/' className={s.link}>
						<div className={s.inner}>
							<h3 className={s.title}>Инна Якушенко</h3>
							<h5 className={s.subtitle}>Перманент Make Up</h5>
						</div>
					</Link>

					<div className={s.nav}>
						<Social alt='small' />
						<Link
							to='/price'
							className={cn(s.btn, s.first)}
							onClick={() => setOpen(false)}
						>
							Прайс
						</Link>
						<button className={s.btn} onClick={handleOpenContacts}>
							Контакты
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
