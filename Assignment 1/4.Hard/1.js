/*var x=1;
console.log(typeof x)

var arr = [1,2,3];
var y = typeof arr;
y = 'array';
console.log(y);

var z = null;
var q = typeof z;
q = 'null'
console.log(q);
*/

function realType(value) {
    
    
    if(Array.isArray(value))
        {
            var change = typeof value;
            change = 'array';
            console.log(change);
            return;
        }
    
    if(value === null)
        {
            var change = typeof value;
            change = 'null';
            console.log(change);
            return;
        }
    
    console.log(typeof value);
}

realType(1);
realType('a');
realType(true);
realType([1]);
realType(null);





