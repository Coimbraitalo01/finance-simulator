import React, { useState } from 'react'
import './styles/global.css'

export default function App() {
  const [valor, setValor] = useState(50000)
  const [taxa, setTaxa] = useState(1.2)
  const [prazo, setPrazo] = useState(36)
  const [resultado, setResultado] = useState(null)

  const calcularParcela = () => {
    const taxaDecimal = taxa / 100
    const parcela = valor * (taxaDecimal * Math.pow(1 + taxaDecimal, prazo)) / 
                   (Math.pow(1 + taxaDecimal, prazo) - 1)
    setResultado({
      valorParcela: parcela.toFixed(2),
      totalPagar: (parcela * prazo).toFixed(2)
    })
  }

  return (
    <div className="xp-theme">
      <div className="simulador-container">
        <h1 className="titulo">SIMULADOR DE FINANCIAMENTO</h1>
        
        <div className="input-group">
          <label>VALOR FINANCIADO (R$)</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(parseFloat(e.target.value) || 0)}
            className="input-grande"
          />
        </div>

        <div className="input-group">
          <label>TAXA DE JUROS (% ao mês)</label>
          <input
            type="number"
            step="0.1"
            value={taxa}
            onChange={(e) => setTaxa(parseFloat(e.target.value) || 0)}
            className="input-grande"
          />
        </div>

        <div className="input-group">
          <label>PRAZO (meses)</label>
          <input
            type="number"
            value={prazo}
            onChange={(e) => setPrazo(parseInt(e.target.value) || 0)}
            className="input-grande"
          />
        </div>

        <button className="btn-simular" onClick={calcularParcela}>
          CALCULAR PARCELA
        </button>

        {resultado && (
          <div className="resultado">
            <h3>RESULTADO:</h3>
            <div className="valor-container">
              <span>Valor da parcela:</span>
              <span className="valor">R$ {resultado.valorParcela}</span>
            </div>
            <div className="detalhes">
              <p>Total financiado: R$ {valor.toLocaleString('pt-BR')}</p>
              <p>Total a pagar: R$ {parseFloat(resultado.totalPagar).toLocaleString('pt-BR')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}