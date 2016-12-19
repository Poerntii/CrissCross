// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
function crossGeneration(){
    (function($) {
            var puzzleData = [
                    {
                        clue: "First letter of greek alphabet",
                        answer: "SCHULE",
                        position: 1,
                        orientation: "across",
                        startx: 1,
                        starty: 1
                    },
                    {
                        clue: "First letter of greek alphabet",
                        answer: "ALPHA",
                        position: 2,
                        orientation: "across",
                        startx: 3,
                        starty: 2
                    },
                    {
                        clue: "First letter of greek alphabet",
                        answer: "KULI",
                        position: 3,
                        orientation: "across",
                        startx: 1,
                        starty: 3
                    },
                    {
                        clue: "First letter of greek alphabet",
                        answer: "ALFONS",
                        position: 4,
                        orientation: "across",
                        startx: 2,
                        starty: 4
                    },
                    {
                        clue: "First letter of greek alphabet",
                        answer: "TOR",
                        position: 5,
                        orientation: "across",
                        startx: 2,
                        starty: 5
                    },
                    {
                        clue: "Not a one ___ motor, but a three ___ motor",
                        answer: "HALLO",
                        position: 6,
                        orientation: "down",
                        startx: 3,
                        starty: 1
                    }
                ] 

            $('#puzzle-wrapper').crossword(puzzleData);
    })(jQuery)
}
