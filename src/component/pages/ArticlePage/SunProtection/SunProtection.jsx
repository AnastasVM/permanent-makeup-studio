import React from 'react'
import s from './SunProtection.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import sun from './images/солнце.png'
import circle from './images/icons8-солнце-64.png'

const SunProtection = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					<img src={sun} alt='' height={40} width={40} className={s.icon} />
					Как защищать кожу от солнца после депиляции
					<img
						src={sun}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Правильно готовить кожу к самой депиляции и ухаживать после -
					увлажнять и успокаивать.
				</p>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Всегда пользоваться солнцезащитными средствами после эпиляции. Это
					поможет предотвратить появление пигментных пятен и ожоги.
				</p>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Не выходить на пляж и не проводить много времени на солнце хотя бы
					несколько дней после эпиляции.
				</p>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Не посещать сауну, не принимать горячую ванну, не делать массаж первые
					несколько дней после эпиляции.
				</p>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Использовать средства с лёгкой текстурой весной и летом. Масла
					оставить до осени и зимы.
				</p>
				<p className={s.text}>
					<img src={circle} alt='' height={35} width={35} className={s.icon} />
					Выбирать солнцезащитные средства с минеральными фильтрами. Для
					нормальной кожи - с SPF 20-35, для чувствительной - SPF 50.
				</p>
			</div>
		</div>
	)
}

export default SunProtection
