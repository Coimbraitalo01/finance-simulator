import React, { useState } from "react";

function Form({ setResult }) {
  const [valor, setValor] = useState("");
  const [juros, setJuros] = useState("");
  const [parcelas, setParcelas] = useState("");

  const calcular = (e) => {
    e.preventDefault();

    const valorNum = parseFloat(valor);
    const jurosNum = parseFloat(juros) / 100;
    const parcelasNum = parseInt(parcelas);

    if (isNaN(valorNum) || isNaN(jurosNum) || isNaN(parcelasNum)) return;

    const parcela =
      (valorNum * jurosNum) / (1 - Math.pow(1 + jurosNum, -parcelasNum));
    const total = parcela * parcelasNum;

    setResult({
      valor: valorNum.toFixed(2),
      juros: (jurosNum * 100).toFixed(2),
      parcelas: parcelasNum,
      parcela: parcela.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <form className="space-y-4" onSubmit={calcular}>
      <h2 className="text-center font-bold text-yellow-500 mb-2">Simulador de Financiamento</h2>
      <input
        type="number"
        placeholder="Valor financiado (R$)"
        className="w-full p-2 border rounded"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Taxa de juros (% ao mês)"
        className="w-full p-2 border rounded"
        value={juros}
        onChange={(e) => setJuros(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de parcelas"
        className="w-full p-2 border rounded"
        value={parcelas}
        onChange={(e) => setParcelas(e.target.value)}
      />
      <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500">
        Simular
      </button>
    </form>
  );
}

export default Form;
