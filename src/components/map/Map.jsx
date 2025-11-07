import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './Map.css'
import { useEffect } from 'react'
import { useLanguage } from '../../context/ContextHooks'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function ZoomPosition() {
  const map = useMap()
  const { language } = useLanguage()

  useEffect(() => {
    const zoomControl = map.zoomControl.getContainer()
    if (zoomControl) {
      const parent = zoomControl.parentElement
      parent.classList.add('leaflet-top')
      if (language.arabic) {
        parent.classList.add('leaflet-right')
        parent.classList.remove('leaflet-left')
      } else {
        parent.classList.add('leaflet-left')
        parent.classList.remove('leaflet-right')
      }
    }
  }, [language])

  return null
}

export default function Map({ latitude, longitude, popupText, style }) {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={style}>
      <TileLayer url='https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' />
      <Marker position={[latitude, longitude]}>
        <Popup>{popupText}</Popup>
      </Marker>
      <ZoomPosition />
    </MapContainer>
  )
}
