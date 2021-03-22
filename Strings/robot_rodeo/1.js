/*
https://leetcode.com/problems/robot-bounded-in-circle/

Robot Bounded In Circle

On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.


Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:
Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.

Example 3:
Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.


*/

const getNewDirection = (current, move) => {
    if (move == "L") {
        switch(current) {
            case 'N':
                return 'W';
            case 'W': 
                return 'S';
            case 'S':
                return 'E';
            default: 
                return 'N';
        }
    } else {
        switch(current) {
            case 'N':
                return 'E';
            case 'W': 
                return 'N';
            case 'S':
                return 'W';
            default: 
                return 'S';
        }
    }
}

getNewPosition = function(direction, { x, y }) {
    switch(direction) {
        case 'N':
            y++;
            break;
        case 'E':
            x++;
            break;
        case 'S':
            y--;
            break;
        case 'W':
            x--;
            break;
    }

    return { x, y };
}

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let currentDirection = 'N';

    let moves = instructions.split('');

    moves.forEach((move) => {
        if (move == "L") {
            currentDirection = getNewDirection(currentDirection, "L");
        } else if (move == "R") {
            currentDirection = getNewDirection(currentDirection, "R");
        } else {
            ({x, y} = getNewPosition(currentDirection, {x, y}));
        }
    });
    return (x == 0 && y == 0);
};

console.log(isRobotBounded("GL"));