import React from 'react'
import s from './Price.module.css'

const Price = () => {
	return (
		<div className={s.price}>
			<div className='container'>
				<h1 className={s.title}>Прайс-лист</h1>
				<ul className={s.list}>
					{' '}
					Перманентный макияж
					<li className={s.liFirst}>
						Брови <p>5000 ₽</p>
					</li>
					<li>
						Губы <p>5000 ₽</p>
					</li>
					<li>
						Стрелка классическая <p>5000 ₽</p>
					</li>
					<li>
						Стрелка с растушевкой <p>5000 ₽</p>
					</li>
					<li>
						Межресничка <p>4000 ₽</p>
					</li>
					<li>
						Коррекция межреснички <p>2000 ₽</p>
					</li>
					<li>
						Коррекция <p>2500 ₽</p>
					</li>
					<li>
						Удаление ПМ ремувером <p>1500 ₽</p>
					</li>
				</ul>
				<ul className={s.list}>
					{' '}
					Депиляция
					<li className={s.liFirst}>
						Зона лица <p>от 100 ₽ до 250 ₽</p>
					</li>
					<li>
						Подмышечные впадины <p>250 ₽</p>
					</li>
					<li>
						Руки до локтя <p>400 ₽</p>
					</li>
					<li>
						Руки полностью <p>700 ₽</p>
					</li>
					<li>
						Бикини классика <p>500 ₽</p>
					</li>
					<li>
						Бикини глубокое <p>1000 ₽</p>
					</li>
					<li>
						Ноги до колена <p>500 ₽</p>
					</li>
					<li>
						Ноги полностью <p>1000 ₽</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Price
