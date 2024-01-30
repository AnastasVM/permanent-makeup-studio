import React from 'react'
import s from './AutumnCare.module.css'
import ContentHeader from '../../../ContentHeader/ContentHeader'
import done from './images/успех.png'
import cream from './images/мыло.png'
import soap from './images/washing-hand.png'
import shower from './images/душ.png'
import bath from './images/ванна.png'
import dnk from './images/днк.png'
import cell from './images/клетки-тела.png'
import cream1 from './images/cream.png'
import oil from './images/воск.png'
import photo from './images/photo.jpeg'

const AutumnCare = () => {
	return (
		<div className={s.wrapper}>
			<div className='container'>
				<ContentHeader
					title={' /...'}
					link={'articleDepilation'}
					subtitle={'Статьи / Депиляция'}
				/>
				<h1 className={s.title}>
					<img src={cream} width={35} height={35} alt='' className={s.icon} />
					Как ухаживать за кожей в осенний период
				</h1>
				<h3 className={s.subtitle}>
					<img src={soap} width={35} height={35} alt='' className={s.icon} />
					Деликатное очищение
				</h3>

				<p className={s.text}>
					Ежедневный уход за кожей тела начинается с очищения. Осенью принимать
					душ или ванну
					<img
						src={bath}
						width={30}
						height={30}
						alt=''
						className={s.iconText}
					/>
					хочется как можно чаще: в зябкую погоду это проверенный способ
					согреться. Но помните: вода не должна быть слишком горячей. Чем выше
					температура, тем больше риск пересушить кожу. Горячая вода вымывает
					липиды эпидермиса, и сальным железам требуется время на восстановление
					защитной гидролипидной мантии кожи. Водопроводная вода, особенно
					жесткая, служит дополнительным раздражителем. Чтобы минимизировать ее
					неблагоприятное воздействие, нежиться под теплыми струйками
					<img
						src={shower}
						width={30}
						height={30}
						alt=''
						className={s.iconText}
					/>
					желательно не более 15 минут.
				</p>
				<h3 className={s.subtitle}>
					<img src={dnk} width={35} height={35} alt='' className={s.icon} />
					Обновление и защита
				</h3>

				<p className={s.text}>
					Не забывайте о регулярном отшелушивании. Осенью процесс естественного
					обновления эпидермиса замедляется. Коже нужно помочь избавиться от
					ороговевших клеток
					<img
						src={cell}
						width={30}
						height={30}
						alt=''
						className={s.iconText}
					/>
					. Скрабы на масляной основе идеально подходят для осени, потому что с
					ними вы получаете дополнительное увлажнение. Отшелушивание можно легко
					включить в свой утренний распорядок. Натуральные скрабы просты в
					использовании и содержат питательные ингредиенты.
				</p>
				<p className={s.text}>
					<img
						src={done}
						width={30}
						height={30}
						alt=''
						className={s.iconText}
					/>
					Важно! Не слишком часто отшелушивайте кожу, используйте их раз в
					неделю. Этим вы помогаете коже избавляться от мертвых клеток и
					стимулируете регенерацию.
				</p>
				<h3 className={s.subtitle}>
					<img src={cream1} width={35} height={35} alt='' className={s.icon} />
					Интенсивное увлажнение
				</h3>

				<p className={s.text}>
					Перейти на более увлажняющие средства ухода. Более насыщенное
					увлажнение перед сном, более увлажняющий крем для рук, губ и зоны
					вокруг глаз. Нужно тщательно вытирать кожу после контакта с водой и
					внимательнее следить за состояние кожи.
				</p>
				<p className={s.text}>
					Для всего тела можно использовать сухое масло
					<img src={oil} width={30} height={30} alt='' className={s.iconText} />
					. Такой продукт легко впитывается, прекрасно увлажняет и питает кожу,
					при этом не оставляет следов на одежде. Увлажняющие средства
					обеспечивают защитный барьер на коже, позволяя ей удерживать влагу и
					притягивать влагу к внешнему слою кожи.
				</p>
				<p className={s.text}>
					По мере того, как погода становится холоднее, лучше сократить
					потребление таких ингредиентов как ретиноиды и гликолевая кислота.
					Стоит использовать кремы или маску не чаще одного раза в неделю, чтобы
					помочь удалить изменение цвета, вызванное летним солнцем.
				</p>
				<div className={s.photo}>
					<img src={photo} className={s.photoImg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default AutumnCare
