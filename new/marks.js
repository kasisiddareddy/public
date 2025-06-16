var name = prompt("Enter your Name")
var marks = prompt("Enter Marks")

switch (true){
    case marks >91&&marks<=100:
        result='First Rank';
        break;
    case marks >81&&marks<90:
        result='Second Rank';
        break;
    case marks >71&&marks<80:
        result='Third Rank';
        break;
    case marks >61&&marks<70:
        result='Fourth Rank';
        break;
    case marks >51&&marks<60:
        result='Fail';
        break;
    default:
    result='Invalid Marks'
}
document.write(result )