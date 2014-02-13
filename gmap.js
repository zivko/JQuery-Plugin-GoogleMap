/*
 *  jQuery Google Map Plugin
 *
 *  Made by Zivko Sudarski
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = "gmap",
		    defaults = {
                      MapWidth: "600px",
                      MapHeight: "400px",
		      Lat: "-34.397",
                      Lng: "150.644",
                      Zoom: 8,
                      Icon: "/images/marker.png",
                      ContentString: "Enter some HTML content"
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.map = null;
				this.LatLng = null;
				this.marker = null;
                                this.infowindow = null;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
                                google.maps.visualRefresh = true;
                                $(this.element).css("width", this.settings.MapWidth);
                                $(this.element).css("height", this.settings.MapHeight);
                                this.LatLng = new google.maps.LatLng(this.settings.Lat, this.settings.Lng);
                                var mapOptions = {
                                    center: this.LatLng,
                                    zoom: this.settings.Zoom
                                };

                                this.map = new google.maps.Map(this.element,mapOptions);
                                var marker = this.setMarker(this.element);
                                var win = this.setContentWindow(this.element);
                                win.open(this.map,marker);


                               google.maps.event.addListener(marker, 'click', function() {
                                 win.open(this.map,marker);
                               });
		},

		setMarker: function (element) {
		               this.marker = new google.maps.Marker({
			       position: this.LatLng,
			       map: this.map,
			       title: $(element).attr("data-title"),
			       icon: this.settings.Icon
			   });
                       
                        return this.marker;
		},

                setContentWindow: function(element){
                              this.infowindow = new google.maps.InfoWindow({
                              content: $(element).attr("data-infoWin"),
                     });

                        return this.infowindow;
                   
                }

		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
			  this.each(function() {
		 	     if ( !$.data( this, "plugin_" + pluginName ) ) {
			     $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			     }
			 });

			// chain jQuery functions
			return this;
		};

})( jQuery, window, document );
