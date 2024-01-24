import React from 'react'
import s from './BlueEyebrows.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import question from './images/вопрос.png'
import smiley from './images/face.png'
import important from './images/важно.png'
import photo from './images/Брови.jpeg'

const BlueEyebrows = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Почему брови{' '}
					<img
						src={smiley}
						width={35}
						height={35}
						alt=''
						className={s.iconSmiley}
					/>
					становятся серыми или синими
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.icon}
					/>
				</h1>
				<p className={s.text}>
					Хотелось новенький и натуральный перманент, а получились серые или
					синие брови. Такое вот перманентное «Ожидание и реальность».
				</p>

				<p className={s.text}>
					Почему же брови меняют цвет? Вы удивитесь, если узнаете, что на самом
					деле перманент в коже не меняет оттенок после процедуры.
				</p>
				<p className={s.text}>
					Всё дело в рассеивании света. Синие частицы при прохождении
					неоднородной среды, а это наша кожа (дерма и эпидермис) – больше всего
					подвергаются преломлениям и отражениям.
				</p>
				<p className={s.text}>
					Здесь, в глубинах нижних слоев дермы, кроется ответ на вопрос: «Почему
					брови сереют и синеют»? Пигмент занесен слишком глубоко в дерму. И
					человеческий глаз не способен увидеть реальный цвет бровей (чёрный или
					коричневый). Мы видим лишь серый или синий цвет.
				</p>
				<p className={s.text}>
					<img
						src={important}
						alt=''
						height={30}
						width={30}
						className={s.icon}
					/>
					Важно. Цвет пигмента в глубине дермы не меняется со временем, оттенок
					преображается только для человеческого глаза. И если мастер заносит
					коричневый пигмент слишком глубоко в дерму, для окружающих он кажется
					серо-синим. Такой закон в физике называют – эффектом Тиндаля.
				</p>

				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default BlueEyebrows
