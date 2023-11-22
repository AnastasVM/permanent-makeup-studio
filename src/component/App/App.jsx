import React from 'react'
import s from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Inna from './images/Inna.png'

function App() {
	return (
		<div className='App'>
			<Header />
			<main className={s.content}>
				<div className={s.wrapper}>
					<div className={s.intro}>
						<h1 className={s.title}>Студия перманентного макияжа</h1>
						<p className={s.subtitle}>
							Скидка 10% на любую услугу при первом визите!
						</p>
					</div>
					<div className={s.photo}>
						<img className={s.img} src={Inna} alt='Ina'></img>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default App
