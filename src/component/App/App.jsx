import React from 'react'
import s from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Inna from './images/Inna.png'
// import Inna1 from './images/Inna_pink.png'
import SimpleSlider from '../Slick/SimpleSlider'
import Services from '../Services/Services'

function App() {
	return (
		<>
			<Header />
			<main className={s.content}>
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
				<SimpleSlider />
				<Services />
			</main>
			<Footer />
		</>
	)
}

export default App
