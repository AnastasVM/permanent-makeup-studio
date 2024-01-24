import React from 'react'
import s from './Fixation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import question from './images/вопрос.png'
import face from './images/face.png'
import icon from './images/высокий-приоритет.png'
import sign from './images/знак.png'

const Fixation = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Почему татуаж может плохо приживаться
					<img
						src={face}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>Вот ряд факторов, почему это может произойти:</p>
				<ul className={s.list}>
					<li>
						<img src={icon} alt='' height={30} width={30} className={s.icon} />
						️Защитная реакция организма. Вводимый пигмент воспринимается
						организмом как угроза. Он направляет все силы, чтобы избавиться от
						инородного вещества - очищает и регенирует кожу.
					</li>
					<li>
						<img src={icon} alt='' height={30} width={30} className={s.icon} />
						️Игнорирование заживляющих средств Такие средства ускоряют
						заживление ранок. Если их не использовать, корочки держатся на коже
						слабее и их проще содрать. Это не только увеличивает период
						заживления макияжа, но и влияет на равномерность нанесения пигмента.
					</li>
					<li>
						<img src={icon} alt='' height={30} width={30} className={s.icon} />
						Индивидуальные особенности кожи Здесь стоит отталкиваться от типа
						кожи. Например, обладательницам жирного типа кожи коррекция нужна
						чаще - пигмент может смазываться из-за гиперфункции сальных желез.
					</li>
				</ul>
				<p className={s.text}>
					<img
						src={sign}
						alt=''
						height={30}
						width={30}
						className={s.iconSign}
					/>
					На любой зоне всегда нужна коррекция
					<img
						src={sign}
						alt=''
						height={30}
						width={30}
						className={s.iconSign}
					/>
				</p>
				<div className={s.photo}>
					{/* <img src={photo} className={s.photoImg} alt='' /> */}
				</div>
			</div>
		</div>
	)
}

export default Fixation
