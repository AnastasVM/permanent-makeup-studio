import React from 'react'
import s from './DrySkin.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import blob from './images/капля-воды.png'
import leather from './images/кожа.png'
import water from './images/dermatologically.png'
import face from './images/face.png'
import photo from './images/photo.jpeg'

const DrySkin = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					<img src={leather} alt='' height={30} width={30} className={s.icon} />
					Сухая кожа
				</h1>
				<h3 className={s.subtitle}>
					Многие девушки сталкиваются с чрезмерной сухостью кожи
					<img
						src={water}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
				</h3>
				<p className={s.text}>
					Эта проблема не только усложняет процедуру шугаринта, но и доставляет
					клиенту много неудобств
					<img
						src={face}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
					. В косметологии чрезмерную сухость кожи, вызванную изменением
					гидролипидного баланса, называют термином «ксероз»
				</p>
				<p className={s.text}>
					Чаще всего ксероз может наблюдаться у клиентов с сахарным диабетом и
					другими эндокринными заболеваниями. При постоянном воздействии
					неблагоприятных внешних условий (влажность, низкая температура,
					солнечное облучение, травматизация).
				</p>
				<p className={s.text}>Рекомендации в уходе:</p>
				<ul className={s.list}>
					<li>
						<img src={blob} alt='' height={25} width={25} className={s.icon} />
						Использование скрабов только с мягким абразивом, чтобы исключить
						повоеждения кожи.
					</li>
					<li>
						<img src={blob} alt='' height={25} width={25} className={s.icon} />
						Исключить из ухода средства с содержанием спирта.
					</li>
					<li>
						<img src={blob} alt='' height={25} width={25} className={s.icon} />
						Используем мягкие моющие средства без поверхностно-активных веществ
						(безсульфатные)
					</li>
					<li>
						<img src={blob} alt='' height={25} width={25} className={s.icon} />
						Постоянно используем увлажняющие средства, создающие на поверхности
						кожи легкую защитную пленку.
					</li>
					<li>
						<img src={blob} alt='' height={30} width={30} className={s.icon} />
						Рекомендуется также глубокое увлажнение (обертывания).
					</li>
				</ul>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default DrySkin
