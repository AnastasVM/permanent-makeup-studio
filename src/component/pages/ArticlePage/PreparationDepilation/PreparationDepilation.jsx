import React from 'react'
import s from './PreparationDepilation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import cross from './images/cross.png'
import sign from './images/внимание.png'
import photo from './images/IMG_8586.JPG'

const PreparationDepilation = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
					title={' /...'}
				/>
				<h1 className={s.title}>
					Готовимся к процедуре перманентного макияжа!
				</h1>
				<h3 className={s.subtitle}>
					<img
						src={cross}
						width={25}
						height={25}
						alt=''
						className={s.iconSubtitle}
					/>
					Что стоит исключить перед процедурой:
				</h3>

				<ul className={s.list}>
					<li>
						<img src={sign} alt='' height={20} width={20} className={s.icon} />
						За неделю убираем из расписания походы в солярий и посещение сауны.
					</li>
					<li>
						<img src={sign} alt='' height={20} width={20} className={s.icon} />
						За 2-3 дня не принимаем лекарства, от которых разжижается кровь.
					</li>
					<li>
						<img src={sign} alt='' height={20} width={20} className={s.icon} />
						За сутки не употребляем алкоголь, т.к. он снижает свертываемость
						крови и приводит к выделению сукровицы во время процедуры.
					</li>
					<li>
						<img src={sign} alt='' height={20} width={20} className={s.icon} />В
						день процедуры не пьём кофе.
					</li>
				</ul>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default PreparationDepilation
