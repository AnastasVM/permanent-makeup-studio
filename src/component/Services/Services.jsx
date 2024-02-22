import React, { useState } from 'react'
import s from './Services.module.css'
import lips from './images/lips.jpeg'
import brows from './images/brows.jpeg'
import eyelids from './images/eyes.jpeg'
import depilation from './images/IMG_8759.jpg'
import Card from '../Card/Card'

const Services = () => {
	const [works, setWorks] = useState([
		{
			id: 1,
			image: lips,
			title: 'Перманентный макияж губ',
			text: '5000 ₽',
		},
		{
			id: 2,
			image: brows,
			title: 'Перманентный макияж бровей',
			text: '5000 ₽',
		},
		{
			id: 3,
			image: eyelids,
			title: 'Перманентный макияж век',
			text: '4000 - 5000 ₽',
		},
		{ id: 4, image: depilation, title: 'Депиляция', text: '150 - 1000 ₽' },
	])

	return (
		<div className={s.services}>
			<div className='container'>
				<h1 className={s.title}>Мои услуги</h1>
				<div className={s.works}>
					{works.map(e => (
						<div className={s.col} key={e.id}>
							<div className={s.item}>
								<Card id={e.id} image={e.image} title={e.title} text={e.text} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
