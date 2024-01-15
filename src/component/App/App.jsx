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
import ServicePage from '../pages/ServicePage/ServicePage'
import { useParams } from 'react-router-dom'
import ArticleDepilationPage from '../pages/ArticleDepilationPage/ArticleDepilationPage'
import ArticlePermanentPage from '../pages/ArticlePermanentPage/ArticlePermanentPage'

function App() {
	const [modalActive, setModalActive] = useState(false)

	const { serviceId } = useParams()
	console.log('serviceId====>', serviceId)

	return (
		<>
			<Header setActive={setModalActive} />
			<main className={s.content}>
				<Routes>
					<Route path='/price' element={<PricePage />} />
					<Route path='/aboutMe' element={<AboutPage />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/service/:serviceId' element={<ServicePage />} />
					<Route
						path='/articleDepilation'
						element={<ArticleDepilationPage />}
					/>
					<Route path='/articlePermanent' element={<ArticlePermanentPage />} />
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
