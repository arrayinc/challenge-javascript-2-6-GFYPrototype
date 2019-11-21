// *** YOUR ANSWER BELOW ***

let years = 1;

function yearsToMonthsToDays(years) {
    let months = years * 12;
    let days = months * 365;
    return years + " " + "year(s)" + " is equal to " + Math.floor(months) + " " + "month(s)" + " or " + days + " days.";
}

console.log(yearsToMonthsToDays(12));