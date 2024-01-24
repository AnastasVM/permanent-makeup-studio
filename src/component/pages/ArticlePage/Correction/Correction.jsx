import React from 'react'
import s from './Correction.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import sign from './images/внимание.png'
import cycle from './images/стрелки-по-кругу.png'
import woman from './images/принцесса.png'
import hand from './images/рука-с-ручкой.png'
import question from './images/вопрос.png'

const Correction = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Для чего нужна коррекция
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.icon}
					/>
				</h1>
				<p className={s.text}>
					Как минимум для того, чтобы считать процедуру перманентного макияжа
					завершённой!! Таким образом к коррекции следует относиться как к
					необходимому этапу, а не дополнительному.
				</p>

				<p className={s.text}>
					Основная процедура далеко не всегда даёт тот самый желаемый Вами
					результат. И это не означает, что мастер слабоват, пигмент
					некачественный или работа выполнена плохо‼️ Мы живые и клетки нашего
					организма тоже живые и они активно пытаются защитить Вас от инородных
					веществ.
				</p>
				<p className={s.text}>
					<img src={cycle} alt='' height={35} width={35} className={s.icon} />
					Чем лучше обменные процессы, тем выше необходимость коррекции!
				</p>
				<p className={s.text}>
					Итак, принимаем тот факт, что первичная процедура - это, своего рода,
					эскиз, который мастер делает насколько возможно хорошо, однако он
					требует доработки!!!
				</p>
				<p className={s.text}>
					<img src={sign} alt='' height={25} width={25} className={s.icon} />
					Тот самый оттенок, форма, густота, тень или напыление совершенно точно
					будут достигнуты в процессе коррекции.
				</p>
				<p className={s.text}>
					Будьте красивы!
					<img src={woman} alt='' height={35} width={35} className={s.icon} />
					Делайте коррекцию своевременно! И не забывайте про рефреш
					<img
						src={hand}
						alt=''
						height={25}
						width={25}
						className={s.iconHand}
					/>
				</p>

				<div className={s.photo}>
					{/* <img src={photo} className={s.photoImg} alt='' /> */}
				</div>
			</div>
		</div>
	)
}

export default Correction
