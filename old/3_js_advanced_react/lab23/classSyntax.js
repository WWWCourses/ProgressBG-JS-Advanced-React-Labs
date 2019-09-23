class A{
  constructor(){
    this.now = new Date();
  }

  logNow(){
    console.log(`now: ${this.now.toLocaleString()}`);
  }
}

class B extends A{
  constructor(){
    // not needed, as we did no pass any args...
    super()
  }
}

let b = new B();
b.logNow(); 