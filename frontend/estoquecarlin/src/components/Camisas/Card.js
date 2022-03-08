import React from 'react'
import Axios from 'axios'
import './Card.css'

const Card = () => {
    const [list, setList] = React.useState()

    React.useEffect(()=>{
        Axios.get('http://localhost:3003/camisas/golacareca/branca').then((r)=>{
            setList(r.data)
        })
    },[])


    const valores = list && list.map((t)=> parseInt(t.quantidade))
    const total = list && valores.reduce(function(soma, i){
        return soma + i
    })
   

  return (

    <div className='box-card' >

{list && list.map((c)=><div className='box-i'   key={c.tamanho}>
    <p>Cor = {c.cor}</p>
    <p>Tamanho = {c.tamanho}</p>
    <p>Quantidade = {c.quantidade}</p>
    <p>Localizacao = {c.local}</p>
    <p className='p-p'>Preco = {c.preco}</p>

</div> )}
    <h1>TOTAL = {total}</h1>

 
    </div>
  )
}

export default Card