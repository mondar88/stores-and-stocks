import './App.css';
import {useState} from 'react';


const inventory ={ flipflops:[
                              {Location: "Sainikpuri",   name: "Bata Shoes", available:true}, 
                              {Location: "Secunderabad", name:"Happy Shoes", available:true}, 
                              {Location: "Madhapur",     name: "Max Store", available:false}, 
                            ],
                   laptops:[
                              {Location: "Secunderabad", name: "Satyam Electronics", available:false}, 
                              {Location: "Madhapur",     name: "Chroma Enterprises", available:true}, 
                              {Location:"Kukatpally" ,   name: "Nextgen Computers", available:true},
                            ],
                   sanitizers:[
                              {Location:"Sainikpuri" ,   name: "Appolo Medicals", available: true}, 
                              {Location: "Banjara",      name: "Reddy labs", available:true}, 
                              {Location: "Gachibowli",   name: "Freshman Drugs", available:true},
                            ]
                  }



function App() {
  const [item, setItem] = useState("dummyItem");
  const [loc, setLoc] = useState("dummyLoc");
  const[message, setMessage] = useState("");
  var match = false;

    function itemHandler(event){
      const newItem = event.target.value;
      setItem(newItem);
    }

    function locHandler(event){
      const newloc = event.target.value;
      setLoc(newloc);
      var newMessage = "searching for " + item;
      setMessage(newMessage);
    }

    function storeSearch(event){
      //const goodsfun = 
      Object.keys(inventory).map((goods)=>{
        if(goods === item){
          console.log(inventory[goods]);
          //var options = goods;
         inventory[item].map((store) => {
          var place = (store.Location);
           if(place === loc){
             if(store.available){
              match = true;
              var newMessage = "your nearest location for " + item + " in " + loc + " is " + store.name;
              setMessage(newMessage);
             }
             else{
              match = true;
              newMessage = "currently out of stock ";
              setMessage(newMessage);
             }
            
           }

           
          
           return(0);
         })
          
        }
        return(0)
        
      });
          
      if(!match){
        var newMessage = "Sorry! couldn't find anything ☹️"
        setMessage(newMessage);
      }
      
    }

  return (
    <div className="App">
      <h1>Welcome to stock-and-stores</h1>
      <input onChange ={itemHandler} placeholder="item you are looking for"></input> 
      <input onChange ={locHandler} placeholder="your location"></input>
      <button type="submit" onClick={storeSearch}>Search</button>
      <h5> {message} </h5> 

      
    </div>
  );
}

export default App;
