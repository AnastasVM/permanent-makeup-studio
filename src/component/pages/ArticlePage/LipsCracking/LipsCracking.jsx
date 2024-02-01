import React from 'react'
import s from './LipsCracking.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import question from './images/вопрос.png'
import lips from './images/губы.png'
import close from './images/удалить.png'
import yes from './images/icons8-галочка-94.png'
import grass from './images/icons8-базилик-64.png'

const LipsCracking = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
				/>
				<h1 className={s.title}>
					Почему трескаются губы
					<img
						src={lips}
						width={35}
						height={35}
						alt=''
						className={s.iconTitle}
					/>
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h1>
				<p className={s.text}>
					Кожа губ — самая тонкая на лице (и вообще на теле человека). Она
					практически лишена сальных желез, кроме малого их количества в уголках
					рта, и следовательно, изначально склонна к сухости.
				</p>
				<p className={s.text}>
					Недостаточное увлажнение и внешние повреждения тонкой кожи нарушают
					сцепление клеток поверхностного слоя. В результате формируются
					микротрещины, а из-за малой толщины эпидермиса и большой нагрузки (мы
					улыбаемся, едим, пьем, целуемся, покусываем губы) они не успевают
					заживать, превращаются в видимые шелушения, болезненные и даже
					кровоточащие ранки.
				</p>
				<h3 className={s.subtitle}>Внешние причины:</h3>
				<ul className={s.list}>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						️Погодные условия: пересушенность воздуха, ветреность, солнечная
						активность, низкие температуры (мороз)
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Никотинозависимость
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Облизование, кусание
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Ротовой тип дыхания
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Неправильное питание
					</li>
				</ul>
				<h3 className={s.subtitle}>Внутренние причины:</h3>
				<ul className={s.list}>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Наличие аллергии
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Причины стоматологического характера
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Сбои в функционировании желудка и других органах пищеварения
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Герпес
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Анемия железодефицитного типа
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Диабет
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Гипертиреоз - нарушение работы щитовидной железы
					</li>
					<li>
						<img src={close} alt='' height={25} width={25} className={s.icon} />
						Снижение защитных функций организма ( снижен иммунитет)
					</li>
				</ul>
				<h3 className={s.subtitle}>
					Как лечить
					<img
						src={question}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
					(рекомендация)
				</h3>
				<ul className={s.list}>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Фукорцин– противовирусное и антимикотическое средство
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Мирамистин— антисептик
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Метрогил дента– действует против бактерий и простейших
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Вазелин– для смягчения и предотвращения пересыхания
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Бепантен– способствует заживлению и увлажняет
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Солкосерил– активизирует регенерацию
					</li>
				</ul>
				<h3 className={s.subtitle}>
					Народная медицина
					<img
						src={grass}
						width={30}
						height={30}
						alt=''
						className={s.iconTitle}
					/>
				</h3>
				<ul className={s.list}>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Применение масел
						<br />
						Эффективным является применение различных масел: растительного,
						облепихового, миндального, касторового, кокосового, шиповникового,
						чайного дерева, зверобоя, зародышей пшеницы, какао, а также
						сливочного.
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Соки
						<br />
						Губы смазывают соком столетника, моркови, каланхоэ, подорожника,
						чистотела.
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Соляной раствор
						<br />
						Соляной раствор помогает лечить заеды. Для его приготовления
						достаточно растворить малую ложку соли в стакане воды. Средство
						используют в виде примочек.
					</li>
					<li>
						<img src={yes} alt='' height={25} width={25} className={s.icon} />
						Целебный бальзам
						<br />
						Для этого нужно на паровой бане растопить натуральный воск и смешать
						его с равными долями кокосового, оливкового масел и порошкового
						какао. Можно также прибавить масло ши или мёд.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default LipsCracking
