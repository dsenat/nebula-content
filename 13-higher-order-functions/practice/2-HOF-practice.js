/*Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */
    
    function changeNums(arr, func){
        let result = []
        for(let i = 0; i < arr.length; i++){
          result.push(func(arr[i]))
        }
        return result;
      }
  

/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

    function stringInfo(feature, str){
        return feature(str)
      }
      
      function length(str){
        return str.length
      }
      
      function vowels(str){
        let letters = newSet (["a","e","i","o","u","A","E","I","O","U"])
        let count = 0
        for(let i = 0; i < str.length; i++){
          if(letters(str[i])){
            count++
          }
        }
        return count
      }
      
      function capitals(str){
        let count = 0
        for(let i = 0; i < str.length; i++){
          if(str[i] >= "A" && str[i] <= "Z"){
            count++
          }
        }
        return count
      }
      
      function nonLetters(str){
        let count = 0
        for(let i = 0; i <str.length; i++){
          if ((str[i] < 'a' || str[i] > 'z') && (str[i] < 'A' || str[i] > 'Z')){
            count++
          } 
        }
        return count
      }
      

/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18                            */
    
    function minimizeNums(reducer, nums)
    let result = nums[0]
    for (let i =0; i < nums.length; i++){
      result = reducer(result, nums[i])
    }
    return result