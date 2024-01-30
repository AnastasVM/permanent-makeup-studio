import React from 'react'
import s from './Sugaring.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import honey from './images/мед.png'
import cycle from './images/стрелки-по-кругу.png'
import done from './images/успех.png'

const Sugaring = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					<img src={honey} width={40} height={40} alt='' className={s.icon} />
					Причины для осенне-зимнего шугаринга
				</h1>

				<h3 className={s.subtitle}>
					<img src={cycle} width={35} height={35} alt='' className={s.icon} />
					Если депиляцию начинать осенью и проводить регулярно на протяжении
					всего зимнего периода, то волоски будут становиться все тоньше и
					светлее, интервалы между сеансами – длиннее. К пляжному сезону можно
					будет гордиться своей гладкой кожей.
				</h3>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					При большом количестве одежды легче отрастить волоски нужной длины;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />В
					первый раз кожа может отреагировать покраснением, которое будет скрыто
					от окружающих;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					Шугаринг зимой позволяет проводить меньшее количество процедур,
					благодаря продолжительности результата (3 недели);
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					Использование станка осенью приводит к раздражению, сухости кожи;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />В
					отличие от бритвы, после депиляции волоски истончаются, замедляют свой
					рост;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					Отшелушивающие свойства сахарных частичек заменяют процедуру пилинга;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					Гладкий кожный покров нужен не только летом, но и зимой;
				</p>
				<p className={s.text}>
					<img src={done} width={30} height={30} alt='' className={s.icon} />
					Кожа успевает привыкнуть к процедуре!
				</p>
			</div>
		</div>
	)
}

export default Sugaring
