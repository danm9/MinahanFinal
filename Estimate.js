//Estimate Calculator

function calculateEstimate(description, region, operatingSystem, requirements1, requirementsNumber1, requirements2, requirementsNumber2, quantity, storage, storageType) {
    let calc = region * operatingSystem * requirements1 * requirementsNumber1 * requirements2 * requirementsNumber2 * quantity * storage * storageType
    
    const x = document.getElementById("estimate").innerHTML = description + " Annual Kloud Estimate: " + "$" + Math.round(calc);
}; 