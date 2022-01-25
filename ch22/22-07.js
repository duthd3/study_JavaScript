function foo(){
    console.log("foo's this: ", this);
    function bar(){
        console.log("bar's this: ", this);
    }
    bar();
}
foo();