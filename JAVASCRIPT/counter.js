
let counterValue=document.getElementById("counterValue")

class Counter{
    number=0;
   
    constructor()
    {
      this.number=0;  
    }
    Decrease() 
    {
       let decrease=document.getElementById("decrease");
       this.number =this.number-1;
       counterValue.innerHTML =this.number;
       console.log(this.number)
    }
    
    Increase()
    {
      let increase=document.getElementById("increase");
      this.number =this.number+1;
      counterValue.innerHTML =this.number;
      
      console.log(this.number)
      
    }

    Reset()
    {
      let reset =document.getElementById("reset");
      this.number =0;
      counterValue.innerHTML =this.number;
      console.log(this.number);
    }
}
let counter =new Counter();
console.log(counter);

