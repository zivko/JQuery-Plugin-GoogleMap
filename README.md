jQuery GoogleMap Plugin
==========

This is simple Jquery Google map plugin, for easy display google map on page.

## Usage


1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```
2. Include Google maps API js

	```html
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	```

3. Include plugin's js code:

	```html
	 <script src="gmap.js"></script>
	```

4. Add placeholder for map
       ```html
       <!-- data-title is marker hover title, data-infoWin is content for google InfoWindow -->
       <div data-title="Marker Title" data-infoWin="This is simple content for info win"  id="mapCanvas"/>
       ```

5. Call plugin:

	```js
$( document ).ready(function() {

//call Maps plugin
$("#mapCanvas").gmap({
    MapWidth: "600px",           //google map width
    MapHeight: "400px",          //google map height
    Lat: "-34.397",             //map & marker Lat
    Lng: "150.644",             //map &marker Lng
    Zoom: 8,                    //zoom level of map
    Icon: "/images/marker.png", //marker image path
});

});

	```

