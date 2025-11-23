 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius =parseInt(prompt("Enter the radius of the circle:"));
			 let area=Math.PI*radius*radius
			 alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`)
            // write you code here and display the result to the user
           
}
calculateArea();
