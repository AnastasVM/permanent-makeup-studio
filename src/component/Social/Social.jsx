import React from 'react'
import cn from 'classnames'
import s from './Social.module.css'
import vk from './images/vk.svg'
import instagram from './images/instagram.svg'
import telegram from './images/telegram.svg'
import whatsApp from './images/whatsapp.svg'

function Social({ alt }) {
	return (
		<div className={cn(s.social)}>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://vk.com/permanent_nsk_academ'
			>
				{alt !== 'small' ? (
					<img width={45} height={45} src={vk} alt={alt} />
				) : (
					<img width={35} height={35} src={vk} alt={alt} />
				)}
			</a>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://instagram.com/inna_pm.nsk'
			>
				{alt !== 'small' ? (
					<img width={45} height={45} src={instagram} alt={alt} />
				) : (
					<img width={35} height={35} src={instagram} alt={alt} />
				)}
			</a>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://t.me/InnaYa_pmnsk'
			>
				{alt !== 'small' ? (
					<img width={45} height={45} src={telegram} alt={alt} />
				) : (
					<img width={35} height={35} src={telegram} alt={alt} />
				)}
			</a>
			<a
				className={cn(s.link)}
				target='_blank'
				rel='noreferrer'
				href='https://api.whatsapp.com/send?phone=79137880701'
			>
				{alt !== 'small' ? (
					<img width={45} height={45} src={whatsApp} alt={alt} />
				) : (
					<img width={35} height={35} src={whatsApp} alt={alt} />
				)}
			</a>
		</div>
	)
}

export default Social
