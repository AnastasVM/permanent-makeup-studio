import React from 'react'
import s from './ReactionDepilation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import honey from './images/мед.png'
import sign from './images/знак.png'
import circle from './images/круг.png'
import question from './images/вопрос.png'

const ReactionDepilation = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Реакция кожи на депиляцию
					<img
						src={honey}
						width={40}
						height={40}
						alt=''
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Сам по себе процесс удаления волос противоестественен, поэтому реакция
					кожи это нормально
					<img
						src={sign}
						width={25}
						height={25}
						alt=''
						className={s.iconSign}
					/>
				</p>
				<p className={s.text}>
					Самое главное, чтобы мастер соблюдал протокол проведения процедуры, а
					вы как клиент четко соблюдали рекомендации по уходу, который вам
					назначит.
				</p>

				<h3 className={s.subtitle}>Самые частые кожные реакции:</h3>
				<h3 className={s.subtitle}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Мелкие гнойнички
				</h3>
				<p className={s.text}>
					Чаще всего появляются при несоблюдении назначений домашнего ухода за
					депелируемой зоной, например после занятия спортом в первые два дня,
					когда пот попадает в ещё открытые лунки.
				</p>
				<p className={s.textSubtitle}>
					Что делать
					<img
						src={question}
						width={25}
						height={25}
						alt=''
						className={s.iconSign}
					/>
				</p>
				<p className={s.text}>
					Первые два дня обрабатывать хлоргескидином (утро/вечер) и
					себорегулирующей пудрой.
				</p>
				<h3 className={s.subtitle}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Краснота
				</h3>
				<p className={s.text}>
					Это нормальная реакция кожи на удаление волоса, проходит в течении 20
					мин - 2 часов.
				</p>
				<p className={s.textSubtitle}>
					Что делать
					<img
						src={question}
						width={25}
						height={25}
						alt=''
						className={s.iconSign}
					/>
				</p>
				<p className={s.text}>
					Не трогать руками, не мазать кремами, все необходимые меры уже
					предпринял ваш мастер.
				</p>
				<h3 className={s.subtitle}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Крапивница
				</h3>
				<p className={s.text}>
					Круглые папулки слегка красноватого цвета, аллергическая реакция кожи.
				</p>
				<p className={s.textSubtitle}>
					Что делать
					<img
						src={question}
						width={25}
						height={25}
						alt=''
						className={s.iconSign}
					/>
				</p>
				<p className={s.text}>
					Обычно проходит сама, но если такая реакция возникла впервые у
					клиента, нанести антигистаминное средство.
				</p>
			</div>
		</div>
	)
}

export default ReactionDepilation
