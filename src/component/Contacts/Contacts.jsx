import React from 'react'
import s from './Contacts.module.css'
import Social from '../Social/Social'

const Contacts = () => {
	const style = {
		width: '100%',
		height: '400px',
	}

	return (
		<div className={s.contacts}>
			<div className={s.content}>
				<h1 className={s.title}>Мои контакты</h1>
				<h5 className={s.subtitle}>Записаться на процедуру</h5>
				<p className={s.phone}>+7 913 788 07 01</p>
				<Social />
				<h5 className={s.subtitle}>График работы</h5>
				<p className={s.text}>
					Пн - Вс,{' '}
					<span className={s.textLight}>по предварительной записи</span>
				</p>

				<h5 className={s.subtitle}>Адрес студии</h5>
				<p className={s.text}>г.Новосибирск, ул.Иванова, д.17</p>
			</div>
			<div>
				<div id='map' style={style}></div>
				<div className={s.wrapper}>
					<div class={s.dgWidgetWLink}>
						<a
							class={s.link}
							target='blank'
							href='http://2gis.ru/novosibirsk/firm/70000001057797992/center/83.08809757232667,54.867618170986965/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap'
						>
							Посмотреть на карте Новосибирска
						</a>
					</div>

					<div class={s.dgWidgetWLink}>
						<a
							className={s.link}
							target='blank'
							href='http://2gis.ru/novosibirsk/firm/70000001057797992/photos/70000001057797992/center/83.08809757232667,54.867618170986965/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos'
						>
							Фотографии компании
						</a>
					</div>
					<div class={s.dgWidgetWLink}>
						<a
							className={s.link}
							target='blank'
							href='http://2gis.ru/novosibirsk/center/83.088098,54.867381/zoom/16/routeTab/rsType/bus/to/83.088098,54.867381╎Serebro, студия красоты?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route'
						>
							Найти проезд до Serebro, студия красоты
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
