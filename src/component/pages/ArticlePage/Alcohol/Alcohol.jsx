import React from 'react'
import s from './Alcohol.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import circle from './images/круг.png'
import honey from './images/мед.png'
import wineglass from './images/бокал-для-вина.png'
import sign from './images/важно.png'
import exclamation from './images/знак.png'
import woman from './images/женщина-пожимает-плечами.png'

const Alcohol = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					Депиляция
					<img
						src={honey}
						alt=''
						height={40}
						width={40}
						className={s.iconTitle}
					/>
					и алкоголь
					<img
						src={wineglass}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Чтобы понять, как алкоголь может повлиять при депиляции, нужно
					посмотреть как вообще алкоголь влияет на организм!
				</p>
				<p className={s.text}>
					<img
						src={wineglass}
						alt=''
						height={35}
						width={35}
						className={s.icon}
					/>
					Алкоголь оказывает влияние на:
				</p>

				<p className={s.text}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Сердечно-сосудистую систему ( сперва расширяет, затем сужает сосуды)
				</p>

				<p className={s.text}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Кровь (провоцирует ее загущение и образование тромбов)
				</p>
				<p className={s.text}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Нервную систему (затормаживает реакцию, но вызывает эмоциональную
					нестабильность)
				</p>
				<p className={s.text}>
					<img src={circle} width={20} height={20} alt='' className={s.icon} />
					Кожу (обезвоживает, усиливает воспалительные реакции, замедляет
					регенерацию)
				</p>
				<p className={s.text}>
					<img src={sign} width={35} height={35} alt='' className={s.icon} />
					Соответственно при употреблении алкоголя перед депиляцией, мы не можем
					предсказать реакцию клиента на боль, она может притупиться, может
					стать неадекватной или просто болевые ощущения усилятся
					<img
						src={woman}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</p>
				<p className={s.text}>
					<img
						src={exclamation}
						width={25}
						height={25}
						alt=''
						className={s.icon}
					/>
					Из-за расширения и сужения сосудов температура кожи клиента может
					меняться, что затруднит работу мастера!
				</p>
				<p className={s.text}>
					<img
						src={exclamation}
						width={25}
						height={25}
						alt=''
						className={s.icon}
					/>
					Восстановление кожи после процедуры будет замедленно, вероятность
					воспалительных реакций и последующих врастаний из-за общего состояния
					кожи будет выше!
				</p>
			</div>
		</div>
	)
}

export default Alcohol
