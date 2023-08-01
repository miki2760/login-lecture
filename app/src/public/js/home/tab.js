'use strict';

var Cliffs = {};

(function( $ ) {

Cliffs.TabbedForms = {
		/*
			Create tabbed forms on Contact Us page.
		*/
		/*
			For each gform_wrapper, get corresponding gform_title, use that to populate tab menu.
		*/
		doFormTabs: function () {
			// Do the function if the container is present.
			if( !$( '#tabbed-forms' ).length ) {
				return;
			}
			$( '#tabbed-forms' ).prepend( '<ul class="tabs">' );
			var ul = $( '#tabbed-forms  > ul' );
			$( '.gform_wrapper' ).each( function() {
				var title, id;
				title = $( this ).find( '.gform_heading > .gform_title' ).text();
				//console.log( 'title: ' + title );

				// Get the id of the relevant form wrapper.
				id = $( this ).attr( 'id' );
				$( ul ).append( '<li><a href="#' + id + '">' + title + '</a></li>' );
			});

			$('ul.tabs').each(function(){
				// For each set of tabs, we want to keep track of
				// which tab is active and its associated content
				var $active, $content, $links = $(this).find('a');

				// If the location.hash matches one of the links, use that as the active tab.
				// If no match is found, use the first link as the initial active tab.
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				// Hide the remaining content
				$links.not($active).each(function () {
					$(this.hash).hide();
				});

				// Bind the click event handler
				$(this).on('click', 'a', function(e){
					// Make the old tab inactive.
					$active.removeClass('active');
					$content.hide();

					// Update the variables with the new link and content
					$active = $(this);
					$content = $(this.hash);

					// Make the tab active.
					$active.addClass('active');
					$content.show();

					// Prevent the anchor's default click action
					e.preventDefault();
				});
			});

			// Hide the tabs and all forms after a render if a confirmation message exists.
			$( document ).bind( 'gform_post_render', function(){
				addFormListener();
			});

			function addFormListener() {
				// If there is a confirmation message hide everything else.
				if( $( '.gform_confirmation_wrapper' ).length ) {
					$( '.tabs' ).css( 'display', 'none');

					$( '.gform_wrapper' ).css( 'display', 'none' );
				}
			}
		}
	};
 })(jQuery);

Cliffs.TabbedForms.doFormTabs();