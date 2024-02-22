import DG from '2gis-maps'
import { useEffect } from 'react'
import mapIcon from './icon.png'

const Map = () => {
	const style = {
		width: '100%',
		height: 'calc(250px + (400 - 250) * ((100vw - 320px) / (1432 - 320)))',
	}
	useEffect(() => {
		let map
		map = DG.map('map-container', {
			center: [54.867373, 83.08784],
			zoom: 13,
		})

		const icon = DG.icon({
			iconUrl: mapIcon,
			iconSize: [35, 35],
		})
		DG.marker([54.867373, 83.08784], { icon: icon })
			.addTo(map)
			.bindPopup('Перманент MakeUp')

		return () => map && map.remove()
	}, [])

	return <div id='map-container' style={style}></div>
}

export default Map
