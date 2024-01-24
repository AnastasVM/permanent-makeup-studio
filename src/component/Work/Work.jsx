import React, { useContext, useState } from 'react'
import s from './Work.module.css'
import cn from 'classnames'
import { WorkContext } from '../context/workContext'

const Work = ({ id, img, setActive, active }) => {
	const [activePhoto, setActivePhoto] = useState()
	const { selectedPhoto, setSelectedPhoto } = useContext(WorkContext)

	const workId = (id, { img }) => {
		const resultId = { id: id, img: img }
		setActive(true)
		setSelectedPhoto(resultId)
	}

	return (
		<div
			className={cn(s.photo, {
				[s.active]: activePhoto,
			})}
			key={id}
		>
			<img
				className={s.img}
				src={img}
				id={id}
				alt=''
				onClick={() => workId(id, { img })}
			></img>
		</div>
	)
}

export default Work
