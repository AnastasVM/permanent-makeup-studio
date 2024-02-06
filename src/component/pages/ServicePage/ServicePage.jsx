import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './ServicePage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'
import lips1 from './images/lips/1.jpeg'
import lips2 from './images/lips/2.jpeg'
import lips3 from './images/lips/3.jpeg'
import lips4 from './images/lips/4.jpeg'
import lips5 from './images/lips/5.jpeg'
import lips6 from './images/lips/6.jpeg'
import lips7 from './images/lips/7.jpeg'
import lips8 from './images/lips/8.jpeg'
import lips9 from './images/lips/9.jpeg'
import lips10 from './images/lips/10.jpeg'
import lips11 from './images/lips/11.jpeg'
import lips12 from './images/lips/12.jpeg'
import lips13 from './images/lips/13.jpeg'
import lips14 from './images/lips/14.jpeg'
import lips15 from './images/lips/15.jpeg'
import lips16 from './images/lips/16.jpeg'
import lips17 from './images/lips/17.jpeg'
import lips18 from './images/lips/18.jpeg'
import lips19 from './images/lips/19.jpeg'
import lips20 from './images/lips/20.jpeg'
import lips21 from './images/lips/21.jpeg'
import lips22 from './images/lips/22.jpeg'
import lips23 from './images/lips/23.jpeg'
import lips24 from './images/lips/24.jpeg'
import lips25 from './images/lips/25.jpeg'
import lips26 from './images/lips/26.jpeg'
import lips27 from './images/lips/27.jpeg'
import lips28 from './images/lips/28.jpeg'
import lips29 from './images/lips/29.jpeg'
import lips30 from './images/lips/30.jpeg'

import brows1 from './images/brows/1.jpeg'
import brows2 from './images/brows/2.jpeg'
import brows3 from './images/brows/3.jpeg'
import brows4 from './images/brows/4.jpeg'
import brows5 from './images/brows/5.jpeg'
import brows6 from './images/brows/6.jpeg'
import brows7 from './images/brows/7.jpeg'
import brows8 from './images/brows/8.jpeg'
import brows9 from './images/brows/9.jpeg'
import brows10 from './images/brows/10.jpeg'
import brows11 from './images/brows/11.png'
import brows12 from './images/brows/12.jpeg'
import brows13 from './images/brows/13.jpeg'
import brows14 from './images/brows/14.jpeg'
import brows15 from './images/brows/15.jpeg'
import brows16 from './images/brows/16.jpeg'
import brows17 from './images/brows/17.jpeg'
import brows18 from './images/brows/18.jpeg'
import brows19 from './images/brows/19.jpeg'
import brows20 from './images/brows/20.jpeg'
import brows21 from './images/brows/21.jpeg'
import brows22 from './images/brows/22.jpeg'
import brows23 from './images/brows/23.jpeg'
import brows24 from './images/brows/24.jpeg'
import brows25 from './images/brows/25.jpeg'
import brows26 from './images/brows/26.jpeg'
import brows27 from './images/brows/27.jpeg'
import brows28 from './images/brows/28.jpeg'
import brows29 from './images/brows/29.jpeg'
import brows30 from './images/brows/30.jpeg'
import brows31 from './images/brows/31.jpeg'
import brows32 from './images/brows/32.jpeg'
import brows33 from './images/brows/33.jpeg'
import brows34 from './images/brows/34.jpeg'
import brows35 from './images/brows/35.jpeg'
import brows36 from './images/brows/36.jpeg'
import brows37 from './images/brows/37.jpeg'
import brows38 from './images/brows/38.jpeg'
import brows39 from './images/brows/39.jpeg'
import brows40 from './images/brows/40.jpeg'
import brows41 from './images/brows/41.jpeg'
import brows42 from './images/brows/42.jpeg'

import eyes1 from './images/eyes/1.jpeg'
import eyes2 from './images/eyes/2.jpeg'
import eyes3 from './images/eyes/3.jpeg'
import eyes4 from './images/eyes/4.jpeg'
import eyes5 from './images/eyes/5.jpeg'
import eyes6 from './images/eyes/6.jpeg'
import eyes7 from './images/eyes/7.jpeg'
import eyes8 from './images/eyes/8.jpeg'
import eyes9 from './images/eyes/9.jpeg'
import eyes10 from './images/eyes/10.jpeg'
import eyes11 from './images/eyes/11.jpeg'
import eyes12 from './images/eyes/12.jpeg'
import eyes13 from './images/eyes/13.jpeg'
import eyes14 from './images/eyes/14.jpeg'
import eyes15 from './images/eyes/15.jpeg'
import eyes16 from './images/eyes/16.jpeg'
import eyes17 from './images/eyes/17.jpeg'
import eyes18 from './images/eyes/18.jpeg'
import eyes19 from './images/eyes/19.jpeg'
import eyes20 from './images/eyes/20.jpeg'
import eyes21 from './images/eyes/21.jpeg'
import eyes22 from './images/eyes/22.jpeg'
import eyes23 from './images/eyes/23.jpeg'
import eyes24 from './images/eyes/24.jpeg'
import eyes25 from './images/eyes/25.jpeg'
import eyes26 from './images/eyes/26.jpeg'
import eyes27 from './images/eyes/27.jpeg'
import eyes28 from './images/eyes/28.jpeg'
import eyes29 from './images/eyes/29.jpeg'
import eyes30 from './images/eyes/30.jpeg'
import eyes31 from './images/eyes/31.jpeg'

