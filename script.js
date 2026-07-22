// Listas de vagas e apartamentos GERAIS
const vagas = [
    "VAGA 3", "VAGA 4", "VAGA 5", "VAGA 6", "VAGA 7", "VAGA 9", "VAGA 10", 
    "VAGA 11", "VAGA 12", "VAGA 13", "VAGA 14", "VAGA 15", "VAGA 16", "VAGA 17", 
    "VAGA 18", "VAGA 19", "VAGA 20", "VAGA 21", "VAGA 22", "VAGA 23", "VAGA 24", 
    "VAGA 25", "VAGA 26", "VAGA 27", "VAGA 28", "VAGA 29", "VAGA 30", "VAGA 31", 
    "VAGA 32", "VAGA 33", "VAGA 34", "VAGA 35", "VAGA 36", "VAGA 37", "VAGA 38", 
    "VAGA 39", "VAGA 40", "VAGA 41", "VAGA 42", "VAGA 43", "VAGA 44", "VAGA 45", 
    "VAGA 46", "VAGA 47", "VAGA 48", "VAGA 49", "VAGA 50", "VAGA 51", "VAGA 52", 
    "VAGA 53", "VAGA 54", "VAGA 55", "VAGA 56", "VAGA 57", "VAGA 58", "VAGA 59", 
    "VAGA 60", "VAGA 61", "VAGA 62", "VAGA 65", "VAGA 66", "VAGA 67", "VAGA 69", 
    "VAGA 72", "VAGA 73", "VAGA 74", "VAGA 75", "VAGA 76", "VAGA 77", "VAGA 78", 
    "VAGA 79", "VAGA 80", "VAGA 81", "VAGA 82", "VAGA 83", "VAGA 84", "VAGA 85", 
    "VAGA 86", "VAGA 87", "VAGA 88", "VAGA 89", "VAGA 90", "VAGA 91", "VAGA 92", 
    "VAGA 93", "VAGA 94", "VAGA 95", "VAGA 96", "VAGA 97", "VAGA 98", "VAGA 99", 
    "VAGA 100", "VAGA 101", "VAGA 102", "VAGA 103", "VAGA 104", "VAGA 105", 
    "VAGA 106", "VAGA 107", "VAGA 108", "VAGA 109", "VAGA 110", "VAGA 111", 
    "VAGA 112", "VAGA 113", "VAGA 114", "VAGA 115", "VAGA 116", "VAGA 117", 
    "VAGA 118", "VAGA 119", "VAGA 120"
];

const apartamentos = [
    "AP-0503", "AP-1108", "AP-0607", "AP-0101", "AP-1305", "AP-0402", "AP-0016", 
    "AP-0804", "AP-0014", "AP-0103", "AP-0407", "AP-1002", "AP-1307", "AP-0304", 
    "AP-1304", "AP-0905", "AP-0707", "AP-0706", "AP-0015", "AP-0206", "AP-0802", 
    "AP-0107", "AP-0002", "AP-0904", "AP-0801", "AP-0205", "AP-0204", "AP-0907", 
    "AP-0301", "AP-0901", "AP-1107", "AP-1208", "AP-0704", "AP-0308", "AP-1101", 
    "AP-0803", "AP-0404", "AP-0302", "AP-1302", "AP-0605", "AP-0807", "AP-1206", 
    "AP-1301", "AP-1201", "AP-1001", "AP-0102", "AP-1005", "AP-1306", "AP-0705", 
    "AP-0507", "AP-1202", "AP-0013", "AP-0104", "AP-0306", "AP-1103", "AP-0602", 
    "AP-0902", "AP-0806", "AP-0504", "AP-0108", "AP-1102", "AP-0603", "AP-0508", 
    "AP-0505", "AP-1205", "AP-0808", "AP-1007", "AP-0702", "AP-1004", "AP-0405", 
    "AP-1308", "AP-0601", "AP-0506", "AP-0606", "AP-0105", "AP-0501", "AP-0401", 
    "AP-0305", "AP-0017", "AP-0207", "AP-0908", "AP-1106", "AP-1203", "AP-0012", 
    "AP-0703", "AP-1105", "AP-1207", "AP-1104", "AP-0708", "AP-0003", "AP-0203", 
    "AP-0903", "AP-1008", "AP-0201", "AP-0502", "AP-0208", "AP-0202", "AP-0307", 
    "AP-0604", "AP-0805", "AP-0403", "AP-0701", "AP-0106", "AP-0408", "AP-1303", 
    "AP-0303", "AP-0608", "AP-1003", "AP-1006", "AP-0406", "AP-1204", "AP-0906"
];

