import { Exam } from "./exam";

let exam = new Exam;
exam.addQuestion({
    caption: 'what do you get when you mix red and yellow',
    answers:[
        'Pink',
        'Orange',
        'brown',
        'Black'
    ],
    correctIndex: 1
});
exam.addQuestion({
    caption: 'what do you get when you mix black and white',
    answers:[
        'Grey',
        'Orange',
        'brown',
        'Black'
    ],
    correctIndex: 1
});
exam.addQuestion({
    caption: 'what do you get when you mix blue and red',
    answers:[
        'Purple',
        'Cyan',
        'brown',
        'Black'
    ],
    correctIndex: 2
});
exam.addQuestion({
    caption: 'what do you get when you mix green and magenta',
    answers:[
        'Purple',
        'Cyan',
        'brown',
        'White'
    ],
    correctIndex: 3
});

exam.print();

let ans1 = [0,1,2,3];
let ans2 = [3,2,1,0];
let ans3 = [3,2,1,0];

console.log(ans1);
console.log(exam.grade(ans1));
console.log(ans2);
console.log(exam.grade(ans2));
console.log(ans3);
console.log(exam.grade(ans3));