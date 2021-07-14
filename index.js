/*
Coding in function bigToSmall. function accept 1 parameter arr(2D 
number array).
Your task is: First of all, refer to the example above, flat output arr 
to a one-dimensional array.

          var result="";
          var cache=[];

          for (var i = 0; i < 26; i++) 
                    cache[i] = String.fromCharCode(97+i);

          var result=cache.join("");
          console.log(result) 


And then sort array in descending order.
Finally, use the separator ">" to connect the elements into a string.
Don't complain about the situation like 1>1 is not reasonable, it is 
just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/ 
function bigToSmall(arr) {
          // cr8 an empty arr
          var cache=[];

          // loop via d arr and mk dm into a single arr
          for(let i = 0; i < arr.length; i++) {
                    cache = cache.concat(arr[i])
          }

          // sort d single arr and chande to str using join with <
          return cache = cache.sort((a, b) => b - a).join('>')
}


bigToSmall([[1,2],[3,4],[5,6]])
bigToSmall([[1,3,5],[2,4,6]]) 
bigToSmall([[1,1],[1],[1,1]]) 