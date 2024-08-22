document.getElementById("bmiform").addEventListener('submit',function(e){

    e.preventDefault();


    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);


        if(gender && age && heightFeet && heightInches && weight){

          // convert height in meters
           const heightMeters =  ((heightFeet * 12) + heightInches) * 0.0254;
           const bmi =  weight / (heightMeters * heightMeters);
           const resultElement =  document.getElementById("result");
           
           let category = '';

           if (bmi < 18.5){

            category = 'underweight';

           }else if(bmi >=18.5 && bmi <24.9){

                category = 'Normal weight';

           }else if (bmi >= 25 && bmi < 29.9) {


            category = 'over weight';

           }else{

            category = 'Obese';

           }

           let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
           resultMessage += 'category:' + category;

           resultElement.innerHTML = resultMessage;

        }
});

