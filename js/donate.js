document.addEventListener('DOMContentLoaded', function(){

		
		var cats = document.getElementById('secondSave');
		var splinters = document.getElementById('thirdSave');

		function transferAmount(){

			//change number of kittens saved
			var kittensRescued = document.getElementById('money');
			var kittens = document.getElementById('firstSave');
			kittens.innerText = kittensRescued.value;
			console.log(kittens.innerText + ' kittens saved.');

			kittens.innerText = kittensRescued.value;
			
			

			//change cat number
			//change splinter number
			//alert( 'thanks for donating!')


		}	
		
		document.getElementsByClassName("submit-button")[0].addEventListener("click", function(){
			transferAmount();
		});

		//on button click, pass in donation amount to transferAmount

});