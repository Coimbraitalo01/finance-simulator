import React from "react";

function Result({ result }) {
  return (
    <div className="mt-6 text-center space-y-1 text-sm">
      <p>Total Financiado: R$ {result.valor}</p>
      <p>Taxa de Juros: {result.juros}% ao mês</p>
      <p>Número de Parcelas: {result.parcelas}</p>
      <p>Valor da Parcela: R$ {result.parcela}</p>
      <p>Total a Pagar: R$ {result.total}</p>
    </div>
  );
}

export default Result;
