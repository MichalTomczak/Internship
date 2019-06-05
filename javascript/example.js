export default function riddleSolver(board) {

    function transpose(board) {
        return Object.keys(board[0])
            .map(colNumber => board.map(rowNumber => rowNumber[colNumber]));
    }

    function compareThree(num1, num2, num3) {
        return (num1 === num2 && num2 === num3);
    }

    function compareArrays(array1, array2){
        let result = true;
        array1.map((row, rowNumber)=>{
            row.map((element,index)=>{
                if(element !== array2[rowNumber][index]) result = false;})
        });
        return result;
    }

    function checkPosition(board, row, column, position) {

        let maxColumn = board[row].length-1;
        let maxRow = board.length-1;

        let rpone = row === maxRow  ? undefined : board[row + 1][column];
        let rptwo = row >= maxRow - 1 ? undefined : board[row + 2][column];
        let rmone = row === 0 ? undefined : board[row - 1][column];
        let rmtwo = row <= 1 ? undefined : board[row - 2][column];
        let cpone = column === maxColumn  ? undefined : board[row][column + 1];
        let cptwo = column >= maxColumn - 1 ? undefined : board[row][column + 2];
        let cmone = column === 0 ? undefined : board[row][column - 1];
        let cmtwo = column <= 1 ? undefined : board[row][column - 2];

        return !(compareThree(position, rpone, rptwo) ||
        compareThree(position, rpone, rmone) ||
        compareThree(position, rmone, rmtwo) ||
        compareThree(position, cpone, cptwo) ||
        compareThree(position, cpone, cmone) ||
        compareThree(position, cmone, cmtwo))
    }

    function removeMatches(board) {
        return board.map((row, rowNumber) => {
            return row.filter((position, column) => {
                return checkPosition(board, rowNumber, column, position)
            })
        })
    }

    function addZeros(partialBoard, originalBoard) {
        return partialBoard.map((row, rowNumber) => {
            let difference = originalBoard[rowNumber].length - row.length;
            for (let i = 0; i < difference; i++) {
                row.unshift(0);
            }
            return row;
        });
    }

    function solverLoop(board) {
        let changed = addZeros(removeMatches(board),board);
        if(compareArrays(changed,board)) return changed;
        else solverLoop(changed);
        return changed;
    }

    return transpose(solverLoop(transpose(board)));

}