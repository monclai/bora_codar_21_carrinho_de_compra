import { X } from '@phosphor-icons/react'
import React from 'react'
import styled from 'styled-components'

const Titulo = styled.header`
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--color-text-color-secondary);

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--color-stroke-color);
    padding: 2.4rem 3.2rem;

`

export default function Cabecalho({total}) {
    return (
        <Titulo>
            <div>
                Seu carrinho tem <strong>{total} itens</strong>
            </div>
            <X size={24} color="#a1a1aa" />
        </Titulo>
    )
}
