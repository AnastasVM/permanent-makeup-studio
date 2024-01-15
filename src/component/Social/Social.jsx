import React from 'react'
import cn from 'classnames'
import s from './Social.module.css'
import vk from './images/vk.svg'
import instagram from './images/instagram.svg'
import telegram from './images/telegram.svg'

function Social({ alt }) {
	return (
		<div className={cn(s.social)}>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://vk.com/permanent_nsk_academ'
			>
				<img width={45} height={45} src={vk} alt={alt} />
			</a>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://instagram.com/inna_pm.nsk'
			>
				<img width={45} height={45} src={instagram} alt={alt} />
			</a>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://t.me/InnaYa_pmnsk'
			>
				<img width={45} height={45} src={telegram} alt={alt} />
			</a>
		</div>
	)
}

export default Social
