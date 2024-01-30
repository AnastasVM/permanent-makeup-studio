import React from 'react'
import s from './Scrubbing.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import cycle from './images/стрелки-по-кругу.png'
import done from './images/успех.png'
import face from './images/icons8-выбритое-лицо-64.png'

const Scrubbing = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Скрабирование
					<img
						src={face}
						alt=''
						height={30}
						width={30}
						className={s.iconTitle}
					/>
				</h1>
				<h3 className={s.subtitle}>
					Скрабирование - это, пожалуй, самый простой и действенный способ
					придать коже здоровый, цветущий вид, убрав уже неживые клетки.
				</h3>
				<p className={s.text}>Польза скраба:</p>
				<ul className={s.list}>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Помогает очистить закупоренные поры и устраняет ороговевший слой,
						благодаря чему кожа снова может активно получать кислород.
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Увлажняет и восстанавливает эпидермис после активного механического
						воздействия микрочастичек.
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Массирует верхние слои кожного покрова, увеличивая циркуляцию крови.
					</li>
				</ul>
				<p className={s.text}>Положительные стороны скраба:</p>
				<ul className={s.list}>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Эффективное очищение
					</li>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Увлажнение и питание
					</li>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Удаление лишнего
					</li>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Массажный эффект
					</li>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Поддержание тонуса
					</li>
					<li>
						<img src={cycle} alt='' height={25} width={25} className={s.icon} />
						Простота в применении
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Scrubbing
