---
tags:
  - blockchain
  - criptografia
aliases:
---
# Tecnologia Bitcoin
Uma maneira de pensar no Bitcoin é como uma *sequência de transações atômicas*. Cada
transação é autenticada por um remetente com a *solução* para um [[Processo de Mineração do Bitcoin|Quebra-cabeça Criptográfico]] anterior que foi armazenado como um script, por meio da linguagem de programação **Bitcoin Script**. 

A nova transação é bloqueada para o destinatário com um novo quebra-cabeça criptográfico que também é armazenado como um script, cujo novo dono é portador da solução para destravar transferências futuras. Cada transação é registrada no **livro razão** *global* *público* e *imutável*, a [[Processo de Mineração do Bitcoin]]. Somente o proprietário das chaves privadas que geraram o endereço onde estão os bitcoin consegue destrancar o valor para ser movido adiante. Consideramos Bitcoin com letra maiúscula quando representamos a rede, o sistema em si. O bitcoin com letra minúscula é a moeda, os valores transferidos por meio deste sistema.

# Atributos da Rede Bitcoin
- **Segurança:** A rede Bitcoin é segura desde que mais de 50% dos nós participantes sejam honestos.
- **Confiabilidade:** O estado da rede é mantido por todos os nós, que distribuem a cópia do livro-razão entre eles.
- **Descentralização:** Todos os nós da rede replicam os registros de transações, garantindo a distribuição dos dados.
- **Transações Peer-to-Peer**: Permite transações diretas entre usuários, sem a necessidade de intermediários ou autoridades centrais.
-  **Acessibilidade:** Qualquer pessoa pode ingressar ou sair da rede, validar transações ou minerar novas moedas a qualquer momento.
- **Transparência:** Todas as transações são verificáveis publicamente e estão disponíveis para todos os operadores da rede.
- **Ausência de Permissões:** Não são necessárias credenciais, identificações ou autorizações para participar da rede.

# Bitcoin Whitepaper
Um *whitepaper* é um documento informativo e técnico que apresenta a visão, metodologia e
detalhes de um projeto ou tecnologia, servindo como um guia para entender seus fundamentos e objetivos.

O whitepaper do Bitcoin, intitulado [**"Bitcoin: A Peer-to-Peer Electronic Cash System"**](https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf), em
Português Brasileiro, *"Bitcoin: Um Sistema de Dinheiro Eletrônico Peer-to-Peer"* foi lançado por Satoshi Nakamoto em 31 de outubro de 2008. Ele foi divulgado em uma lista de discussão sobre criptografia chamada ["The Cryptography Mailing List"](https://www.metzdowd.com/pipermail/cryptography/2008-October/thread.html) no site metzdowd.com, detalhando a estrutura e funcionamento de um sistema de pagamento eletrônico descentralizado. Este documento introduziu os conceitos inovadores que revolucionaram o sistema financeiro global e que foram usados de formas diferentes para o desenvolvimento de milhares de outras criptomoedas e tecnologias blockchain.

***Tudo começou com o Bitcoin, que ainda é o projeto mais importante, mais***
***descentralizado e o mais robusto candidato a sistema financeiro e de reserva de valor***
***global sem uma autoridade central.*** Muitos consideram todas as outras criptomoedas como tentativas centralizadas de falsificar o Bitcoin

O software Bitcoin foi lançado por Satoshi Nakamoto em **3 de janeiro de 2009**. Nesse dia,
Satoshi minerou o **bloco gênesis**, o primeiro bloco da blockchain do Bitcoin, marcando
oficialmente o início da rede Bitcoin.

### Mensagem no Bloco Gênesis
No bloco gênesis, Satoshi Nakamoto deixou uma mensagem significativa: 
*"The Times 03/Jan/2009 Chanceler à beira do segundo resgate aos bancos."*

`The Times 03/Jan/2009 Chancellor on brink of second bailout for banks`

Esta mensagem é uma referência à manchete do jornal britânico "The Times" de 3 de janeiro
de 2009, que destacava a crise financeira global e o iminente segundo resgate dos bancos pelo governo. A inclusão desta mensagem foi uma crítica implícita ao sistema financeiro tradicional e uma declaração de intenções sobre a necessidade de um sistema financeiro alternativo, descentralizado e resistente a manipulações e intervenções governamentais.

---
# Saiba mais sobre a origem do Bitcoin
https://nakamotoinstitute.org/literature/
March 9, 1993: [A Cypherpunk's Manifesto—Eric Hughes](https://cdn.nakamotoinstitute.org/docs/cypherpunk-manifesto.txt)
November 1998: [b-money—Wei Dai](http://www.weidai.com/bmoney.txt)
August 1, 2002: [Hashcash - A Denial of Service Counter-Measure—Adam Back](http://www.hashcash.org/hashcash.pdf)
October 31, 2008: [Bitcoin: A Peer-to-Peer Electronic Cash System—Satoshi Nakamoto](https://bitcoin.org/bitcoin.pdf)
August 29, 2017: [O Pedigree Acadêmico do Bitcoin—Arvind Narayanan and Jeremy Clark](https://queue.acm.org/detail.cfm?id=3136559)

---
# Fonte
[Scalar School - Bitcoin Tecnology Foundations and Career Paths](https://drive.google.com/drive/folders/1KJjZaftdF9XQZC2xA0aHavinoa3kJmjx)
