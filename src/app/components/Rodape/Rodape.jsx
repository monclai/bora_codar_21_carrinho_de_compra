import { Tag, X } from '@phosphor-icons/react';
import React, { useState } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    padding: 3.2rem;
    border-top: .1rem solid var(--color-stroke-color);


    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 2rem;
    }

    .coupon{
        margin-top: 1.6rem;
        color: var(--color-brand-color-light);

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .8rem;
    }

    button{
        margin-top: 3.2rem;
        background-color: var(--color-brand-color);
        color: var(--color-text-color-primary);

        border: 0;
        font-size: 2rem;
        padding-block: 2rem;
        width: 100%;
        border-radius: .8rem;
    }

    button:hover{
        background-color: var(--color-brand-color-light);
    }

    .coupon span:hover{
        color: var(--color-brand-color-lighter);
    }

    .coupon input{
        width: 35%;
        background: var(--color-surface-color);
        border: 0;
        border-bottom: .1rem solid var(--color-brand-color-light);
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: .2rem .2rem;

        position: relative;
    }

    input:focus,
    input:hover{
        outline: 0;
    }

    .close{
        position: absolute;
        bottom: 14%;
    }
`;


export default function Rodape({ valorTotal }) {

    const [addCoupon, setAddCoupon] = useState(true);
    const [coupon, setCoupon] = useState("");

    function newCoupon() {
        setAddCoupon(!addCoupon);
    }

    function removeCoupon() {
        setAddCoupon(!addCoupon);
        setCoupon("");
    }

    function valueCoupon(event) {
        setCoupon(event.target.value);
    }

    valorTotal = valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


    return (
        <Footer>
            <div className="total">
                <span>Total:</span>
                <strong>{valorTotal}</strong>
            </div>

            <div className="coupon">
                <Tag size={20} color='#A855F7' />

                {addCoupon ? (
                    <span onClick={() => newCoupon()}>Adicionar cupom</span>
                ) : (
                    <>
                        <input type="text" maxLength={15} onChange={(e) => valueCoupon(e)} value={coupon}/>
                        <X size={15} color='white' className='close' onClick={() => removeCoupon()} />
                    </>
                )}
            </div>

            <button>Finalizar compra</button>

        </Footer>
    )
}
