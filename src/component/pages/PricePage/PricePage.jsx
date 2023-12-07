import React from 'react'
import s from './PricePage.module.css'
import ContentHeader from '../../ContentHeader/ContentHeader'
import Price from '../../Price/Price'

const PricePage = () => {
	return (
		<div className={s.price}>
			<ContentHeader title={'Прайс'} />
			<Price />
		</div>
	)
}

export default PricePage