// Listas de vagas e apartamentos PCD
const vagasPCD = ["VAGA 63", "VAGA 64", "VAGA 70", "VAGA 71"];
const apartamentosPCD = ["AP-0018", "AP-0001", "AP-0011", "AP-0004"];

// Variáveis para guardar os resultados e o CSV poder usar depois
let resultadoFinalGeral = [];
let resultadoFinalPCD = [];

function realizarSorteio() {
    const vagaFixa = "VAGA 82";
    const aptoFixo = "AP-1108";
    
    // Esconde o botão de baixar caso a pessoa rode o sorteio de novo
    document.getElementById('btnBaixar').style.display = 'none';

    // === SORTEIO GERAL ===
    let vagasDisponiveis = vagas.filter(v => v !== vagaFixa);
    let aptosDisponiveis = apartamentos.filter(a => a !== aptoFixo);

    for (let i = aptosDisponiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [aptosDisponiveis[i], aptosDisponiveis[j]] = [aptosDisponiveis[j], aptosDisponiveis[i]];
    }

    let resultadoGeral = [];
    for (let i = 0; i < vagasDisponiveis.length; i++) {
        resultadoGeral.push({
            vaga: vagasDisponiveis[i],
            apto: aptosDisponiveis[i] || "--- LIVRE ---"
        });
    }

    resultadoGeral.push({ vaga: vagaFixa, apto: aptoFixo });
    resultadoGeral.sort((a, b) => parseInt(a.vaga.replace("VAGA ", "")) - parseInt(b.vaga.replace("VAGA ", "")));

    // === SORTEIO PCD ===
    let aptosPCDDisponiveis = [...apartamentosPCD];
    for (let i = aptosPCDDisponiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [aptosPCDDisponiveis[i], aptosPCDDisponiveis[j]] = [aptosPCDDisponiveis[j], aptosPCDDisponiveis[i]];
    }

    let resultadoPCD = [];
    for (let i = 0; i < vagasPCD.length; i++) {
        resultadoPCD.push({
            vaga: vagasPCD[i],
            apto: aptosPCDDisponiveis[i] || "--- LIVRE ---"
        });
    }
    
    resultadoPCD.sort((a, b) => parseInt(a.vaga.replace("VAGA ", "")) - parseInt(b.vaga.replace("VAGA ", "")));

    // Salva nas variáveis globais
    resultadoFinalGeral = resultadoGeral;
    resultadoFinalPCD = resultadoPCD;

    animarSorteio(resultadoGeral, resultadoPCD);
}

