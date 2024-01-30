import React from 'react'
import s from './Constriction.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import cancel from './images/отменить.png'
import question from './images/вопрос.png'
import cactus from './images/icons8-кактус-48.png'
import sign from './images/знак.png'
import hand from './images/указательный-смайлик-вверх.png'
import done from './images/успех.png'
import easily from './images/легко.png'

const Constriction = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Тут не стесняются
					<img
						src={cancel}
						width={30}
						height={30}
						alt=''
						className={s.iconCancel}
					/>
				</h1>
				<h3 className={s.subtitle}>
					Стеснение очень часто становится причиной отказа от процедуры
					эпиляции. Действительно ли стоит переживать по этому поводу
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h3>
				<p className={s.text}>
					В современном мире тренд на гладкость кожи является неоспоримым и
					безусловным. Главный вопрос заключается в том, каким именно образом
					удаляются ненужные волоски. Кто-то выбирает такие методы: как бритье
					или эпиляция химическими кремами. Кто-то предпочитает идти в ногу со
					временем и выбирает профессиональную эпиляцию.
				</p>
				<p className={s.text}>
					Но некоторые девушки оказываются перед дилеммой: они понимают, что от
					нежелательных волосков, конечно, лучше бы избавиться, но при этом не
					решаются на подобный шаг из-за того, что стесняются обратиться к
					мастеру за помощью. Условно их можно разделить на две категории:
				</p>
				<ul className={s.list}>
					<li>
						<img
							src={cactus}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						️Психологические. Что касается психологии, девушка иногда просто не
						готова раздеться перед незнакомым человеком. Для нее это слишком
						интимный момент.
					</li>
					<li>
						<img
							src={cactus}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						️Физические. Физические факторы стеснения касаются собственно тела.
						Стеснение может быть связано с особенностями телосложения –
						излишнего веса, целлюлита, растяжек и т. п. Иногда сдерживает от
						посещения процедуры наличие родинок, шрамов, татуировок или
						пирсинга.
					</li>
				</ul>
				<p className={s.text}>
					Насколько обоснованы все вышеперечисленные опасения
					<img
						src={question}
						width={25}
						height={25}
						alt=''
						className={s.iconTitle}
					/>
				</p>
				<p className={s.text}>
					Стоит ли из-за стеснения и страха показать себя перед незнакомым
					человеком отказываться от профессиональной эпиляции и мучиться,
					пытаясь удалить нежелательные волоски самостоятельно
					<img
						src={question}
						width={25}
						height={25}
						alt=''
						className={s.iconTitle}
					/>
				</p>
				<p className={s.text}>
					<img src={sign} width={30} height={30} alt='' className={s.icon} />
					Прежде всего нужно понимать, что для профессионального мастера
					удаление нежелательных волос – это в первую очередь работа, за которую
					он получает деньги, и поэтому заинтересован выполнить ее максимально
					качественно. Только такой подход позволит заполучить постоянных
					клиентов, готовых возвращаться к нему снова и снова. И, каким бы
					методом эпиляции ни работал мастер, его главная задача на первом этапе
					заключается в том, чтобы:
				</p>
				<ul className={s.list}>
					<li>
						<img
							src={cactus}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						️Правильно оценить состояние кожи;
					</li>
					<li>
						<img
							src={cactus}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						Определить тип волос;
					</li>
					<li>
						<img
							src={cactus}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						Подобрать методику, которая максимально качественно позволит удалить
						нежелательную растительность.
					</li>
				</ul>
				<p className={s.text}>
					Таким образом, при взгляде на посетительницу все внимание мастера
					сосредоточено на правильном соблюдении протокола процедуры.
				</p>
				<p className={s.text}>
					<img src={hand} alt='' height={25} width={25} className={s.icon} />
					Оказывается, специалист оценивает вовсе не вас! А, так сказать,
					предстоящий фронт работ. То же самое можно сказать и о самой процедуре
					депиляции: все внимание мастера направлено на то, чтобы эффективно и
					быстро удалить ненужные волоски.
				</p>
				<p className={s.text}>
					<img src={done} alt='' height={25} width={25} className={s.icon} />
					Не стоит отказываться от профессиональной услуги депиляции только
					из-за стеснения. Решившись однажды, вы поймете, что причин для
					переживаний нет – и будете смело посещать салон, радуясь своей гладкой
					и нежной коже!
					<img
						src={easily}
						width={25}
						height={25}
						alt=''
						className={s.iconTitle}
					/>
				</p>
				{/* <div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div> */}
			</div>
		</div>
	)
}

export default Constriction
