
 let Record_code = document.getElementById("record_code");
 class Color{
     colorType ='';
     record =[]
 
     constructor(type)
     {
         this.colorType=type;//HEX
         //to do
     }
     generate()
     {
         let Generate_code =document.getElementById("generate_code");
         this.getRandomNumber();
         this.getRecords();
        
     }
     getRandomNumber()
     {
         
             
             let Background=document.getElementById("background");
             let Input=document.getElementById("input");
             let val =Input.value;
 
             let Code_color =document.getElementById("code_color").innerHTML
               ="#"+Math.floor(Math.random()*16777215).toString(16).toUpperCase();  
             this.record.push(Code_color);
            Background.style.backgroundColor=Code_color; 
            console.log(Code_color);
          
             Record_code.innerHTML += "<br>"+Code_color;
               
                
      
     }
     getRecords()
     {
        
     }
     reset()
     {
        let Reset =document.getElementById("reset");
       // this.record.push(null);
        Record_code.innerHTML="";
     }
 }
 let color =new Color();
 console.log(color);
 