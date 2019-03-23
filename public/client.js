/* global ScrollMagic */
/* global Chart */ 


// client-side js
// run by the browser each time your view template is loaded

console.log('just checking in');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded <3"); 
    
  
//scrollmagic 
    console.log("ScrollMagic is", ScrollMagic); 
      
    var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide 
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
        
        //don't start immediately
          offset: 50,
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addTo(controller);
		}
  
  
  //chart 
    var ctx = document.getElementById('myChart').getContext('2d');
        console.log( "my chart is", myChart);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jean Gray', 'Mystique', 'Emma Frost'],
            datasets: [{
                label: '# of Comics',
                data: [214, 186, 382],
                backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
              
                 ],
                        }]
              },
          options: {
            scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
            }
          }
    });
  
  //marvel api
  
      //get phoenix 
    fetch('/jean-grey').then(resp => resp.json()).then((data) => {
    
    console.log('jean grey');
      
    var name = document.createElement('h1');
    name.innerText = name;
      
    
    
    
    });
  
  
  
  
  
  
  fetch('mystique').then(resp => resp.json()).then((data) => {
    
    console.log('mystique');
    
    });
  
  fetch('/emma-frost').then(resp => resp.json()).then((data) => {
    
    console.log('emma frost');
    
    });
});



