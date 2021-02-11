              // Storing HTML code block in a variable
var tacoMenuHeader = '<div class="col-lg-12 col-md-12 special-grid tacos>'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Tacos</strong></h1>'+
							'<p>Corn Shell Tortilla with Cilantro and Onion and your choice of meat</p>'+
					'</div>'+
				'</div>'
var tortaMenuHeader = '<div class="col-lg-12 col-md-12 special-grid menuHeader" filter="tortasQuesadillas>'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Torta</strong></h1>'+
							'<p>Mexican Sandwich served with beans, cheese, lettuce, tomato, jalapenos, and your choice of meat</p>'+
					'</div>'+
				'</div>'
var gorditaMenuHeader = '<div class="col-lg-12 col-md-12 special-grid menuHeader">'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Tacos</strong></h1>'+
							'<p>Corn Shell Tortilla with Cilantro and Onion and your choice of meat</p>'+
					'</div>'+
				'</div>'
var miscMenuHeader = '<div class="col-lg-12 col-md-12 special-grid menuHeader">'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Tacos</strong></h1>'+
							'<p>Corn Shell Tortilla with Cilantro and Onion and your choice of meat</p>'+
					'</div>'+
				'</div>'
var extraMenuHeader = '<div class="col-lg-12 col-md-12 special-grid menuHeader">'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Tacos</strong></h1>'+
							'<p>Corn Shell Tortilla with Cilantro and Onion and your choice of meat</p>'+
					'</div>'+
				'</div>'
var burritoMenuHeader = '<div class="col-lg-12 col-md-12 special-grid burritos">'+
					'<div class="gallery-single fix burritos">'+
                    '<h1><strong>Burrito</strong></h1>'+
							'<p>12in flour tortilla filled with beans, lettuce, cheese, sour cream, tomato, and your choice of meat</p>'+
					'</div>'+
				'</div>'

var allMenuHeader = '<div class="col-lg-12 col-md-12 special-grid menuHeader">'+
					'<div class="gallery-single fix">'+
                    '<h1><strong>Tacos</strong></h1>'+
							'<p>Corn Shell Tortilla with Cilantro and Onion and your choice of meat</p>'+
					'</div>'+
				'</div>'

              
    
function menuHeaderAdd (filterDiv,filterText){
    console.log(filterDiv,filterDiv);
    document.getElementById(filterDiv).style.textAlign="center";  
    document.getElementById(filterDiv).innerHTML = filterText;
}


function menuHeaderShow(filterDiv){
    document.getElementById(filterDiv).style.display="block";  
}
    
        