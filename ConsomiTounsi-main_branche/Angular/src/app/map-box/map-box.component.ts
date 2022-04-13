import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  

  mapp:Mapboxgl.Map;
  marker: any;
  
constructor(){

}
  
  ngOnInit(): void {
    
    (Mapboxgl as any).accessToken = environment.mapboxKey; 
     

      this.mapp = new Mapboxgl.Map({
       container: 'map-mapbox', // container id
         style: 'mapbox://styles/mapbox/streets-v11',
          center: [10.189260129305495,36.89977007132353], // long  latt
           zoom: 13 // starting zoom
          
});

    
    this.createBookmark(10.189260129305495,36.89977007132353);
    this.createmarker(10.183769429834143,36.899125531867796);
   /*
       var marker = new Mapboxgl.Marker()
      .setLngLat([10.183769429834143,36.899125531867796])
      .setPopup(new Mapboxgl.Popup({offset:30}))
      .addTo(this.mapp); // add the marker to the map
      

      var marker = new Mapboxgl.Marker()
      .setLngLat([10.738662462345786,36.8650727027546])
      .setPopup(new Mapboxgl.Popup({offset:30}))
      .addTo(this.mapp); // add the marker to the map
      */

     
}
 


createBookmark(long:number,latt:number){

  const marker = new Mapboxgl.Marker ({ 
     
    draggable: true
     
  }).setLngLat([long, latt]).addTo(this.mapp);

  marker.on('drag',()=>{
    console.log(marker.getLngLat( ) );
  })
}
createmarker(long:number,latt:number){

  const marker = new Mapboxgl.Marker ({ 
     
     
  }).setLngLat([long, latt]).addTo(this.mapp);
  
  marker.on('drag',()=>{
    console.log(marker.getLngLat( ) );
  })
}




}