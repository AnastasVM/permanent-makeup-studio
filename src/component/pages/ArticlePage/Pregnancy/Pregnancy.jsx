import React from 'react'
import s from './Pregnancy.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import pregnancy from './images/беременность.png'
import woman from './images/icons8-беременная-48.png'
import honey from './images/мед.png'
import sign from './images/важно.png'
import cycle from './images/стрелки-по-кругу.png'
import contraindications from './images/icons8-стой-64.png'
import exclamation from './images/знак.png'

const Pregnancy = () => {
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
					/>{' '}
					и беременность
					<img
						src={pregnancy}
						alt=''
						height={35}
						width={35}
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Во время беременности каждой женщине хочется оставаться
					привлекательной и ухоженной. Тем более что у многих будущих мам под
					воздействием гормональных колебаний ускоряет рост волос на теле. Но
					период беременности вносит серьезные коррективы не только в правила
					питания, но и ухода за собой.
				</p>
				<p className={s.text}>
					Необходимость в регулярном удалении нежелательных волосков в период
					беременности значительно возрастает. Это связано с несколькими
					факторами:
				</p>
				<ul className={s.list}>
					<li>
						<img
							src={woman}
							alt=''
							height={30}
							width={30}
							className={s.iconList}
						/>
						У многих женщин в «интересном» положении под воздействием
						гормональных изменений усиливается рост волос не только на теле, но
						и на лице;
					</li>
					<li>
						<img
							src={woman}
							alt=''
							height={30}
							width={30}
							className={s.iconList}
						/>
						Чувствительность кожи значительно повышается, поэтому даже привычное
						бритье может стать причиной сильной аллергической реакции,
						покраснений и высыпаний;
					</li>
					<li>
						<img
							src={woman}
							alt=''
							height={30}
							width={30}
							className={s.iconList}
						/>
						У беременных женщин усиливается потоотделение – волоски на теле
						задерживают пот, создавая благоприятные условия для активного
						размножения болезнетворных бактерий;
					</li>
					<li>
						<img
							src={woman}
							alt=''
							height={30}
							width={30}
							className={s.iconList}
						/>
						Неприятный запах пота лишает будущую маму уверенности в себе и
						вызывает множество комплексов.
					</li>
				</ul>
				<h3 className={s.subtitle}>
					<img src={sign} width={35} height={35} alt='' className={s.icon} />
					Эпиляция во время беременности проводится с учетом срока, общего
					самочувствия беременной женщины, а также есть ли риски для растущего
					малыша.
				</h3>
				<p className={s.text}>
					<img src={cycle} alt='' height={30} width={30} className={s.icon} />В
					первом триместре формируются все важнейшие внутренние органы и системы
					плода. На ранних сроках лучше отказаться от способов удаления, которые
					вызывают болевые ощущения. В это время любые боли переносятся очень
					болезненно и часто провоцируют тонус матки, становясь причиной
					выкидыша.
				</p>
				<p className={s.text}>
					<img src={cycle} alt='' height={30} width={30} className={s.icon} />В
					Эпиляция для беременных при втором триместре разрешена и не становится
					угрозой для плода. Болевой порог нормализуется, неприятные ощущения
					больше не беспокоят, даже при удалении волос в интимном месте. Для
					первого раза лучше выбирать шугаринг или бритье.
				</p>
				<p className={s.text}>
					<img src={cycle} alt='' height={30} width={30} className={s.icon} />В
					Эпиляцию во время третьего триместра беременности разрешается сделать,
					но нужно выбирать только безопасные методы без побочных эффектов.
				</p>
				<h3 className={s.subtitle}>
					<img
						src={contraindications}
						width={35}
						height={35}
						alt=''
						className={s.icon}
					/>
					Противопоказания к депиляции во время беременности:
				</h3>
				<ul className={s.listContraindications}>
					<li>
						Склонность к частым аллергиям, в том числе и аллергическую реакцию
						на один из компонентов в составе специального средства;
					</li>
					<li>
						Повышенный маточный тонус и угроза преждевременного прерывания;
					</li>
					<li>Обострение вируса герпеса в организме;</li>
					<li>Любые заболевания инфекционного характера;</li>
					<li>Травмы, ранки, царапины на коже;</li>
					<li>Сахарный диабет;</li>
					<li>Варикозное расширение вен;</li>
					<li>Сильный токсикоз;</li>
					<li>Стрессы, депрессии, расстройства психического характера.</li>
				</ul>
				<p className={s.text}>
					<img
						src={exclamation}
						alt=''
						height={30}
						width={30}
						className={s.icon}
					/>
					К проведению эпиляции во время всех триместров беременности нужно
					относиться очень осторожно, так как иногда она становится опасна для
					женщин в «интересном» положении.
				</p>
			</div>
		</div>
	)
}

export default Pregnancy
