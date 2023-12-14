import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import s from './ServicePage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'

const ServicePage = () => {
	const { serviceId } = useParams()
	console.log('serviceId====>', serviceId)
	// const navigate = useNavigate()

	// if (serviceId === 1) {
	// 	navigate('')
	// }

	// const service = card.filter(item => item.id === Number(projectId))

	return (
		<div>
			<div className='container'>
				<ContentHeader title={'пропсы'} />
			</div>
		</div>
	)
}

export default ServicePage
