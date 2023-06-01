import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Minus, Plus } from '@phosphor-icons/react'

const Main = styled.main`
    
    padding: 3.2rem;

    display: flex;
    gap: 2.4rem;


    img{
        width: 10.4rem;
        height: 10.4rem;
        object-fit: cover;
        border-radius: .8rem;
    }

    .title{
        color: var(--color-text-color-secondary);
    }

    .price-qty{
        margin-top: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .price{
        font-weight: 700;
    }

    .qty{
        display: flex;
        align-items: center;
    }

    .qty span,
    .qty button{
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
    }

    button{
        border-radius: .8rem;
        border: .1rem solid white;
        background-color: transparent;
        color: var(--color-brand-color-light);
        font-size: 1.6rem;
    }

    .add{
        border-color: var(--color-brand-color-light);
    }

    .add:hover{
        background-color: var(--color-brand-color-light);
        color: var(--color-text-color-primary);
    }

    .sub{
        border-color: var(--color-stroke-color);
    }

    .sub:hover{
        border-color: var(--color-brand-color-light);
        color: var(--color-text-color-primary)
    }

`

export default function CardProduto({ imagem, alt, titulo, valor, altQtd }) {

    const [qtd, setQtd] = useState(0);

    const convertValor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const limit = 49
    if (titulo.length > limit) {
        titulo = titulo.substring(0, limit - 1) + "..."
    }

    function alterQtd(alter) {
        if (alter === 'add') {
            setQtd(qtd + 1);
            altQtd(alter, valor)
        }
        if (alter == 'sub') {
            if (qtd > 0) {
                setQtd(qtd - 1);
                altQtd(alter, valor)
            }
        }
    }

    return (
        <Main>
            <Image src={imagem} alt={alt} priority={true} />
            <div className="details">
                <div className="title">
                    {titulo}
                </div>
                <div className="price-qty">
                    <div className="price">{convertValor}</div>
                    <div className="qty">
                        <button className="sub" onClick={() => alterQtd("sub")}>
                            <Minus />
                        </button>
                        <span>{qtd}</span>
                        <button className="add" onClick={() => alterQtd("add")}>
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
        </Main>
    )
}
