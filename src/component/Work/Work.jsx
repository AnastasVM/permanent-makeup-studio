import React, { useState } from 'react'
import s from './Work.module.css'
// import { Link } from 'react-router-dom'
import cn from 'classnames'

const Work = ({ id, img }) => {
	const [active, setActive] = useState()
	return (
		<div
			className={cn(s.photo, {
				[s.active]: active,
			})}
			key={id}
		>
			<img
				className={s.img}
				src={img}
				alt=''
				onClick={() => setActive(!active)}
			></img>
		</div>
	)
}

export default Work
