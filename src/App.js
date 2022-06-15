import Nav from "./components/nav"
import Hero from "./components/hero"
import Data from "./components/data"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from "./components/moredata"
import { useState, useRef } from "react"
import Maps from "./map"
import { TileLayer, MapContainer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
 import L from "leaflet";
import { useParams } from "react-router-dom"
 
 const markerIcon = new L.Icon({
   iconUrl: require ("./images/icon.png"),
   iconSize: [35, 45],
   iconAnchor: [17,45],
   popupAnchor: [3, -46]
 })

function App() {
const [center, setCenter]= useState({lat: 13.084622, lng: 80.248357});
   const ZOOM_LEVEL = 9;
const mapRef = useRef();
    
  const [marker, setMarker]= useState({
    lat:13.084622,
    lon: 80.248357})
    
  // const {id} = useParams

  const handleMap =(id )=>{
    Data.map(daltal=>{
      daltal.id = id ?
      setMarker(prevMarker=>({
        ...prevMarker,
        lat: daltal.latitude,
         lon: daltal.longitude 
      })
      )
      :daltal 
      return daltal
    })
       
     
   
    //    Data.id = id ?
    //  setMarker(prevMarker=>({
    //    ...prevMarker,
    //    lat: Data.latitude,
    //     lon: Data.longitude, 
    //  })
    //  )
    //  :Data  
 }
//  const interactionOptions = {
//    zoomControl:false,
//    doubleClickZoom: false,
//    closePopupOnClick: false,
//    dragging: false,
//    zoomSnap: false,
//    zoomDelta: false,
//    trackResize: false,
//    touchZoom: false,
//    scrollWheelZoom: false
//  }
  



  
  const deploy = Data.map(datum => {
    return < Hero 
     key= {datum.id}
     country= {datum.country}
     info= {datum.info}
     location= {datum.location}
     date= {datum.date}
     description= {datum.description}
     img= {datum.img}
     id = {datum.id}
     handle = {handleMap}
     longitude= {datum.longitude}
     latitude = {datum.latitude}
     />
   })

   
   
  
   

  return (
    <Router>
      <div className="App">
          <Nav />
          <div className="col">
          
          <Switch>
              <Route exact path ="/">
                  <section className="deploy">
                  {deploy}
                  </section>

                  <MapContainer
                      center = {center}
                      zoom = {ZOOM_LEVEL}
                      ref = {mapRef}
                      // {...interactionOptions}
                  >
                  <TileLayer
                   url={Maps.maptiler.url} 
                   attribution= {Maps.maptiler.attribution} 
                   />

                    <Marker
                    position={[marker.lat, marker.lon]} 
                   icon={markerIcon}
                  > 
                    
                   <Popup>
                    <b>i am a pop up</b>
                  </Popup> 
                   </Marker>  

                   
            </MapContainer> 
            
              </Route>
              <Route path="/details/:id">
              <Details
                {...Data}
                />
              </Route>
          </Switch>
      
        
            </div>
          </div>
        </Router>
  );
}

export default App;
