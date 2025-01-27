/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   var arr2=[];
   var j=0;
   for(let i=0;i<arr.length;i++)
    {
       if(fn(arr[i],i)) //for the truthy(not for the true)
       {
         arr2[j]=arr[i];
         j++;
       }
    }
    return arr2;
};
//We can use Array.filter() method to solve this problem