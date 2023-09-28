function factorial(num){
    if(num == 0){
        return 1
    }
    else if(num > 0){
        return num * factorial(num - 1)
    }
    else{
        return "Please enter a positive integer"
    }
}

console.log(factorial(-1))