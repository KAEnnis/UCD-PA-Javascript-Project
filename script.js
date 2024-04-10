varTT = []
let calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", processTable );

    
    
    function processTable(event){
        trs = document.querySelectorAll("tbody > tr")
        rowId = 1;
        trs.forEach( row =>{
            if( row.getAttribute("id")==="totals"){
                return;
            }
            let quantity = document.getElementById("quantity"+rowId ).value;
            let emission = document.getElementById("emissions"+rowId).value;
            
            //if no quantity value: use the placeholder text instead
            if(!quantity){          
                let quantityPlaceHolderText = document.getElementById("quantity"+rowId ).getAttribute("placeholder");
                quantity = getNumberFrom(quantityPlaceHolderText);                      //extract numerical numberPart
                
            }
            //if no emission value: use the placeholder text instead
            if(!emission){ 
                let emissionPlaceHolderText = document.getElementById("emissions"+rowId ).getAttribute("placeholder");
                emission = getNumberFrom(emissionPlaceHolderText);                      //extract numerical numberPart
            }
            
            let calculatedResult = quantity*emission;
            let recordData = new DataObject(quantity, emission, calculatedResult);      //Just showing DataObject 
            let calculatedResults = quantity*emission;

            
            console.log(recordData);
            console.log(`calculatedResults: qty: ${recordData.quantity}, em: ${recordData.emission}, rslt: ${recordData.result}`)
            
            let totalCol = document.getElementById("totalEmissions"+rowId);
            totalCol.value = recordData.result;                                   //setting last col in HTML
            let totalValue = calculatedResult
            rowId += 1;

            // Retrieve Values
            var num1 = parseFloat(document.getElementById('totalEmissions1').value);
            var num2 = parseFloat(document.getElementById('totalEmissions2').value);
            var num3 = parseFloat(document.getElementById('totalEmissions3').value);
            var num4 = parseFloat(document.getElementById('totalEmissions4').value);
            var num5 = parseFloat(document.getElementById('totalEmissions5').value);
            var num6 = parseFloat(document.getElementById('totalEmissions6').value);
            var num7 = parseFloat(document.getElementById('totalEmissions7').value);

            // Perform addition
            var totalStationaryEmissions = num1 + num2 + num3 + num4 + num5 + num6 + num7;

            // Display the result
            document.getElementById('result') .value = calculatedResults;
            document.getElementById('totalStationaryEmissions') .innerText = totalStationaryEmissions;

            // Retrieve Values
            var num8 = parseFloat(document.getElementById('totalEmissions8').value);
            var num9 = parseFloat(document.getElementById('totalEmissions9').value);
            var num10 = parseFloat(document.getElementById('totalEmissions10').value);

            //Perform addition
            var totalMobileCombustion = num8 + num9 + num10;
  
          // Display the result
          document.getElementById('totalMobileEmissions') .innerText = totalMobileCombustion;

          // Retrieve Values
          var num11 = parseFloat(document.getElementById('totalEmissions11').value);
          var num12 = parseFloat(document.getElementById('totalEmissions12').value);
          var num13 = parseFloat(document.getElementById('totalEmissions13').value);

          //Perform addition
          var OtherDirectEmissions = num11 + num12 + num13;

        // Display the result
        document.getElementById('OtherDirectEmissions') .innerText = OtherDirectEmissions;

        // Retrieve Values
        var OtherDirectEmissions = parseFloat(document.getElementById('totalEmissions14').value);
     
        // Display the result
        document.getElementById('totalStationaryCombustion') .innerText = OtherDirectEmissions;
        
        
        });    
    }
    
    /**
     * Function to pull the numerical part from placeholder text.
     */
     function getNumberFrom( placeholderText ){
		let numberPart = placeholderText.split(" ")[0];
		numberPart = numberPart.replace(',', '');
		return parseFloat(numberPart).toFixed(2);
    }

    /**
     * Constructor function to create a data object if needed
     *  - called inside processTable() below for demo
     */
    function DataObject(quantity, emission, result){ 
        this.quantity = quantity;
        this.emission = emission;
        this.result = result;
    }

    
    calculateButton.addEventListener("click", sumupTable );
    function sumupTable(event){

       var num1 = (document.getElementById('totalEmissions1').value);
        var num2 = (document.getElementById('totalEmissions2').value);
        var num3 = (document.getElementById('totalEmissions3').value);
    }

    var result2 = num1 * num2;

     // Display the result
     document.getElementById('result') .innerText = result2;



     
     function generatePieChart() {
      const value1 = document.getElementById('totalStationaryEmissions') .innerText || 0;
      const value2 = document.getElementById('totalMobileEmissions') .innerText || 0;
      const value3 = document.getElementById('OtherDirectEmissions') .innerText || 0;
      const value4 = document.getElementById('totalStationaryCombustion') .innerText || 0;

      const ctx = document.getElementById('pieChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Total Stationary Emissions', 'Total Mobile Combustion', 'Total Other Direct Emissions', 'Total Stationary Combustion'],
          datasets: [{
            label: 'Pie Chart',
            data: [value1, value2, value3, value4],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false
        }
      });
    }
     
   
     