import depilation1 from './images/depilation/1.JPG'
import depilation2 from './images/depilation/2.JPG'
import depilation3 from './images/depilation/3.jpeg'
import depilation4 from './images/depilation/4.JPG'
import depilation5 from './images/depilation/5.JPG'
import depilation6 from './images/depilation/6.jpeg'
import depilation7 from './images/depilation/7.jpeg'

import Work from '../../Work/Work'

const ServicePage = ({ active, setActive }) => {
	const { serviceId } = useParams()
	const [works, setWorks] = useState([
		{
			id: 1,
			work: [
				{ id: 1, img: lips1 },
				{ id: 2, img: lips2 },
				{ id: 3, img: lips3 },
				{ id: 4, img: lips4 },
				{ id: 5, img: lips5 },
				{ id: 6, img: lips6 },
				{ id: 7, img: lips7 },
				{ id: 8, img: lips8 },
				{ id: 9, img: lips9 },
				{ id: 10, img: lips10 },
				{ id: 11, img: lips11 },
				{ id: 12, img: lips12 },
				{ id: 13, img: lips13 },
				{ id: 14, img: lips14 },
				{ id: 15, img: lips15 },
				{ id: 16, img: lips16 },
				{ id: 17, img: lips17 },
				{ id: 18, img: lips18 },
				{ id: 19, img: lips19 },
				{ id: 20, img: lips20 },
				{ id: 21, img: lips21 },
				{ id: 22, img: lips22 },
				{ id: 23, img: lips23 },
				{ id: 24, img: lips24 },
				{ id: 25, img: lips25 },
				{ id: 26, img: lips26 },
				{ id: 27, img: lips27 },
				{ id: 28, img: lips28 },
				{ id: 29, img: lips29 },
				{ id: 30, img: lips30 },
			],
		},
		{
			id: 2,
			work: [
				{ id: 1, img: brows1 },
				{ id: 2, img: brows2 },
				{ id: 3, img: brows3 },
				{ id: 4, img: brows4 },
				{ id: 5, img: brows5 },
				{ id: 6, img: brows6 },
				{ id: 7, img: brows7 },
				{ id: 8, img: brows8 },
				{ id: 9, img: brows9 },
				{ id: 10, img: brows10 },
				{ id: 11, img: brows11 },
				{ id: 12, img: brows12 },
				{ id: 13, img: brows13 },
				{ id: 14, img: brows14 },
				{ id: 15, img: brows15 },
				{ id: 16, img: brows16 },
				{ id: 17, img: brows17 },
				{ id: 18, img: brows18 },
				{ id: 19, img: brows19 },
				{ id: 20, img: brows20 },
				{ id: 21, img: brows21 },
				{ id: 22, img: brows22 },
				{ id: 23, img: brows23 },
				{ id: 24, img: brows24 },
				{ id: 25, img: brows25 },
				{ id: 26, img: brows26 },
				{ id: 27, img: brows27 },
				{ id: 28, img: brows28 },
				{ id: 29, img: brows29 },
				{ id: 30, img: brows30 },
				{ id: 31, img: brows31 },
				{ id: 32, img: brows32 },
				{ id: 33, img: brows33 },
				{ id: 34, img: brows34 },
				{ id: 35, img: brows35 },
				{ id: 36, img: brows36 },
				{ id: 37, img: brows37 },
				{ id: 38, img: brows38 },
				{ id: 39, img: brows39 },
				{ id: 40, img: brows40 },
				{ id: 41, img: brows41 },
				{ id: 42, img: brows42 },
			],
		},
		{
			id: 3,
			work: [
				{ id: 1, img: eyes1 },
				{ id: 2, img: eyes2 },
				{ id: 3, img: eyes3 },
				{ id: 4, img: eyes4 },
				{ id: 5, img: eyes5 },
				{ id: 6, img: eyes6 },
				{ id: 7, img: eyes7 },
				{ id: 8, img: eyes8 },
				{ id: 9, img: eyes9 },
				{ id: 10, img: eyes10 },
				{ id: 11, img: eyes11 },
				{ id: 12, img: eyes12 },
				{ id: 13, img: eyes13 },
				{ id: 14, img: eyes14 },
				{ id: 15, img: eyes15 },
				{ id: 16, img: eyes16 },
				{ id: 17, img: eyes17 },
				{ id: 18, img: eyes18 },
				{ id: 19, img: eyes19 },
				{ id: 20, img: eyes20 },
				{ id: 21, img: eyes21 },
				{ id: 22, img: eyes22 },
				{ id: 23, img: eyes23 },
				{ id: 24, img: eyes24 },
				{ id: 25, img: eyes25 },
				{ id: 26, img: eyes26 },
				{ id: 27, img: eyes27 },
				{ id: 28, img: eyes28 },
				{ id: 29, img: eyes29 },
				{ id: 30, img: eyes30 },
				{ id: 31, img: eyes31 },
			],
		},
		{
			id: 4,
			work: [
				{ id: 1, img: depilation1 },
				{ id: 2, img: depilation2 },
				{ id: 3, img: depilation3 },
				{ id: 4, img: depilation4 },
				{ id: 5, img: depilation5 },
				{ id: 6, img: depilation6 },
				{ id: 7, img: depilation7 },
			],
		},
	])

	const newService = works.filter(item => item.id === Number(serviceId))
	const selectedWorks = newService[0].work

	return (
		<div className={s.service}>
			<div className='container'>
				<ContentHeader title={'Мои работы'} />
				<div className={s.wrapper}>
					{selectedWorks.map(e => (
						<Work
							id={e.id}
							img={e.img}
							key={e.id}
							active={active}
							setActive={setActive}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ServicePage
