import React from 'react'
import s from './ArticleDepilationPage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'
import photo from './images/img.jpeg'
import { Link } from 'react-router-dom'
import honey from './images/мед.png'
import question from './images/вопрос.png'
import easily from './images/легко.png'
import done from './images/успех.png'

const ArticleDepilationPage = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader title={'Статьи / Депиляция'} />

				<h1 className={s.titleArticle}>Статьи</h1>
				<ul className={s.articles}>
					<li className={s.listLi}>
						<Link to='/shaving' className={s.link}>
							Бритье между процедурами депиляции — плохая идея
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/ingrownHairs' className={s.link}>
							Почему все таки врастают волосы
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/constriction' className={s.link}>
							Тут не стесняются
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/postDepilationEffect' className={s.link}>
							Эффект после депиляции на 21 день
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/sugaring' className={s.link}>
							Причины для осенне-зимнего шугаринга
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/reactionDepilation' className={s.link}>
							Реакция кожи на депиляцию
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/pregnancy' className={s.link}>
							Депиляция и беременность
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/alcohol' className={s.link}>
							Депиляция и алкоголь
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/teenageEpilation' className={s.link}>
							Подростковая эпиляция
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/nutrition' className={s.link}>
							Питание и депиляция
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/sunProtection' className={s.link}>
							Как защищать кожу от солнца после депиляции
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/scrubbing' className={s.link}>
							Скрабирование
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/autumnCare' className={s.link}>
							Как ухаживать за кожей в осенний период
						</Link>
					</li>

					<li className={s.listLi}>
						<Link to='/drySkin' className={s.link}>
							Сухая кожа
						</Link>
					</li>
					<li className={s.listLi}>
						<Link to='/careСold' className={s.link}>
							Что нужно и не нужно коже в холода
						</Link>
					</li>
				</ul>

				<h1 className={s.title}>
					<img src={honey} width={35} height={35} alt='' className={s.icon} />
					Как подготовиться к депиляции воском и шугарингу
					<img
						src={question}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Если вы еще не делали шугаринг или эпиляцию (депиляцию) воском, данные
					рекомендации будут очень кстати
					<img
						src={easily}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
				</p>
				<p className={s.text}>
					Всего несколько простых советов поможет перенести первую процедуру
					удаления волос почти безболезненно и продлить эффект:
				</p>
				<ul className={s.list}>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Отрастите волосы. Для достижения максимального эффекта и комфорта
						длина волосков должна быть не менее 3-5 мм. В этом случае мы
						проведем сеанс быстро и сумеем зацепить всю нежелательную
						растительность. Но сразу хочу предупредить: принцип «чем длиннее,
						тем лучше» не всегда работает — если волосы будут очень длинными и
						густыми, удалять их будет больнее. Поэтому придерживайтесь длины в
						3-5мм.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Запланируйте эпиляцию заранее и определите подходящее время. Лучше
						всего проводить процедуру на первой неделе после менструации.
						Особенно это касается подготовки к эпиляции глубокого бикини.
						Болевой порог увеличивается, вы меньше чувствуете неприятные
						ощущения. И я очень советую не делать шугаринг или ваксинг во время
						месячных.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Не стесняйтесь перед мастером. Во-первых, мы и не такое видели,
						во-вторых, вы же не стесняетесь перед гинекологом? Мы не врачи, но
						тоже обладаем специальной подготовкой, соблюдаем все
						санитарно-гигиенические нормы и технологию работы с кожей. Для нас
						эпиляция бикини — обычная процедура, к тому же, одна из самых
						популярных.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Не записывайтесь на процедуру в день участия в важном для вас
						событии. В первый раз болевые ощущения выше, чем в последующие. Это
						может сказаться на настроении. Боль сильнее, потому что вы приходите
						к нам после долгого использования бритвы, волоски большие и толстые,
						а из некоторых фолликулов появляются даже 2-3 волоска. Удалить все
						это непросто, за один раз захватывается больше волос, чем при
						последующих процедурах. После эпиляции коже нужен покой хотя бы в
						течение 24 часов.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Чтобы правильно подготовиться к эпиляции воском или шугарингу (в том
						числе зоны бикини) в первый и последующие разы необходимо за 3-4 дня
						до процедуры проскрабировать кожу места, в котором будут удалены
						волосы. Это поможет удалить ороговевшие частички кожи и увеличить
						сцепление волосков с сахарной пастой или воском. Внимание! Скраб
						можно применять не позже 3 дней до сеанса, чтобы кожа успела
						восстановиться от механического воздействия.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						За 1-2 дня до и 1 день после процедуры не рекомендую заниматься
						спортом и посещать сауну. Обильное потоотделение может
						спровоцировать раздражение на коже.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Накануне не используйте косметические средства, в составе которых
						есть масла. Они обволакивают кожу и волоски, уменьшая их сцепление с
						воском и пастой.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Об уходовой косметике: постарайтесь не экспериментировать хотя бы за
						несколько дней сеанса: никто не знает, как кожа отреагирует на новое
						средство.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Не забудьте проконсультироваться с мастером перед записью,
						рассказать о заболеваниях, приеме медикаментов, аллергии и т.д.
						Противопоказания никто не отменял. Ваша цель — дать мастеру максимум
						информации о себе и своем здоровье, чтобы избежать негативных
						последствий.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						Проверьте на коже наличие ожогов, царапин, гематом в месте удаления
						волос. Если что-то из этого есть, следует подождать с эпиляцией.
					</li>
					<li>
						<img src={done} width={30} height={30} alt='' className={s.icon} />
						При подготовке к эпиляции воском или шугарингу (особенно это
						касается глубокого бикини) наденьте свободную одежду (белье) из
						натуральных тканей. Отлично подойдет хлопок. Синтетическая одежда
						может вызвать дискомфорт и раздражение.
					</li>
				</ul>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default ArticleDepilationPage
