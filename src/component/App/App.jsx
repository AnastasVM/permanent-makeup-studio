import React, { useState } from 'react'
import s from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'
import Contacts from '../Contacts/Contacts'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage/AboutPage'
import HomePage from '../pages/HomePage/HomePage'
import PricePage from '../pages/PricePage/PricePage'

function App() {
	const [modalActive, setModalActive] = useState(false)

	return (
		<>
			<Header setActive={setModalActive} />
			<main className={s.content}>
				<Routes>
					{/* <div className={s.wrapper}>
					<div className={s.intro}>
						<h1 className={s.title}>
							Студия перманентного макияжа & депиляции
						</h1>
						<p className={s.subtitle}>
							Скидка 10% на любую услугу <br /> при первом визите!
						</p>
					</div>
					<div className={s.photo}>
						<img className={s.img} src={Inna} alt='Ina'></img>
					</div>
				</div> */}
					<Route path='/price' element={<PricePage />} />
					<Route path='/aboutMe' element={<AboutPage />} />
					<Route path='/' element={<HomePage />} />
				</Routes>
			</main>
			<Modal active={modalActive} setActive={setModalActive}>
				<Contacts />
			</Modal>
			<Footer />
		</>
	)
}

export default App
