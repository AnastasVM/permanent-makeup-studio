import React from 'react'
import s from './PainfulSensations.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import sign from './images/icons8-успех-94.png'
import lipsIcon from './images/губы.png'
import photo from './images/lips_.jpeg'
import eye from './images/глаз.png'
import attention from './images/внимание.png'
import exclamation from './images/восклицание.png'
import photoEye from './images/07573A6F-4390-4A96-B82B-59FE0432D9DF.jpeg'

const PainfulSensations = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					link={'articlePermanent'}
					subtitle={'Статьи / Перманент'}
					title={' /...'}
				/>
				<h1 className={s.title}>
					Перед процедурой перманентного макияжа многие девушки задаются
					вопросом:
				</h1>
				<p className={s.titleQuestion}>А больно ли это?</p>
				<h3 className={s.subtitle}>Давайте разбираться!</h3>
				<p className={s.text}>
					Сила болевых ощущений – индивидуальная характеристика. Одни могут
					терпеть даже сильную боль, а другие с трудом переносят незначительный
					дискомфорт.
				</p>
				<p className={s.text}>
					Будет ли больно делать перманент губ, бровей или век также зависит от
					ряда сопутствующих факторов:
				</p>

				<ul className={s.list}>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />
						психологический страх, который усиливает неприятные ощущения,
						вызывает напряжения в мышцах и мешает игле свободно двигаться;
					</li>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />
						зона перманентного макияжа: кожа в зоне губ, бровей и век обладает
						разным уровнем чувствительности;
					</li>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />
						низкий болевой порог;
					</li>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />
						профессионализм мастера;
					</li>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />
						качество оборудования;
					</li>
					<li>
						<img src={sign} alt='' height={25} width={25} className={s.icon} />{' '}
						правильный подбор средства анестезии.
					</li>
				</ul>
				<h3 className={s.subtitle}>
					Особенности татуажа на губах
					<img
						src={lipsIcon}
						width={40}
						height={40}
						alt=''
						className={s.iconLips}
					/>
				</h3>
				<p className={s.text}>
					Кожа в области губ относится к зоне средней чувствительности. На этом
					участке расположено много нервных окончаний, которые повышают
					болезненность в ходе процедуры. По этой же причине после
					пигментирования на губах появляется отек, припухлость и синячки,
					которые при правильном уходе проходят через 2-3 дня.
				</p>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>

				<h3 className={s.subtitle}>
					Болевые ощущения при перманенте на веках
					<img src={eye} width={30} height={30} alt='' className={s.iconEye} />
				</h3>
				<p className={s.text}>
					Веки – самая чувствительная зона со множеством нервных окончаний. Кожа
					в области верхнего и нижнего века тонкая и нежная, а любое ощущается
					гораздо сильнее, чем на других участках лица. Часто ситуацию
					усугубляет психологическая неготовность к тому, что мастер будет
					работать иглой в области века и межресничного пространства. Если
					клиентка боится и не доверяет специалисту, результат будет далек от
					идеала.
				</p>
				<p className={s.text}>
					Пигментирование обязательно проводится с применением анестезии. После
					правильной обработки в ходе работы иглой чувствуется лишь легкое
					покалывание. Анестетик действует быстро и эффективно, а при
					необходимости мастер проводит повторное обезболивание. Поэтому многое
					зависит от психологического настроя клиентки. Процедура занимает не
					более 1,5 часов с учетом подготовки. После татуажа в большинстве
					случаев формируется отек, покраснение, синячки.
				</p>
				<p className={s.text}>
					Чтобы минимизировать боль во время пигментирования мастера
					рекомендуют:
				</p>

				<ul className={s.list}>
					<li>
						<img
							src={attention}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						доверять специалисту, не нервничать и не волноваться накануне
						процедуры и непосредственно при татуаже;
					</li>
					<li>
						<img
							src={attention}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						накануне визита в студию отказаться от алкоголя, кофеина;
					</li>
					<li>
						<img
							src={attention}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						перенести процедуру, если необходимо в этот период принимать
						антибиотики;
					</li>
					<li>
						<img
							src={attention}
							alt=''
							height={25}
							width={25}
							className={s.icon}
						/>
						не делать татуаж во время менструации.
					</li>
				</ul>
				<div className={s.photo}>
					<img src={photoEye} className={s.photoImg} alt='' />
				</div>
				<p className={s.text}>
					<img
						src={exclamation}
						alt=''
						height={30}
						width={30}
						className={s.icon}
					/>
					ПОМНИТЕ
				</p>
				<p className={s.textImportant}>
					Сила болевых ощущений – индивидуальная характеристика! Одни могут
					терпеть даже сильную боль, а другие с трудом переносят незначительный
					дискомфорт.
				</p>
			</div>
		</div>
	)
}

export default PainfulSensations
