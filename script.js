
// Define these OUTSIDE the function
let a = ["a.png", "b.png", "c.png", "d.png"];
let n = 1; // Start from 1 since the initial image is a.png

function img() {
    // This now updates the global 'n' instead of resetting it
    document.getElementById("img").src = a[n];
    
    n++;
    
    // Reset to 0 if we reach the end of the array
    if (n == a.length) {
        n = 0;
    }
    
    
}
