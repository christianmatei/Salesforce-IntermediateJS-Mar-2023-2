
/* NO HTML, NO BUTTON, NO CLICK */
/* 
Create an object and assign it to a variable 'spinner' 

var spinner = //.......//

The object must have the following behaviors

spinner.up() //=> return 1
spinner.up() //=> return 2
spinner.up() //=> return 3
spinner.up() //=> return 4

spinner.down() //=> return 3
spinner.down() //=> return 2
spinner.down() //=> return 1
spinner.down() //=> return 0
spinner.down() //=> return -1

IMPORTANT NOTE:
    The outcome of the up() and down() methods SHOULD NOT able to be influenced from outside
    The following should NOT be possible
        =======
        spinner.count = 10000
        spinner.up() //=> SHOULD NOT return 10001
        ========
        window.count = 10000
        spinner.up() //=> SHOULD NOT return 10001
*/