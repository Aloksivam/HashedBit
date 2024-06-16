function findTax(salary) {
    let tax = 0;

    switch (true) {
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        case (salary > 1000000):
            tax = salary * 0.20;
            break;
        case (salary > 500000):
            tax = salary * 0.10;
            break;
        case (salary > 0):
            tax = 0;
            break;
        default:
            tax = 0;
            break;
    }

    return tax;
}
