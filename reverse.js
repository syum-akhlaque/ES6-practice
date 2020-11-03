function reverseString(string){
    var reverse='';
    for (var i=0 ; i<string.length; i++)
    {
        var char= string[i];
        reverse=char+reverse;
    }
    return reverse;
}
var string="hello i am syum";
var reverseOutput= reverseString(string);
console.log(reverseOutput);