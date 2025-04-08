import React,{useState,useEffect} from 'react'
{/*Dá pra usar com para o projeto de buscar usuario no github*/}
const GithubUser = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/LeoSergio')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    },[]) 

    console.log("dados", data), {/*no console encontra-se mais informações, se caso queira detalhar o perfil do usuario*/}
  return (
    <>
        <img src={data.avatar_url}  alt={data.name} />
        <p>{data.name}</p>
    
    </>
  )
}

export default GithubUser