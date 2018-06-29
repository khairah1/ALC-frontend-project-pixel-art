// Select size input
const c = document.getElementById('pixelCanvas'); // get the ID of the Canvas to make the grid on
let grid_height = $("#inputHeight"); // The input box for the height of the grid
let grid_width = $("#inputWidth"); // The input box for the width of the grid

// Select color input
let selected_color = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
$('#input_submit').click(function(e){
    e.preventDefault();
    makeGrid();
});



// Create the grid pattern when the submit button is clicked.
function makeGrid() {
    
    c.innerHTML = '';
    let height = grid_height.val();
    let width = grid_width.val();
    
    // Function which fills color into the cell that was clicked and changes the color
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
           cell.style.backgroundColor = selected_color.val(); 
        });
    }
    
    // Create the grid using a nested forloop and attach click event to each cell in the Grid
    for (let i = 0; i < height; i++) {
       let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }

}



