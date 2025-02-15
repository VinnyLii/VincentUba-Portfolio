// Define passwords (replace these with your actual passwords)
const thesisPassword = "thesis123"; // Password for the thesis document
const presentationPassword = "presentation123"; // Password for the presentation

// Function to handle thesis download
function downloadThesis() {
    const input = document.getElementById("thesisPassword").value;
    if (input === thesisPassword) {
        // Redirect to the thesis file
        window.location.href = "thesis/Vincent_Uba_Thesis.pdf";
    } else {
        // Show error message
        document.getElementById("thesisError").style.display = "block";
    }
}

// Function to handle presentation download
function downloadPresentation() {
    const input = document.getElementById("presentationPassword").value;
    if (input === presentationPassword) {
        // Redirect to the presentation file
        window.location.href = "presentations/Uba_presentation_Master.pptx";
    } else {
        // Show error message
        document.getElementById("presentationError").style.display = "block";
    }
}