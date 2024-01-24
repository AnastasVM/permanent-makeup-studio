import React from 'react'
import s from './Modal.module.css'
import cn from 'classnames'
import close from './images/modal-close.svg'

const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={cn(s.modal, {
				[s.active]: active,
			})}
			onClick={() => setActive(false)}
		>
			<div
				className={cn(s.modalContent, {
					[s.active]: active,
				})}
				onClick={e => e.stopPropagation()}
			>
				<button onClick={() => setActive(false)} className={s.modalClose}>
					<img src={close} alt='close' height={45} width={45} />
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
