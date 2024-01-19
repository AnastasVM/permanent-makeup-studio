import React, { useContext } from 'react'
import s from './SelectedPhoto.module.css'
import { WorkContext } from '../context/workContext'

const SelectedPhoto = ({ img, id }) => {
	const { selectedPhoto } = useContext(WorkContext)

	return (
		<div className={s.wrapper}>
			<div className={s.photo}>
				<img
					className={s.img}
					src={selectedPhoto.img}
					id={selectedPhoto.id}
					alt=''
				/>
			</div>
		</div>
	)
}

export default SelectedPhoto
