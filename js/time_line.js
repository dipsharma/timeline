$(document).ready(function() {
		
	var currentDescription = null;
    currentDescription = $('.description[data-year=2014]');
		
	var year_array = [1950, 1960, 1990, 1996, 1998, 2001, 2002, 2007, 2009, 2010, 2012, 2013, 2014];
	var ribbon_positions = [0, -20, -40, -60, -80, -100, -120, -140, -160, -180, -200, -220, -260 ];
    var desc_positions = [20, 40, 60, 80, 100, 150, 180, 200, 220, 240, 260, 300, 365 ];

	for(var i = 0 ; i < year_array.length ; i++)
	{
		var year = year_array[i];
        var position = ribbon_positions[i];
        var desc_position = desc_positions[i];

        $('a.y'+year).attr("data-position" , position);
        $('a.y'+year).attr("data-desc_position" , desc_position);

		$('a.y'+year).click(function() { 
	   
			currentDescription.fadeOut('slow');

            var dataYear = $(this).attr("data-year");
            var dataPosition = $(this).attr("data-position");
            var dataDesc_position = $(this).attr("data-desc_position");

			$(".description[data-year="+dataYear+"]").fadeIn('slow');
			currentDescription = $(".description[data-year="+dataYear+"]");

            $('#red-ribbon').animate({'background-position': dataPosition + 'px 0px'});
            $('.description').css('left', dataDesc_position + 'px');
		});

	}

    $('.years li a').click(function() {   
    $(".years li a").removeClass("active");
    $(this).toggleClass('active');
    });	
});


