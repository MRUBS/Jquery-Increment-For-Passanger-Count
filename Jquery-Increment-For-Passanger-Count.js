
 var total = document.getElementById("total");
 var value1,value2,value3;


function eventHandle(value){
        $('.qty'+value).click(function() {
            
        var $t = $(this),
            $in = $('input[name="'+$t.data('field')+'"]'),
            val = parseInt($in.val()),
            valMax = 4,
            valMin = 0;
        
        var total = document.getElementById("person_total_"+value);
                 
            // Check if a number is in the field first
            if(isNaN(val) || val < valMin) {
                // If field value is NOT a number, or
                // if field value is less than minimum,
                // ...set value to 0 and exit function
                $in.val(valMin);
                return false;
            } else if (val > valMax) {
                // If field value exceeds maximum,
                // ...set value to max
                $in.val(valMax);
                return false;
            }
            
            // Perform increment or decrement logic
            if($t.data('func') == 'plus') {
                if(val < valMax) {$in.val(val + 1);}
                console.log(total.value);
                 total.innerHTML = $in.val();
            } else {
                if(val > valMin) $in.val(val - 1);
                 total.innerHTML = $in.val();
            }
            
        });
        
    }

//function calling
value1=eventHandle(1);
value2=eventHandle(2);
value3=eventHandle(3);













