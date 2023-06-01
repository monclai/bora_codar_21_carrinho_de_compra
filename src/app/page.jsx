"use client"
import React, { useId, useState } from 'react';
import styled from 'styled-components';

import Cabecalho from './components/Cabecalho/Cabecalho';
import CardProduto from './components/CardProduto/CardProduto';
import Rodape from './components/Rodape/Rodape';


import cadeira from '../public/assets/product-image-cadeira.jpg'
import headset from '../public/assets/product-image-headset.jpg'
import monitor from '../public/assets/product-image-monitor.jpg'
import patinho from '../public/assets/product-image-patinho.jpg'
import teclado from '../public/assets/product-image-teclado.jpg'


const produtos = [
    {
        image: cadeira,
        alt: "cadeira",
        text: "Cadeira Gamer  RGB - Preta com Iluminação (Led)",
        value: 959.90,
    },
    {
        image: headset,
        alt: headset,
        text: "Headset Gamer RGB Preto",
        value: 99.90,
    },
    {
        image: monitor,
        alt: monitor,
        text: "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD",
        value: 8599.90,
    },
    {
        image: patinho,
        alt: patinho,
        text: "Patinho De Borracha Para Banho",
        value: 19.90,
    },
    {
        image: teclado,
        alt: teclado,
        text: "Teclado Gamer Mecânico Low Profile RGB AW510K 580",
        value: 1002.00,
    },
]


const MainPage = styled.main`
    height: 100vh;
    max-width: 42.8rem;
    margin-left: auto;
    background-color: var(--color-surface-color);

    display: grid;
    grid-template-rows: max-content 1fr max-content;

    .itens{
        display: grid;
        place-content: start;
        gap: 4.8rem;

        overflow-y: scroll;


        ::-webkit-scrollbar{
            width: .6rem;
        }
        ::-webkit-scrollbar-thumb{
            background-color: var(--color-stroke-color);
            border-radius: .8rem;
        }
        ::-webkit-scrollbar-track{
            background-color: var(--color-background-color);
        }
    }

`;


export default function page() {

    const [totalQtd, setTotalQtd] = useState(0);
    const [valorCarrinho, setValorCarrinho] = useState(0);

    function altTotalQtd(acao, valor) {
        console.log(valor)
        if(acao == 'add'){
            setTotalQtd(totalQtd + 1);
            setValorCarrinho(valorCarrinho + valor);
        }
        if(acao == 'sub'){
            if(totalQtd > 0){
                setTotalQtd(totalQtd - 1);
                setValorCarrinho(valorCarrinho - valor);
            }
        }
    }



    return (
        <MainPage>
            <Cabecalho total={totalQtd}/>
            <div className="itens">
                {/* <CardProduto /> */}
                {produtos.map(produto => {
                    return <CardProduto
                        key={useId()}
                        imagem={produto.image}
                        alt={produto.alt}
                        titulo={produto.text}
                        valor={produto.value}
                        altQtd={altTotalQtd}
                    />
                })}
            </div>
            <Rodape valorTotal={valorCarrinho}/>
        </MainPage>
    )
}
