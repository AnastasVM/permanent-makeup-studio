import React from 'react'
import s from './LipAugmentation.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import question from './images/вопрос.png'
import important from './images/высокий-приоритет.png'
import scales from './images/весы.png'
import circle from './images/губы.png'
import sign from './images/знак.png'

const LipAugmentation = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Что сначала: перманент губ или увеличение
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h1>
				<h3 className={s.subtitle}>
					<img
						src={important}
						width={35}
						height={35}
						alt=''
						className={s.iconImportant}
					/>
					Очень важный пост, читайте до конца!
				</h3>
				<p className={s.text}>
					Действительно, во многих случаях одним лишь только филлером или одной
					лишь только микропигментацией губ не обойтись. Когда, например, губы
					тонкие, ассиметричные, бледные, с сильно размытыми границами. В этом
					случае нужно решать и проблему отсутствия нужного объема и цвета.
				</p>
				<p className={s.text}>
					<img
						src={scales}
						alt=''
						height={35}
						width={35}
						className={s.iconScales}
					/>
					При принятии решения о том лучше ли сначала увеличить губы филлером
					или сделать перманентный макияж губ, нужно учитывать следующие
					факторы:
				</p>
				<ul className={s.list}>
					<li>
						<img
							src={circle}
							alt=''
							height={30}
							width={30}
							className={s.icon}
						/>
						при увеличении филлером кожа губ растягивается. А это значит - если
						губы увеличивать когда на них уже сделан перманентный макияж - цвет
						станет светлее;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={30}
							width={30}
							className={s.icon}
						/>
						при нанесении перманентного макияжа на выпуклые участки в середине
						губ, которые усиливаются после введения филлера, пигмент "берется"
						слабее;
					</li>
					<li>
						<img
							src={circle}
							alt=''
							height={30}
							width={30}
							className={s.icon}
						/>
						при увеличении, особенно при сильном становится еще менее заметным
						родная граница губ. Соответственно если татуаж губ уже сделан,
						например в безконтурной технике, после введения филлера потребуется
						коррекция.
					</li>
				</ul>
				<p className={s.text}>
					<img
						src={sign}
						alt=''
						height={30}
						width={30}
						className={s.iconSign}
					/>
					<img
						src={sign}
						alt=''
						height={30}
						width={30}
						className={s.iconSign}
					/>
					<img
						src={sign}
						alt=''
						height={30}
						width={30}
						className={s.iconSign}
					/>
					Всем своим клиентам лично я предлагаю сделать сначала перманентный
					макияж, потому что практически все (!) после филлеров приходят на ПМ с
					асимметрией!
				</p>
				<p className={s.text}>
					А сделать нужно ровно. После выхода геля, даже частичного, через 3-6
					месяцев - проявляется асимметрия. Чем больше был объём увеличения -
					тем заметнее. Чтобы таких проблем не было, сначала делается
					перманентный макияж губ качественно и ровно, потом по заложенной
					границе вводится филлер.
				</p>
				{/* <div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div> */}
			</div>
		</div>
	)
}

export default LipAugmentation
