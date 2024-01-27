import React from 'react'
import s from './PeriodPage.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import done from './images/icons8-успех-94.png'
import thinking from './images/thinking-face.png'
import up from './images/icons8-легко-100.png'
import question from './images/вопрос.png'

const PeriodPage = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Сколько держится перманентный макияж{' '}
					<img
						src={question}
						alt=''
						height={30}
						width={30}
						className={s.icon}
					/>
				</h1>
				<h3 className={s.subtitle}>
					Часто задаваемый вопрос. Давайте разберём
					<img
						src={thinking}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
				</h3>
				<p className={s.text}>
					Перманентный макияж держится в коже от 1 до 3 лет. Все это
					индивидуально и зависит от нескольких факторов:
				</p>
				<ul className={s.list}>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Особенности кожи и организма. Обменные процессы у всех проходят с
						разной интенсивностью. Например, чем моложе кожа, тем быстрее
						проходит ее обновление из-за вырабатываемого меланина. Поэтому с в
						возрастной коже пигмент задержится по дольше.
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Внешние факторы. Некоторые процедуры и воздействия разрушают верхние
						слои кожи. Пилинг отшелушивает отмершие частички кожи, а
						ультрафиолет подсушивает, способствуя разрушению эпидермиса.
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Техника нанесения перманента. Сама процедура ПМ подразумевает, что
						результат создаётся не навсегда. В отличии от татуировки, пигмент
						при ПМ вводят не так глубоко в кожу. Соответсвенно и срок носки
						ограничен.
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Качество самих пигментов. Составы для ПМ выполнены из натуральных
						ингридиентов, а частицы такие маленькие, что легко выводятся из
						организма. Наша лимфатическая система просто «вымывает» его из
						организма со временем.
					</li>
					<li>
						<img src={up} alt='' height={30} width={30} className={s.icon} />
						Учитывая все это на процедуру легче согласится и в этом есть свои
						плюсы!
					</li>
				</ul>
				{/* <div className={s.photo}>
				<img src={photo} className={s.photoImg} alt='' />
				</div> */}
			</div>
		</div>
	)
}

export default PeriodPage
