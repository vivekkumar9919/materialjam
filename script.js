


        
console.log("not working");

 let btnid=document.getElementById('btnid');
 btnid.addEventListener('click',func1);  
 
function func1(){
        // let email=document.getElementById('floatingInput').value;
        // console.log(email);
        console.log("working btn");
        let name=document.getElementById('nameinp').value;
        let rating=document.getElementById('rating').value;
        let easy=document.getElementById('easy').value;
        // console.log(name,rating,easy)
        if(name==""){
            alert("Enter a name ");
            console.log('name');
            
        }
        else if(rating=='Rating'){
            alert('Select rating');
        }
        else if(easy=='How easy is it to find information on this site?'){
           alert("Select Difficulty level");
        }
        else
        {
            alert('Feedback submitted Successfully!');
            
        }
        
        
    }
    
