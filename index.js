// Create function to add row
function createNewRow(){

  // Use getElementbyId to call elements and return values
	let plantName = document.getElementById('plantname').value;
	let plantType = document.getElementById('planttype').value;

  // Create validation message with conditional
	if(plantName == "" || plantType == ""){
    // Alert user if no input
		alert("Enter the plant name and type!");
	} else {
    // Else declare parent row element variable
		let parent = document.createElement('tr');

    // Declare two column variables
		let col1=document.createElement('td');
		let col2=document.createElement('td');

    // Declare two text variables
		let text1=document.createTextNode(plantName);
		let text2=document.createTextNode(plantType);

    // Add text nodes to columns, append columns to parents
		col1.appendChild(text1);
		col2.appendChild(text2);
		parent.appendChild(col1);
		parent.appendChild(col2);
    
    // Call the tbody by ID and append the child to parent
		document.getElementById('result').appendChild(parent);
    
    // Return the new inputted values
		document.getElementById('plantname').value = "";
		document.getElementById('planttype').value = "";
	}
}