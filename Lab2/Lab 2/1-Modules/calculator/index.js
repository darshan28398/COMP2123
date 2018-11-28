// export annoymous object
module.exports =  {


    Add: function () {
        console.log("adding two numbers");
        
        return this.x + this.y;
    },

    Subtract: function () {
        console.log("subtracting two numbers");

        return this.x - this.y;
    }
}