import React from 'react'
import s from './ArticlePermanentPage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'
import photo from './images/IMG_8553.JPG'
import { Link } from 'react-router-dom'
import success from './images/icons8-цель-48.png'
import done from './images/icons8-успех-94.png'

const ArticlePermanentPage = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader title={'Статьи / Перманент'} />

				<h1 className={s.titleArticle}>Статьи</h1>
				<ul className={s.articles}>
					<li className={s.listLi}>
						<Link to='/preparationDepilation' className={s.link}>
							Подготовка к процедуре перманентного макияжа
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/contraindication' className={s.link}>
							Противопоказания к проведению процедуры перманентного макияжа
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/periodPage' className={s.link}>
							Сколько держится перманентный макияж
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/painfulSensations' className={s.link}>
							Болевые ощущения при перманентом макияже
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/correction' className={s.link}>
							Для чего нужна коррекция
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/blueEyebrows' className={s.link}>
							Почему брови становятся серыми или синими
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/fixation' className={s.link}>
							Почему татуаж может плохо приживаться
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/refresh' className={s.link}>
							Рефреш в перманенте
						</Link>
					</li>

					<li className={s.listLi}>
						Правила ухода за губами после процедуры перманентного макияжа
					</li>
					<li className={s.listLi}>Ботокс, филлеры и перманентный макияж</li>
					<li className={s.listLi}>
						Что сначала: перманент губ или увеличение
					</li>
				</ul>

				<h1 className={s.title}>
					<img
						src={success}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
					Почему перманент так популярен?
				</h1>
				<h3 className={s.subtitle}>
					Перманентный макияж давно завоевал миллионы женских сердец по всему
					миру. И это неудивительно, ведь он обладает рядом существенных
					преимуществ:
				</h3>
				<ul className={s.list}>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Дает возможность поспать лишние полчаса утром;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Гармонизирует черты лица, исправляет небольшую асимметрию, если она
						есть;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Скрывает шрамы и рубцы;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Создает иллюзию густых и пушистых бровей;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Возвращает контур губам, которые стали менее яркими и четкими из-за
						возраста, травм или регулярных герпетических высыпаний;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Дает идеально ровные контуры, которые значительно облегчают
						нанесение праздничного яркого макияжа, ведь ничего не стоит провести
						дополнительные штрихи карандашом или тенями по бровям с перманентом,
						либо подчеркнуть губы более яркой помадой;
					</li>
					<li>
						<img src={done} alt='' height={25} width={25} className={s.icon} />
						Дарит уверенность в себе везде и всегда – на пляже, в сауне, во
						время спортивных занятий, сразу после душа или после пробуждения.
					</li>
				</ul>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default ArticlePermanentPage
