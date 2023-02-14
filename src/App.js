import React,{useState,useEffect} from "react";
const url = "https://api.github.com/users";


function App() {
  const [users , setUsers] = useState([]);

  const getUser = async()=>{
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }
  useEffect(()=>{
    getUser()
  },[]);
  return (
    <>
    <ul>
      {
        users.map((index)=>{
          let id = index.id ,
               login = index.login,
               avatar = index.avatar_url ,
               html = index.html_url ;
               console.log(avatar);


               return (
                 <li key={id}>
                  <img src={avatar} alt={login}/>
                  <div>
                    <h3>{login}</h3>
                    <a href={html}></a>
                  </div>
                 </li>
               ) 
          
          
        })
           
      }
    </ul>
    </>
  );
}

export default App;
