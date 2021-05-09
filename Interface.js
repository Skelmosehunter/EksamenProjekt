console.log("JavaScript loaded")
const RCMDivide = 0.7062;
const AnswerDivide = 0.9156;


function UdregnBMI() {
    var RCM = document.getElementById('Omkreds').value
    var Catleg = document.getElementById('Leg').value
    console.log(RCM);
    console.log(Catleg);
    let BMI = ((RCM/RCMDivide - Catleg)/AnswerDivide)-Catleg
    document.getElementById("BMI").innerHTML = "Kattens BMI er: " + BMI.toFixed(2);
    document.getElementById("form").reset();

    if (BMI < 15) {
        document.getElementById("Betydning").innerHTML = "Din kat er undervægtig";
        document.getElementById('billede').src = "Tynd.jpg";
    } else if (BMI >= 15 && BMI < 25) {
        document.getElementById("Betydning").innerHTML = "Din kat er normalvægtig";
        document.getElementById('billede').src = "Normal.jpg";

    } else if ( BMI >=25) {
        document.getElementById("Betydning").innerHTML = "Din kat er ubeskrivelig fed"
        document.getElementById('billede').src = "Chonker.png";

    } else {
        window.alert("Du har intastet noget forkert, Prøv igen");
    }
}

  // "Kattens BMI er: " + 12 + 14
  // Divide the rib cage measurement by 0.7062 and subtract the length of the leg.
  //Divide that answer by 0.9156.
  //Subtract the new number by the leg length and that is your cat's BMI. 

  // const -> let -> var

