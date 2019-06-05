#Frontend Internship task

## Project requirements
In brief:
* Write a function that will receive a two-dimensional array of integers in range
[1, 1000].
* The numbers of columns and rows should be in range [3, 50].
* If there are three or more of the same integers adjacent vertically or
horizontally, "remove" them from the board.
* Removed integers are represented by the value 0. If an empty space has
integers on top of itself, drop integers until they hit a non-zero value or the
very bottom of the board.
* The function should be repeated until there are no integers left to be removed.
After that, a stable board should be returned.

**Example:**  
`const board = [`  
`[ 7, 7, 7, 5, 1, 7 ],`  
`[ 1, 8, 1, 1, 1, 4 ],`  
`[ 3, 2, 3, 9, 7, 6 ],`  
`[ 9, 9, 3, 3, 6, 2 ],`  
`[ 1, 9, 3, 1, 8, 7 ],`  
`[ 5, 9, 2, 2, 4, 8 ]];`  

`riddleSolver(board);`
**should return:**
`[`  
`[ 0, 0, 0, 0, 0, 7 ],`  
`[ 1, 0, 0, 0, 1, 4 ],`  
`[ 3, 0, 0, 5, 7, 6 ],`  
`[ 9, 0, 0, 9, 6, 2 ],`  
`[ 1, 0, 0, 3, 8, 7 ],`  
`[ 5, 8, 0, 1, 4, 8 ]]`

Requirements:
* The function should be written in ES5 or ES6 (ECMAScript :) ) and properly
exported
* The function must take exactly 1 argument, board
* If your submission doesn’t run because of any errors (syntax error, etc.) we
will neither check not grade it

* Name the file example.js,so that we know where to find your solution.
Function should be named riddleSolver.
* There’s no need for any external packages/libraries
* Send us your solution preferably by linking to a git repository (github, gitlab,
bitbucket, etc.), or as a .zip, .7z, .xz, .lzma, or .tar.gz archive (please don’t use
.rar)
* We will check the computational complexity of your solution as well as quality
and readability of your code and if your submission gives correct answers to
our test cases of course.
* We expect you to provide us with some documentation about your solution
(e.g. README file, JSDoc).

##Solution details

* Function `riddleSolver` accepts two-dimensional board of integers. 
  * It starts by transposing the board in order to easily take care of the 'falling' mechanism. In transposed board zeroes can be added at the begining of the row.
    * After transposing a recurrent `solverLoop` function is fired with each iteration cleaning all of the available matches, and comparing starting and ending arrays`compareArrays` in order to tell when the recurrency should stop.
      * Function`removeMatches` uses `map` and `filter` to iterate through every board position and call `checkPosition` function which decides if current position is or is not part of the matched sequence.
        * The `checkPosition` functions checks first if the current position is not located close to the borders. If that is the case, depending on which border it is, some matches will not be possible. After that it uses the `compareThree` function to compare the position and two other adjacent positions for a match.
      * After removing the sequence the `addZeros` function is called, this function checks for the original board sizes row by row and fills missing spots with zeros.
 * Finally the board is transposed back and returned.