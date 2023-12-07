import React from 'react'
import s from './AboutMe.module.css'
import Inna from './images/IMG_8534.png'

const AboutMe = () => {
	return (
		<div className={s.about}>
			<div className='container'>
				<h1 className={s.title}>Всем привет!</h1>
				<h3 className={s.subtitle}>
					Меня зовут Инна Якушенко, <br /> я мастер перманентного макияжа и
					депиляции.
				</h3>
				<div className={s.wrapper}>
					<div className={s.photo}>
						<img className={s.img} src={Inna} alt='Ina'></img>
					</div>
					<div className={s.intro}>
						<p className={s.text}>
							{' '}
							В сфере индустрии красоты я более 6 лет и очень забочусь о
							качестве предоставляемых услуг. Я постоянно развиваюсь, повышаю
							свою квалификацию и обучаюсь тонкостям новых техник у различных
							тренеров в этой области.{' '}
						</p>
						<p className={s.text}>
							Я выбрала данную сферу деятельности потому что, она даёт
							возможность мне закрывать все мои внутренние потребности. Я обожаю
							общаться с людьми, делать их счастливыми и красивыми, это
							отдельный вид кайфа. В перманенте можно постоянно развиваться, нет
							никаких пределов.
						</p>
						<p>
							Больше всего обожаю делать губы в полупомадном прокрасе и пудровые
							брови с градиентом. Поярче или более естественно, плотнее или едва
							заметно - любое пожелание Я смогу воплотить в жизнь!
						</p>
					</div>
				</div>

				<div className={s.formation}>
					<div className={s.diploma}>
						<img></img>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutMe
