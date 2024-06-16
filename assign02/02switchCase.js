function calc(n1,n2,op){
    let result;
    switch(op){
        case '+':
            result=n1+n2
            break
        case '-':
            result=n1-n2
            break
        case '*':
            result=n1*n2
            break
        case '/':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                return "Error: Division by zero";
            }
            break;
        default:
            return "Error: Invalid operator"
    }
    return result
}
console.log(calc(12,23,'/',33))