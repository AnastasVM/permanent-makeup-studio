import React from 'react'
import s from './Header.module.css'

const Header = ({ setActive }) => {
	return (
		<div className={s.Header}>
			<div className='container'>
				<div className={s.wrapper}>
					<div className={s.inner}>
						<h3 className={s.title}>Инна Якушенко</h3>
						<h5 className={s.subtitle}>Перманент Make Up</h5>
					</div>
					<div className={s.nav}>
						<div className={s.info}>
							<p className={s.time}>Звонить с 9:00 до 20:00</p>
							<p className={s.phone}>+7 913 788 07 01</p>
						</div>
						<button className={s.btn} onClick={() => setActive(true)}>
							Контакты
						</button>
						<button className={s.btn}>Записаться</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
