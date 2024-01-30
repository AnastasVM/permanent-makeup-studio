import React from 'react'
import s from './Shaving.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import shaver from './images/бритва.png'
import no from './images/нет.png'
import look from './images/курсор-рука.png'
import stop from './images/stop.png'
import pain from './images/pain.png'
import smiley from './images/разочарование.png'
import alarm from './images/будильник.png'

const Shaving = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					<img src={shaver} width={35} height={35} alt='' className={s.icon} />
					Бритье между процедурами депиляции -<br />
					плохая идея
					<img
						src={stop}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h1>

				<p className={s.text}>
					Если рука тянется к бритве - советую прочитать данный пост
					<img
						src={look}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</p>

				<p className={s.text}>
					<img src={no} width={25} height={25} alt='' className={s.icon} />
					Вернётся щетина. Если Вы успели забыть, что такое жесткая щетина, то
					теперь она быстро вернётся. Вместо истонченных волосков с тонким
					мягким кончиком, Вы получите срезанные острые волоски после бритвы{' '}
				</p>

				<p className={s.text}>
					<img src={no} width={25} height={25} alt='' className={s.icon} />
					Раздражение и сухость кожи. Ежедневное бритье делает кожу более
					грубой, в отличие от процедуры депиляции, не травмирующей живые клетки
					кожи. Также есть риск порезов и пигментации при ежедневном бритье.
				</p>
				<p className={s.text}>
					<img src={no} width={25} height={25} alt='' className={s.icon} />
					Густая растительность. Все мы ценим эффект уменьшения густоты волос
					при регулярных процедурах депиляции. Бритье сводит этот эффект на нет.
					Кроме того, после бритья следующая процедура депиляции пройдёт более
					болезненно
					<img
						src={pain}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</p>
				<p className={s.text}>
					<img src={no} width={25} height={25} alt='' className={s.icon} />
					Чёрные точки. Получить чёрные пеньки уже через несколько часов - это
					обычное дело после бритья. О длительной гладкости при таком способе
					удаления волос можно забыть
					<img
						src={smiley}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</p>

				<p className={s.text}>
					Надеюсь, данный пост заставит Вас отложить бритву и больше к ней не
					возвращаться. Ведь только регулярная процедура депиляции подарит Вашей
					коже идеальную гладкость и мягкость на более длительный срок
					<img
						src={alarm}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</p>
			</div>
		</div>
	)
}

export default Shaving
