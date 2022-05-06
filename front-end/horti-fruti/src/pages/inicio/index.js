import { useHistory } from 'react-router-dom'
import './styles.css'

import logo from '../Assets/logo.png'
import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function  ListarProdutos(event){
        event.preventDefault();
        history.push('/produtos')
    }

    return(
        <div className='inicio_container'>
            <section>
                <img src={logo} alt='logo' className='center'/>
                <br/>
                <Button className='center' onClick={ListarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
}