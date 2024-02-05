import React from 'react'
import s from './TeenageEpilation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import question from './images/вопрос.png'
import face from './images/thinking-face.png'
import razor from './images/бритва.png'
import cream from './images/cream.png'
import wax from './images/мед.png'
import sugar from './images/icons8-конфеты-на-хеллоуин-64.png'
import exclamation from './images/знак.png'

const TeenageEpilation = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Подростковая эпиляция: ДА или НЕТ
					<img
						src={question}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
					<img
						src={face}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Подростковая эпиляция очень тонкая тема для обсуждения. Одни мамы
					против, аргументируя, что еще рано и успеет. Другие не видят в
					эпиляции ничего страшного, но задаются вопросом: какой вид эпиляции, в
					каком возрасте можно, на каких частях тела и как часто?
				</p>
				<h3 className={s.subtitle}>Особенности взросления подростка</h3>
				<p className={s.text}>
					Переходной возраст довольно сложный этап как для родителей так и для
					девочки-подростка. «Перезагрузка»организма девочки начинается в 11 лет
					и продолжается 5 лет. В этот период, на фоне гормональных изменений
					вызванных работой половых органов, ребенок меняется и внешне и
					внутренне. Все органы, системы и клеточки организма, начинают работать
					совсем иначе. Тело начинает интенсивно расти и меняться. Для множества
					девочек наступает период «не любви к себе».Дисбаланс гормонов приводит
					к изменению настроения, ребенок быстро устает, ощущает слабость и
					головокружение.
				</p>
				<p className={s.text}>
					Поскольку в подростка не стабильный эмоциональный фон, все эти
					изменения могут существенно повлиять на формирование его личности и
					зарождению множества комплексов.
				</p>
				<h3 className={s.subtitle}>
					С какого возраста можно делать процедуру
					<img
						src={question}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</h3>

				<p className={s.text}>
					Начинать удалять нежелательные волосы или подождать-личное дело
					каждого. Рекомендаций к обязательному исполнению нет, все очень
					индивидуально. Если волосы светлые и практично не заметные, девочка по
					этому поводу не комплексует и не ощущает дискомфорта, эпиляцию можно
					отложить. Если волос темный и жесткий, девочка постоянно стесняется
					надеть платье или юбку, раздеться на пляже и т.д.- это сигнал к
					действию.
				</p>
				<h3 className={s.subtitle}>Девочке в 11-13 лет подойдут только:</h3>
				<ul className={s.list}>
					<li>
						<img src={razor} alt='' height={30} width={30} className={s.icon} />
						безопасная бритва;
					</li>
					<li>
						<img src={cream} alt='' height={30} width={30} className={s.icon} />
						крем-депилятор.
					</li>
				</ul>
				<h3 className={s.subtitle}>С 14 лет можно удалять волосы путем:</h3>
				<ul className={s.list}>
					<li>
						<img src={wax} alt='' height={30} width={30} className={s.icon} />
						восковой депиляции
					</li>
					<li>
						<img src={sugar} alt='' height={30} width={30} className={s.icon} />
						сахарной эпиляции.
					</li>
				</ul>
				<p className={s.text}>
					Однако делать это нужно только в профессиональном косметологическом
					салоне или студии.
				</p>

				<p className={s.text}>
					<img
						src={exclamation}
						width={25}
						height={25}
						alt=''
						className={s.iconExclamation}
					/>
					По мнению психологов лишние волоски можно удалять ровно с тех пор,
					когда неэстетичный внешний вид стал мешать ребенку жить без стресса.
				</p>
			</div>
		</div>
	)
}

export default TeenageEpilation
