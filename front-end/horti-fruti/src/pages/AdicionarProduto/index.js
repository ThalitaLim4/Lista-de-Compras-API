import './styles.css'

import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom'

import { message, Form, Input, Button, InputNumber  } from 'antd'

export default function Produtos(){
    
    const history = useHistory()

    function onChange(value) {
        console.log('changed', value);
      }
      
    async function handleSubmit(produto){
        api.post('/item', produto)
            .then((response) => {
                if(response.status === 201){
                    message.success('Produto adicionado com sucesso!', 5, true);
                    history.push('/produtos')
                }
            })
            .catch((err) =>{
                message.warning("Aconteceu um erro ao adicionar o produto" + err.response.data.message)
            })
    }

    return(
        <div className='produto_container'>
            <h1>Adicionar novo produto</h1>
            <br/>
            <div className='produto_card_container'>

            <Form 
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                <Form.Item
                    label='Name'
                    name="name"
                    rules={[{ required:true, message: "Insira o nome do item!"}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Descrição'
                    name="description"
                    rules={[{ required:true, message: "insira a descrição!"}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Quantidade'
                    name="quantity"
                    rules={[{ required:true, message: "Insira a quantidade"}]}
                >
                    <InputNumber />
                    
                    
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16}}>
                    <Button type='primary' htmlType='submit'>
                        Adicionar
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div> )}
        