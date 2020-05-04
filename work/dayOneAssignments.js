// Example: minMaxAvg([1,-2,9,4]) returns "The minimun is -2, the maximum is 9, and the average is 3."

function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    
    for (var i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
        sum += arr[i]
    }

    var avg = sum/arr.length

    return ("The minium is " + min + ", the maximum is " + max + ", and the average is " + avg + ".")
}

console.log(minMaxAvg([1,-2,9,4]))
