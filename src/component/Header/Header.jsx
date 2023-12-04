import React, { useState } from 'react'
import s from './Header.module.css'
import close from './images/close.svg'
import burger from './images/icons8-меню.svg'
import cn from 'classnames'

const Header = ({ setActive }) => {
	const [isOpen, setOpen] = useState()

	return (
		<div className={s.header}>
			<div className='container'>
				<div className={s.wrapper}>
					<div className={s.inner}>
						<h3 className={s.title}>Инна Якушенко</h3>
						<h5 className={s.subtitle}>Перманент Make Up</h5>
					</div>
					<div
						className={cn(s.nav, {
							[s.active]: isOpen,
						})}
						onClick={() => setOpen(false)}
					>
						<div className={s.info}>
							<p className={s.time}>с 9:00 до 20:00</p>
							<p className={s.phone}>+7 913 788 07 01</p>
						</div>
						<button
							className={cn(s.btn, s.first)}
							onClick={() => setActive(true)}
						>
							Контакты
						</button>
						<button className={s.btn}>Обо мне</button>
					</div>
					<button className={s.menuBtn} onClick={() => setOpen(!isOpen)}>
						{isOpen ? (
							<img className={s.burgerIcon} src={close} />
						) : (
							<img className={s.burgerIcon} src={burger} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
