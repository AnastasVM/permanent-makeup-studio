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
import ArticleDepilationPage from '../pages/ArticleDepilationPage/ArticleDepilationPage'
import ArticlePermanentPage from '../pages/ArticlePermanentPage/ArticlePermanentPage'
import SelectedPhoto from '../SelectedPhoto/SelectedPhoto'
import { WorkContext } from '../context/workContext'
import PreparationDepilation from '../pages/ArticlePage/PreparationDepilation/PreparationDepilation'
import Contraindication from '../pages/ArticlePage/Contraindication/Сontraindication'
import PeriodPage from '../pages/ArticlePage/PeriodPage/PeriodPage'
import PainfulSensations from '../pages/ArticlePage/PainfulSensations/PainfulSensations'
import Correction from '../pages/ArticlePage/Correction/Correction'
import BlueEyebrows from '../pages/ArticlePage/BlueEyebrows/BlueEyebrows'
import Fixation from '../pages/ArticlePage/Fixation/Fixation'
import Refresh from '../pages/ArticlePage/Refresh/Refresh'

function App() {
	const [modalActive, setModalActive] = useState(false)
	const [modalActiveWork, setModalActiveWork] = useState(false)
	const [selectedPhoto, setSelectedPhoto] = useState({ id: 0, img: '' })

	return (
		<>
			<WorkContext.Provider value={{ selectedPhoto, setSelectedPhoto }}>
				<Header setActive={setModalActive} />
				<main className={s.content}>
					<Routes>
						<Route path='/price' element={<PricePage />} />
						<Route path='/aboutMe' element={<AboutPage />} />
						<Route path='/' element={<HomePage />} />
						<Route
							path='/service/:serviceId'
							element={
								<ServicePage
									active={modalActiveWork}
									setActive={setModalActiveWork}
								/>
							}
						/>
						<Route
							path='/articleDepilation'
							element={<ArticleDepilationPage />}
						/>
						<Route
							path='/preparationDepilation'
							element={<PreparationDepilation />}
						/>

						<Route
							path='/articlePermanent'
							element={<ArticlePermanentPage />}
						/>
						<Route path='/periodPage' element={<PeriodPage />} />
						<Route path='/contraindication' element={<Contraindication />} />
						<Route path='/painfulSensations' element={<PainfulSensations />} />
						<Route path='/correction' element={<Correction />} />
						<Route path='/blueEyebrows' element={<BlueEyebrows />} />
						<Route path='/fixation' element={<Fixation />} />
						<Route path='/refresh' element={<Refresh />} />
					</Routes>
				</main>
				<Modal active={modalActive} setActive={setModalActive}>
					<Contacts />
				</Modal>
				<Modal active={modalActiveWork} setActive={setModalActiveWork}>
					<SelectedPhoto />
				</Modal>
				<Footer setActive={setModalActive} />
			</WorkContext.Provider>
		</>
	)
}

export default App
