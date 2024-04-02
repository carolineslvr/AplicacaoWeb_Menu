import React, { useState } from "react";

const CalculadoraSalario = () => {
    const [horasPorSemana, setHorasPorSemana] = useState('');
    const [valorHora, setValorHora] = useState('');
    const [salarioBruto, setSalarioBruto] = useState(0);
    const [descontoINSS, setDescontoINSS] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const calcularDescontoINSS = (salario) => {
        let valorINSS = 0.00;
        if (salario <= 1302.00){
            valorINSS = salario * 0.075;        
        } else if (salario > 1302.00 && salario <= 2571.29){
            valorINSS = salario * 0.09;
        } else if (salario > 2571.29 && salario <= 3856.94){
            valorINSS = salario * 0.12;
        } else if (salario > 3586.94 && salario <= 7507.49){
            valorINSS = salario * 0.14;
        } else {
            valorINSS = 1051.04
        }
        setDescontoINSS(valorINSS.toFixed(2));
    }

    const calcularSalarioBruto = () => {
        const salario = horasPorSemana * valorHora * 5;
        setSalarioBruto(salario.toFixed(2));
        calcularDescontoINSS(salario);
        setMostrarResultado(true);
    }

    const mostrarValores = () => {
        if (valorHora === "" || horasPorSemana === "") {
            alert("Para concluir, os campos Valor da hora e Horas trabalhadas devem estar preenchidos.");
        } else {
            calcularSalarioBruto();
        }
    }

    return (
        <>
            <div>
                <h1>Informe o valor recebido por hora e a quantidade de horas trabalhadas</h1>
                <div>
                    <label>Valor da hora: </label>
                    <input type="number" value={valorHora} 
                    onChange={(e) => setValorHora(parseFloat(e.target.value))} />
                </div>
                <div>
                    <label>Horas trabalhadas: </label>
                    <input type="number" value={horasPorSemana} 
                    onChange={(e) => setHorasPorSemana(parseInt(e.target.value))} />
                </div>
                <br />
                <button onClick={mostrarValores}>Ver Resultado</button>
            </div>

            {mostrarResultado &&
                <div>
                    <h1>Resultado:</h1>
                    <p>Usuário: {localStorage.getItem("usuario")}</p>
                    <p>Salário Bruto: R$ {salarioBruto}</p>
                    <p>Valor descontado do INSS: R$ {descontoINSS}</p>
                    <p>Salário Líquido: R$ {(salarioBruto - descontoINSS).toFixed(2)}</p>
                </div>
            }
        </>
    )
}

export default CalculadoraSalario;
