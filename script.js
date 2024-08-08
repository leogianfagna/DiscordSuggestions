const cards = {
    0: {
        ideia: 'não contar o tempo de prisão enquanto tiver afk, se cometeu crime tem q pagar sofrendo',
        autor: 'hxz7.',
        servidor: 'geral',
        id: '1801',
        votosPos: 26,
        votosNeg: 0
    },
    1: {
        ideia: 'Agora como a mensagem de morte tem que ser habilitada no /opções acredito que seria bem legal a vota do nome da arma ao matar o inimigo. "As armas nomeadas virão lendas"',
        autor: 'bibian0838',
        servidor: 'geral',
        id: '1720',
        votosPos: 9,
        votosNeg: 0
    },
    2: {
        ideia: 'Melhoria do Mestre das Chamas, o encantamento precisa de melhorias (Motivo- Blazer morrendo tudo de uma vez) Sugestões de como melhorar: "Aumentar a quantidade xp ganha ou aumentar a % visto que quando mata 1 vai logo os 32 e encantamento so tem a chance de procar no primeiro que você atacou e não nos 32). Porcentagem recomendada (inicial de 25% e aumentar 5% por nivel, (Maximo de 55% no nivel maximo). Acredito que esse balanceamento e algo necessario visto a dificuldade de conseguir e de procar o encantamento.',
        autor: 'bibian0838',
        servidor: 'henesys',
        id: '1715',
        votosPos: 14,
        votosNeg: 1
    },
    3: {
        ideia: 'adicionar a tag corno e a tag corna',
        autor: 'ychorei',
        servidor: 'geral',
        id: '1786',
        votosPos: 10,
        votosNeg: 3
    },
    4: {
        ideia: 'Retirar as poções de debuff do kit da guerra semanal gregos',
        autor: 'paulojlg',
        servidor: 'henesys',
        id: '1671',
        votosPos: 14,
        votosNeg: 2
    },
    5: {
        ideia: 'Só contar kill feitas durante eventos, já tá paia demais o pessoal se matando pra pegar top 1 nesse torneio.',
        autor: 'bibian0838',
        servidor: 'geral',
        id: '1777',
        votosPos: 18,
        votosNeg: 2
    },
    6: {
        ideia: '[Colheita assombrada]\nObjetivo: Melhoria drástica no encantamento [divino]. Eu venho testando diversos encantamentos e ficou muito evidente que a colheita assombrada e o pior com uma distância colossal para o segundo pior Encantamento para conseguir almas mesmo sendo um dos mais difícil de conseguir por ser divino.\nSugestão de melhoria: Nível:1/2/3/4/5\nRecarga: 14s/12s/10s/8s/6s(-2 por nível).\nChance:2%/3%/4%/5%/6% (+1% por nível).\nAlmas:1/3/5/7/9 (+2 por nível)\nAcredito que essas mudanças serão necessárias para um encantamento que está tão ruim como esse assumir o seu lugar nos patamar dos divinos!',
        autor: 'bibian0838',
        servidor: 'henesys',
        id: '1758',
        votosPos: 12,
        votosNeg: 0
    },
    7: {
        ideia: 'adicionar um evento de arco em que quem matasse mais mobs (um mob so e pequenno) ganharia ai teria tipo um timer de 5:00 para matar os mobs e no final quem matou mais ganhava',
        autor: 'xzy021',
        servidor: 'auseventos',
        id: '1694',
        votosPos: 10,
        votosNeg: 1
    },
    8: {
        ideia: 'Atualizar a textura dos pergaminhos depois de abertos com algum detalhe colorido de acordo com o categoria do pergaminho, para facilitar a localização e organização dos pergaminhos',
        autor: 'fdlzn',
        servidor: 'henesys',
        id: '1775',
        votosPos: 29,
        votosNeg: 0
    },
    9: {
        ideia: 'a punição de xingamento valer tanto no chat local como no /g',
        autor: 'aranhaextrem',
        servidor: 'geral',
        id: '1763',
        votosPos: 16,
        votosNeg: 0
    },
    10: {
        ideia: 'adicionar bloco de tijolo na loja do henesys e vanillew',
        autor: 'ychorei',
        servidor: 'henesys',
        id: '1701',
        votosPos: 12,
        votosNeg: 0
    },
    11: {
        ideia: 'Deixar os jogadores invisiveis em eventos de parkour, corrida e etc, é mt ruim a visualização qnd todos os jogadores estao aparecendo, ainda mais em eventos como parkour, sugiro que deixem ou os players totalmente invisiveis ou só o nick aparecendo',
        autor: 'polar8bits',
        servidor: 'auseventos',
        id: '1636',
        votosPos: 22,
        votosNeg: 0
    },
    12: {
        ideia: 'buff no "da lama ao luxo". Sugiro que buff nos frascos dados atraves do enchant de 1 P/N pra 3/4 Frascos P/N e diminuir tambem o tempo de recarga.',
        autor: 'snowpirulinha',
        servidor: 'henesys',
        id: '1652',
        votosPos: 10,
        votosNeg: 0
    },
    13: {
        ideia: 'ter como vender favo de mel no /vender (200 de saldo cada unidade)',
        autor: 'ychorei',
        servidor: 'henesys',
        id: '1780',
        votosPos: 12,
        votosNeg: 0
    },
    14: {
        ideia: 'adicionar flores pra vender na loja do henesys',
        autor: 'ychorei',
        servidor: 'henesys',
        id: '1691',
        votosPos: 13,
        votosNeg: 1
    },
    15: {
        ideia: 'voltar com a quantidade ilimitada d homes do vip supremo',
        autor: 'zzpowertechzz',
        servidor: 'henesys',
        id: '1742',
        votosPos: 29,
        votosNeg: 3
    }
};

function inserirCards(nome) {
    const container = document.getElementById('cards-sugestoes');
    container.innerHTML = '';

    for (let key in cards) {
        const card = cards[key];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const id = document.createElement('div');
        id.className = 'card-id';
        id.innerHTML = `#${card.id}`;

        const votos = document.createElement('div');
        votos.className = 'votos';
        votos.innerHTML = `<span>⬆️ ${card.votosPos}</span><span>⬇️ ${card.votosNeg}</span>`;

        const autor = document.createElement('div');
        autor.className = 'card-autor';
        autor.textContent = `@${card.autor}`;

        const ideia = document.createElement('div');
        ideia.className = 'card-ideia';
        ideia.innerHTML = `${card.ideia}`;

        const votosAutorContainer = document.createElement('div');
        votosAutorContainer.className = 'card-votos';
        votosAutorContainer.appendChild(votos);
        votosAutorContainer.appendChild(autor);
    
        // Mostra os elementos se condizer com o servidor escolhido
        if (card.servidor === nome) {
            cardDiv.appendChild(id);
            cardDiv.appendChild(ideia);
            cardDiv.appendChild(votosAutorContainer);
            container.appendChild(cardDiv);
        }
    }
}
