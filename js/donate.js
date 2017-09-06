document.addEventListener('DOMContentLoaded', function(){


		function transferAmount(){

			var donation = document.getElementById('money');
			var kittens = document.getElementById('firstSave');			

			var catsBathed = document.getElementById('money');
			var cats = document.getElementById('secondSave');

			var splintersRemoved = document.getElementById('money');
			var splinters = document.getElementById('thirdSave');

			//top secret math
			if ( Number(donation.value) > 0 ) {
				kittens.innerText = ( Number(donation.value) + 16);
				console.log(kittens.innerText + ' kittens saved.');

				cats.innerText = ( Number(donation.value) * 1.5);
				console.log(cats.innerText + ' cats bathed.');

				splinters.innerText = ( Number(donation.value) - 1);
				console.log(splinters.innerText + ' splinters pulled.');
			} else {
				alert(document.querySelector('#donorName').value + ': Please enter an amount greater than zero.');
			};

		}	
		
		document.getElementsByClassName("submit-button")[0].addEventListener("click", function(){
			transferAmount();
		});

		//on button click, pass in donation amount to transferAmount

});