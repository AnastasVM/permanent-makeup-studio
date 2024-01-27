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
import RulesCare from '../pages/ArticlePage/RulesCare/RulesCare'
import Botox from '../pages/ArticlePage/Botox/Botox'
import LipAugmentation from '../pages/ArticlePage/LipAugmentation/LipAugmentation'
import AgePermanent from '../pages/ArticlePage/AgePermanent/AgePermanent'
import Shaving from '../pages/ArticlePage/Shaving/Shaving'
import IngrownHairs from '../pages/ArticlePage/IngrownHairs/IngrownHairs'
import Constriction from '../pages/ArticlePage/Constriction/Constriction'
import PostDepilationEffect from '../pages/ArticlePage/PostDepilationEffect/PostDepilationEffect'
import Sugaring from '../pages/ArticlePage/Sugaring/Sugaring'
import ReactionDepilation from '../pages/ArticlePage/ReactionDepilation/ReactionDepilation'
import Scrubbing from '../pages/ArticlePage/Scrubbing/Scrubbing'
import AutumnCare from '../pages/ArticlePage/AutumnCare/AutumnCare'
import DrySkin from '../pages/ArticlePage/DrySkin/DrySkin'
import CareСold from '../pages/ArticlePage/CareСold/CareСold'
import LipsCracking from '../pages/ArticlePage/LipsCracking/LipsCracking'

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
						<Route path='/shaving' element={<Shaving />} />
						<Route path='/ingrownHairs' element={<IngrownHairs />} />
						<Route path='/constriction' element={<Constriction />} />
						<Route
							path='/postDepilationEffect'
							element={<PostDepilationEffect />}
						/>
						<Route path='/sugaring' element={<Sugaring />} />
						<Route
							path='/reactionDepilation'
							element={<ReactionDepilation />}
						/>
						<Route path='/scrubbing' element={<Scrubbing />} />
						<Route path='/autumnCare' element={<AutumnCare />} />
						<Route path='/drySkin' element={<DrySkin />} />
						<Route path='/careСold' element={<CareСold />} />
						<Route path='/lipsCracking' element={<LipsCracking />} />

						<Route
							path='/articlePermanent'
							element={<ArticlePermanentPage />}
						/>
						<Route
							path='/preparationDepilation'
							element={<PreparationDepilation />}
						/>
						<Route path='/periodPage' element={<PeriodPage />} />
						<Route path='/contraindication' element={<Contraindication />} />
						<Route path='/painfulSensations' element={<PainfulSensations />} />
						<Route path='/correction' element={<Correction />} />
						<Route path='/blueEyebrows' element={<BlueEyebrows />} />
						<Route path='/fixation' element={<Fixation />} />
						<Route path='/refresh' element={<Refresh />} />
						<Route path='/rulesCare' element={<RulesCare />} />
						<Route path='/botox' element={<Botox />} />
						<Route path='/lipAugmentation' element={<LipAugmentation />} />
						<Route path='/agePermanent' element={<AgePermanent />} />
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
