'use strict'

// gifs and result texts
let underWeight = "url(https://c.tenor.com/kTf3OWtu06MAAAAd/moonisajedi-skinny.gif)";
let underBMI = 'This BMI is considered underweight. Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
let normalWeight = "url(https://i.pinimg.com/originals/cd/2e/bf/cd2ebfca81616d7209f4d2b7b3245c21.gif)";
let normalBMI = 'This BMI is considered normal. Maintaining a healthy weight may lower the risk of developing certain health conditions, including cardiovascular disease and type 2 diabetes.';
let overWeight = "url(https://i.pinimg.com/originals/b8/73/5f/b8735f34c2619c08842ae489e4ac22ac.gif)";
let overBMI = 'This BMI is considered overweight. Being overweight may increase the risk of certain health conditions, including cardiovascular disease, high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
let fatAss = "url(https://i.pinimg.com/originals/15/66/2d/15662d11d9a1ec9e950375f446c12809.gif)";
let fatBMI = 'This BMI is considered obese. People with obesity have increased risk of cardiovascular disease, type 2 diabetes, high blood pressure, and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.';
let homeImage = "url(https://thumbs.dreamstime.com/b/bmi-body-mass-index-calculate-illustration-infographic-chart-underweight-normal-overweight-obese-vector-157561387.jpg)";
let bmi = 0;

// result text function
let textBMI = function(text){
    document.querySelector('.textBMI').textContent = text;
    document.querySelector('.table').style.opacity = 100;
}

// add inches
let addRemoveInches = function(){
    let inches = document.getElementById('inches');
    if (inches.style.display === 'none') {
        inches.style.display = 'block';
    } else {
        inches.style.display = 'none';
    }
}

// BMI calculator
document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault()
    let height = Number(document.querySelector('.height').value);
    let weight = Number(document.querySelector('.weight').value);
    let inches = Number(document.querySelector('.inches').value);
    let showBMI = function(value){
        if(value < 18.5) {
            document.getElementById('display').style.backgroundImage = underWeight;
            textBMI(underBMI);
        }
        if(value > 18.5 && value < 25) {
            document.getElementById('display').style.backgroundImage = normalWeight;
            textBMI(normalBMI);
        }
        if(value > 25 && value < 29.9) {
            document.getElementById('display').style.backgroundImage = overWeight;
            textBMI(overBMI);
        }
        if(value > 29.9) {
            document.getElementById('display').style.backgroundImage = fatAss;
            textBMI(fatBMI);
        }
    }
    if(weight && height && document.querySelector('.weight').placeholder === 'kg'){
        bmi = weight/height**2*10000;
        showBMI(bmi);
        console.log(weight, typeof weight);
        console.log(document.querySelector('#BMIdisplay').innerHTML = bmi.toFixed(1));
    }else if(weight && height && document.querySelector('.weight').placeholder === 'pounds'){
        let inchesSum = height*12 + inches;
        bmi = (weight/inchesSum**2)*703;
        showBMI(bmi)
        console.log(weight, typeof weight);
        console.log(document.querySelector('#BMIdisplay').innerHTML = bmi.toFixed(1));
    }
});

// refresh function
let refresh = function(){
    document.querySelector('#BMIdisplay').innerHTML = '';
    document.querySelector('.weight').value = '';
    document.querySelector('.height').value = '';
    document.querySelector('.inches').value = '';
    document.getElementById('display').style.backgroundImage = homeImage;
    document.querySelector('.textBMI').textContent = 'Result';
    document.querySelector('.table').style.opacity = 0;
}

// refresh button
document.querySelector('#refresh').addEventListener('click', refresh);

// metric BMI
document.querySelector('#metric').addEventListener('click', function(){
    document.querySelector('#metric').style.backgroundColor = 'rgb(100, 160, 20)';
    document.querySelector('#metric').style.color = 'white';
    document.querySelector('#imperical').style.backgroundColor = 'rgb(240, 240, 240)';
    document.querySelector('#imperical').style.color = 'black';
    document.querySelector('.weight').placeholder = 'kg';
    document.querySelector('.height').placeholder = 'cm';
    document.getElementById('inches').style.display = 'none';
    refresh();
});

// imperical BMI
document.querySelector('#imperical').addEventListener('click', function(){
    document.querySelector('#imperical').style.backgroundColor = 'rgb(100, 160, 20)';
    document.querySelector('#imperical').style.color = 'white';
    document.querySelector('#metric').style.backgroundColor = 'rgb(240, 240, 240)';
    document.querySelector('#metric').style.color = 'black';
    document.querySelector('.weight').placeholder = 'pounds';
    document.querySelector('.height').placeholder = 'feet';
    document.getElementById('inches').style.display = 'block';
    refresh();
});