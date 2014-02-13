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
