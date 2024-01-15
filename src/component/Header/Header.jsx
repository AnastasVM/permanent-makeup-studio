import React, { useState } from 'react'
import s from './Header.module.css'
import close from './images/close.svg'
import burger from './images/icons8-меню.svg'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import MySelect from '../UI/select/MySelect'

const Header = ({ setActive }) => {
	const [isOpen, setOpen] = useState()

	const handleOpenContacts = () => {
		setActive(true)
		setOpen(false)
	}

	return (
		<div className={s.header}>
			<div className='container'>
				<div className={s.wrapper}>
					<Link to='/' className={s.link}>
						<div className={s.inner}>
							<h3 className={s.title}>Инна Якушенко</h3>
							<h5 className={s.subtitle}>Перманент Make Up</h5>
						</div>
					</Link>
					<div
						className={cn(s.nav, {
							[s.active]: isOpen,
						})}
						// onClick={() => setOpen(false)}
					>
						<div className={s.info}>
							<p className={s.time}>с 9:00 до 20:00</p>
							<p className={s.phone}>+7 913 788 07 01</p>
						</div>

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

						<Link
							to='/aboutMe'
							className={s.btn}
							onClick={() => setOpen(false)}
						>
							Обо мне
						</Link>
						<MySelect isOpen={isOpen} setOpen={setOpen} />
					</div>
					<button className={s.menuBtn} onClick={() => setOpen(!isOpen)}>
						{isOpen ? (
							<img className={s.burgerIcon} src={close} alt='' />
						) : (
							<img className={s.burgerIcon} src={burger} alt='' />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
