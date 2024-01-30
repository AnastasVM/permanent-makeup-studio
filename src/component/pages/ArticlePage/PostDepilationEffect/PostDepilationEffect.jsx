import React from 'react'
import s from './PostDepilationEffect.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import candy from './images/icons8-конфеты-на-хеллоуин-64.png'
import sign from './images/знак.png'
import question from './images/вопрос.png'
import photo from './images/WhatsApp Image 2024-01-18 at 11.32.40.jpeg'

const PostDepilationEffect = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Что нужно, для того чтобы сделать эффект после депиляции на 21 день
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h1>

				<h3 className={s.subtitle}>
					<img src={candy} width={25} height={25} alt='' className={s.icon} />
					Длина
				</h3>
				<p className={s.text}>
					Вам необходимо отрастить волоски. Длина волосков должна быть от 3 - 5
					мм. Такая длина позволит провести процедуру идеально чистой и вам
					хватит на 21 день гладкости кожи.
				</p>
				<h3 className={s.subtitle}>
					<img src={candy} width={25} height={25} alt='' className={s.icon} />
					Пилинг
				</h3>
				<p className={s.text}>
					За сутки до депиляции можно сделать пилинг (скраб/ щетка для сухого
					массажа) . Это обеспечит тотальное удаление шелушений на коже, а
					сахарной пасте или воску доступ ко всем волоскам и снизит болезненные
					ощущения во время депиляции.
				</p>
				<h3 className={s.subtitle}>
					<img src={candy} width={25} height={25} alt='' className={s.icon} />
					Не использовать крема за сутки до процедуры!!!
				</h3>
				<p className={s.text}>
					Это важно, так вы усложните работу мастеру, материал не будет
					крепиться к волоскам, а соскальзывать с них, как итог длительные часы
					депиляции и не чистая кожа.
				</p>
				<h3 className={s.subtitle}>
					<img src={candy} width={25} height={25} alt='' className={s.icon} />
					Забудьте о бритве
				</h3>
				<p className={s.text}>
					Регулярный шугаринг или ваксинг смягчает волоски, их становится
					меньше, они светлеют, благодаря чему будут менее заметны.
				</p>
				<h3 className={s.subtitle}>
					<img src={candy} width={25} height={25} alt='' className={s.icon} />
					Регулярность
				</h3>
				<p className={s.text}>
					Не забывайте записываться на следующую процедуру депиляции через ~ 21
					день. Я с радостью помогут подобрать вам удобный день и время для
					следующей процедуры, а за сутки позвоню вам и напомню, что пора придти
					за гладкостью.
				</p>
				<p className={s.text}>
					<img src={sign} width={25} height={25} alt='' className={s.icon} />В
					депиляции важна регулярность
				</p>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default PostDepilationEffect
