import React from 'react'
import s from './Refresh.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import circle from './images/круг.png'
import question from './images/вопрос.png'
import brows from './images/брови.jpeg'

const Refresh = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>РЕФРЕШ в перманентном макияже</h1>
				<h3 className={s.subtitle}>
					Что это такое
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.icon}
					/>
				</h3>
				<p className={s.text}>
					Рефреш в переводе с английского языка означает «освежить». Таким
					образом, рефреш бровей — это процедура по обновлению оттенка. Рефреш
					восстанавливает яркость пигмента, позволяет устранить пробелы в
					красителе, исправляет неточности и поддерживает ухоженный внешний вид.
				</p>
				<p className={s.text}>
					Со временем пигмент под кожей тускнеет, а потом и вовсе исчезает. Это
					происходит вследствие естественных процессов, происходящих в
					организме: с лимфой краситель постепенно выводится.
				</p>
				<p className={s.text}>Когда именно нужно делать эту процедуру:</p>
				<ul className={s.list}>
					<li>
						<img
							src={circle}
							alt=''
							height={20}
							width={20}
							className={s.icon}
						/>
						брови посветлели и стали невыразительными;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={20}
							width={20}
							className={s.icon}
						/>
						оттенок больше не сочетается с цветом волос;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={20}
							width={20}
							className={s.icon}
						/>
						появилась необходимость в использовании декоративного карандаша;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={20}
							width={20}
							className={s.icon}
						/>
						контур стал расплывчатым;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={20}
							width={20}
							className={s.icon}
						/>
						наблюдаются частичные пробелы в пигменте.
					</li>
				</ul>
				<div className={s.photo}>
					<img src={brows} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Refresh
