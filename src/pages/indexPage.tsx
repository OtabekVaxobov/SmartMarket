import { Suspense, useState } from 'react'
import Loading from '../component/Loading'
import { TileLayer, Marker, Popup, MapContainer, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; // its takes my day
export default function HomePage() {
    const [data, setData] = useState({
        lat: 40.49267433205552, lng: 68.77374887466432
    })
    const LocationFinderDummy = () => {
        useMapEvents({
            click(e) {
                setData(e.latlng)
                console.log(e.latlng);
            },
        });
        return null;
    };

    return (
        <>
            <div className='min-w-xs min-h-xs'>
                <p>latitude:{data.lat},Longitude:{data.lng}</p>
                <Suspense fallback={<Loading />}>
                    <MapContainer center={[40.49267433205552, 68.77374887466432]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[data.lat, data.lng]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                        <LocationFinderDummy />
                    </MapContainer >
                </Suspense>
            </div>
        </>
    )
}