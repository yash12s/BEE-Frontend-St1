import React from 'react'
import axios from 'axios'

export default function back() {
    function Getb(){
        axios.get("http://localhost:4000/massbunk/getAllPost")
    .then(data => {console.log(data.data);
    // document.getElementById("root2").innerHTML=data.data[0].title
    })
    .catch(error => console.log(error));
    return " ";
    }
  return (
    <div>
      
    </div>
  )
}
