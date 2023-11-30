import React, { useState } from 'react'
import s from './Services.module.css'
import lips from './images/lips (2).jpeg'
import brows from './images/brows (2).jpeg'
import eyelids from './images/eyes.jpeg'
import depilation from './images/IMG_5315.jpeg'
import Card from '../Card/Card'

const Services = () => {
	const [works, setWorks] = useState([
		{ id: 1, image: lips, title: 'Перманентный макияж губ' },
		{ id: 2, image: brows, title: 'Перманентный макияж бровей' },
		{ id: 3, image: eyelids, title: 'Перманентный макияж век' },
		{ id: 4, image: depilation, title: 'Депиляция' },
	])
	console.log(works[0].id)
	return (
		<div className={s.services}>
			<div className='container'>
				<h1 className={s.title}>Мои услуги</h1>
				<div className={s.works}>
					{works.map(e => (
						<div className={s.col} key={e.id}>
							<div className={s.item}>
								<Card id={e.id} image={e.image} title={e.title} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