function animarSorteio(dadosGerais, dadosPCD) {
    const corpoTabela = document.getElementById('corpoTabela');
    const corpoTabelaPCD = document.getElementById('corpoTabelaPCD');
    const tabela = document.getElementById('tabelaResultado');
    const tabelaPCD = document.getElementById('tabelaResultadoPCD');
    const titulos = document.querySelectorAll('.titulo-tabela');
    
    const btnSorteio = document.getElementById('btnSorteio');
    const btnBaixar = document.getElementById('btnBaixar');
    
    btnSorteio.disabled = true;
    btnSorteio.textContent = "Sorteando... Aguarde";
    btnSorteio.style.backgroundColor = "#95a5a6"; 
    btnSorteio.style.cursor = "wait";

    corpoTabela.innerHTML = ""; 
    corpoTabelaPCD.innerHTML = "";
    
    tabela.style.display = 'table'; 
    tabelaPCD.style.display = 'table';
    titulos.forEach(titulo => titulo.style.display = 'block');

    // Preenche a tabela PCD com o efeito de giro
    dadosPCD.forEach(item => {
        const tr = document.createElement('tr');
        const tdVaga = document.createElement('td');
        tdVaga.textContent = item.vaga;
        
        const tdApto = document.createElement('td');
        tdApto.className = "celula-animada-pcd"; 
        tdApto.textContent = "Girando...";
        
        tr.appendChild(tdVaga);
        tr.appendChild(tdApto);
        corpoTabelaPCD.appendChild(tr);
    });

    // Preenche a tabela Geral com o efeito de giro
    dadosGerais.forEach(item => {
        const tr = document.createElement('tr');
        const tdVaga = document.createElement('td');
        tdVaga.textContent = item.vaga;
        
        const tdApto = document.createElement('td');
        tdApto.className = "celula-animada-geral"; 
        tdApto.textContent = "Girando...";
        
        tr.appendChild(tdVaga);
        tr.appendChild(tdApto);
        corpoTabela.appendChild(tr);
    });

    const celulasPCD = document.querySelectorAll('.celula-animada-pcd');
    const celulasGerais = document.querySelectorAll('.celula-animada-geral');
    
    let tempoDecorrido = 0;
    const tempoTotal = 3000; 
    const velocidade = 50; 

    const roleta = setInterval(() => {
        // Animação PCD
        celulasPCD.forEach(celula => {
            celula.textContent = apartamentosPCD[Math.floor(Math.random() * apartamentosPCD.length)];
        });
        
        // Animação Geral
        celulasGerais.forEach(celula => {
            celula.textContent = apartamentos[Math.floor(Math.random() * apartamentos.length)];
        });

        tempoDecorrido += velocidade;

        if (tempoDecorrido >= tempoTotal) {
            clearInterval(roleta); 
            
            // Fixa os resultados finais PCD
            celulasPCD.forEach((celula, index) => {
                celula.textContent = dadosPCD[index].apto;
            });

            // Fixa os resultados finais Gerais
            celulasGerais.forEach((celula, index) => {
                celula.textContent = dadosGerais[index].apto;
            });
            
            btnSorteio.disabled = false;
            btnSorteio.textContent = "Realizar Novo Sorteio";
            btnSorteio.style.backgroundColor = "#27ae60"; 
            btnSorteio.style.cursor = "pointer";
            
            btnBaixar.style.display = 'block';
        }
    }, velocidade);
}

// === NOVA FUNÇÃO PARA GERAR E BAIXAR O CSV ===
// === NOVA FUNÇÃO PARA GERAR E BAIXAR O CSV ===
function baixarCSV() {
    // Adiciona o título com a vigência na primeira linha do Excel/CSV
    let conteudoCSV = "SORTEIO (VIGENCIA DE 17 DE AGOSTO DE 2026 A 16 DE AGOSTO DE 2027)\n\n";
    
    // Cabeçalho das colunas
    conteudoCSV += "Categoria;Vaga;Apartamento Sorteado\n";

    // Adiciona as vagas PCD
    resultadoFinalPCD.forEach(linha => {
        conteudoCSV += `PCD;${linha.vaga};${linha.apto}\n`;
    });

    // Adiciona as vagas gerais
    resultadoFinalGeral.forEach(linha => {
        conteudoCSV += `Geral;${linha.vaga};${linha.apto}\n`;
    });

    // Gera e baixa o arquivo
    const blob = new Blob(["\uFEFF" + conteudoCSV], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "Resultado_Sorteio_Vagas_Viva_Vista.csv";
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
}