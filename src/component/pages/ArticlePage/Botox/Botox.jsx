import React from 'react'
import s from './Botox.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import sign from './images/знак.png'
import question from './images/вопрос.png'
import syringe from './images/шприц.png'

const Botox = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Ботокс, филлеры и перманентный макияж: можно ли совмещать
					<img
						src={sign}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
					<img
						src={question}
						width={35}
						height={35}
						alt=''
						className={s.iconQuestion}
					/>
				</h1>

				<p className={s.text}>
					Если Вы решили совместить ботокс с перманентным макияжем бровей, то
					мой совет - сначала делать перманентный макияж. Это позволит более
					точно выровнять асимметрию бровей, если она присутствует.
				</p>
				<h3 className={s.subtitle}>
					<img src={syringe} alt='' height={30} width={30} className={s.icon} />
					А если ботокс уже сделан?
				</h3>
				<p className={s.text}>Тогда ждем 2 недели!</p>

				<p className={s.text}>
					Введение ботулотоксина изменяет форму надбровных дуг – чаще всего
					приподнимает, в более редких случаях – опускает. Если сразу после
					этого сделать перманент, по прошествии некоторого времени рисунок
					может «потечь» или потерять симметрию. В случае, если Вы хотите
					сделать перманентный макияж после уже проведенных уколов ботокса,
					между процедурами нужно выдержать период от двух до четырех недель. В
					течение этого времени препарат адаптируется в мышцах, кожа лба
					разгладится, это сформирует новый вид лица, и тогда можно будет
					наносить перманент. Такая последовательность косметологических методик
					позволит придать бровям новую форму без страха, что она со временем
					изменится и перестанет соответствовать Вашим ожиданиям.
				</p>
				<h3 className={s.subtitle}>
					<img src={sign} alt='' height={30} width={30} className={s.icon} />
					Вывод: лучше сначала делать перманент, затем ботокс. Если ботокс уже
					сделан, то перманентный макияж делается не меньше, чем через 2 недели.
				</h3>

				{/* <div className={s.photo}>
				<img src={photo} className={s.photoImg} alt='' />
				</div> */}
			</div>
		</div>
	)
}

export default Botox
