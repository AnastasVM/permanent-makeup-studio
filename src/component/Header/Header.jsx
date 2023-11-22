import React from 'react'
import s from './Header.module.css'

const Header = () => {
	return (
		<div className={s.Header}>
			<div className='container'>
				<div className={s.wrapper}>
					<div className={s.inner}>
						<h3 className={s.title}>Название компании</h3>
						<h5 className={s.subtitle}>Салон красоты</h5>
					</div>
					<div className={s.nav}>
						<div className={s.info}>
							<p className={s.time}>Звонить с 9:00 до 20:00</p>
							<p className={s.phone}>+7 913 788 07 01</p>
						</div>
						<button className={s.btn}>Контакты</button>
						<button className={s.btn}>Записаться</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
