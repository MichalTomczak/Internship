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
const board = [  
[ 7, 7, 7, 5, 1, 7 ],  
[ 1, 8, 1, 1, 1, 4 ],  
[ 3, 2, 3, 9, 7, 6 ],  
[ 9, 9, 3, 3, 6, 2 ],  
[ 1, 9, 3, 1, 8, 7 ],  
[ 5, 9, 2, 2, 4, 8 ]];  

`riddleSolver(board);`
**should return:**
[  
[ 0, 0, 0, 0, 0, 7 ],  
[ 1, 0, 0, 0, 1, 4 ],  
[ 3, 0, 0, 5, 7, 6 ],  
[ 9, 0, 0, 9, 6, 2 ],  
[ 1, 0, 0, 3, 8, 7 ],  
[ 5, 8, 0, 1, 4, 8 ]]

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