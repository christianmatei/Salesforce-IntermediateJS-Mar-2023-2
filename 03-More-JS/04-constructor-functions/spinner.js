//Create the spinner as a constructor function
function Spinner(){

    //private
    var count = 0
    
    // this => new object
    //public
    this.up = function(){
        return ++count
    }
    this.down = function(){
        return --count
    }
}
var spinner = new Spinner()
spinner.up()
spinner.down()