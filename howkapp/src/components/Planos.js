import React from 'react';
import '../components/Planos.css'

function Planos() {
    return (
        <div>
            <h2 className='titulo'>Conheça nossos planos</h2>

            <div className='planos' >

                <div className='plano-1'>
                    <p>por apenas
                        R$20,00
                        mensais
                    </p>
                </div>


                <div className='plano-2'>
                    <p>Plano anual
                        R$156,00
                        desconto especial
                    </p>
                </div>


                <div className='plano-3'>
                    <p>baixa renda
                        pague R$12,00 e
                        ganhe 3 messes
                        gratuitos
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Planos