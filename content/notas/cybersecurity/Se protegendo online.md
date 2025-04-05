---
tags:
  - cybersecurity
---
# Rastreio Online 
Um pensamento comum que existe na comunidade de segurança é que as operações do **OSINT** são completamente *invisíveis* e, em nenhum momento, o indivíduo ou a organização que você está investigando perceberá quem você é. É por isso que este tipo de investigação é chamada de **“operação passiva”**.

No entanto, algo que deve saber nesta altura é que ==nada é privado na Internet==; e desde o momento em que entra no seu motor de busca fidedigno, o seu browser está a dar a sua informação aos websites que visita. Afinal, cada vez que interage com o seu browser (seja acedendo a um website ou descarregando um ficheiro), ele entrega uma pequena quantidade de informação sobre você, dados que não só permitem ao website saber que tipo de configuração deve usar para exibir bem no seu ecrã como também dados que podem ser utilizados para o identificar.

## Cookies
_**“Gostaria de um biscoito, meu querido?”**_ Esta é praticamente a questão que sempre encontra enquanto navega na Internet, e a razão é que, hoje em dia, praticamente todos os websites utilizam esses elementos para funcionar de forma “ótima e user-friendly”.

Os cookies guardam as suas informações de início de sessão, as suas definições personalizadas e até ajudam a lembrar-se do que estava no seu carrinho de compras. Mas alguns destes itens são a principal razão pela qual os websites sabem mais sobre si. Estes são os **“Cookies persistentes de terceiros”** (também conhecidos como **“cookies de rastreio”**)

Estes elementos são armazenados no *disco rígido* do seu computador e procuram obter informações sobre a sua atividade, fornecendo dados ao website de onde provêm e ajudando-os a identificar os seus gostos, tornando-os capazes de lhe proporcionar uma “melhor experiência de utilizador”.

Alguns dos websites que utilizam este tipo de cookies são os seguintes:

**Nota:** (Estes links irão redirecioná-lo para o site “TheGuardian.com”)

- [Doubleclick](https://www.theguardian.com/technology/2012/apr/23/doubleclick-tracking-trackers-cookies-web-monitoring)
- [Facebook](https://www.theguardian.com/technology/2012/apr/23/facebook-tracking-trackers-cookies-web-monitoring)
- [Google](https://www.theguardian.com/technology/2012/apr/23/google-tracking-trackers-cookies-web-monitoring)
- e muito mais...

Nos seguintes websites, pode saber mais sobre as diferentes variedades de cookies e como elas permitem que os websites o rastreiem:

- [https://www.theguardian.com/technology/2012/apr/23/cookies-and-web-tracking-intro](https://www.theguardian.com/technology/2012/apr/23/cookies-and-web-tracking-intro)
- [https://privacy.net/stop-cookies-tracking/](https://privacy.net/stop-cookies-tracking/)
- [https://www.cookieyes.com/how-cookies-track-you-on-the-web-and-what-to-do-about-it/](https://www.cookieyes.com/how-cookies-track-you-on-the-web-and-what-to-do-about-it/)

## Impressão Digital do Browser
Por fim, geramos **impressões digitais através do navegador**. Este é o elemento mais perigoso e intrusivo que podemos encontrar.

Estes são registos criados pelo browser, que utilizam uma variedade de dados disponíveis no seu computador que fornecem informações aos websites sobre as definições que está a utilizar, a máquina em que está, etc.  
Isto resulta na criação de um identificador único que permite que o seu computador seja reconhecido dos restantes.

Este identificador contém informação sobre a versão do browser que utiliza, o sistema operativo a partir do qual *está* a navegar no momento, a resolução do seu ecrã, o tipo de letra que tem ativo neste momento, entre muitas outras coisas. Tornando praticamente impossível que a sua navegação seja privada.

De fato, existem várias páginas que pode utilizar para verificar a informação disponibilizada pelo seu navegador web. Aqui iremos fornecer-lhe 2 deles para que possa avaliar o quão “anônimo” está enquanto navega na Internet.

![](https://d2y9h8w1ydnujs.cloudfront.net/uploads/content/images/81906baed7df01ef281269619751458f019acb214300b9a428153580178e3ee64158ef796a329daf4a35d0512717.png)

[_https://coveryourtracks.eff.org_](https://coveryourtracks.eff.org)

![](https://d2y9h8w1ydnujs.cloudfront.net/uploads/content/images/73f378e9124f6ae0d54c7e1b4f19b5f34aa52958c7be596a69f28eb6b7d3f5b943d3cb7b26111815334517241646.png)

[_https://browserleaks.com_](https://browserleaks.com)

# Anonimização
Depois do que acaba de ler deve estar a perguntar-se: _“mas, se cada vez que uso a Internet, tenho de dar informações ao site a que acedo, como é que me podem falar de anonimato?”_

E é verdade, não podemos falar convosco de anonimato, porque nunca podemos ficar 100% anónimos enquanto usam a Internet. No entanto, isto não significa que não possa fazer uso de algumas técnicas e ferramentas que permitem parecer outra pessoa para que nem as redes sociais nem o big brother (Google, por favor não nos odeie </3) possam saber quem é enquanto utiliza a internet.

Para isso, basta estar atento aos elementos mencionados anteriormente e **instalar algumas ferramentas** que o ajudarão a estar um pouco mais protegido do que os restantes colegas mortais.

## Camadas Extra
Antes de referir que o melhor que pode fazer quando navega é usar uma *VPN* ou usar *TOR*, achamos que é bom que conheça os benefícios das **Virtual Machines**, e que saiba que estas não só o ajudam a virtualizar os sistemas operativos como também lhe permitem adicionar uma camada extra de privacidade às suas atividades.

Para isso, você pode usar algumas máquinas especializadas OSINT existentes, como o **Trace Lab Oint VM**, ou pode criar sua própria Linux distribuição OSINT (você encontrará um excelente guia para **máquinas DIY** em um dos links a seguir).

- TL OSINT VM: [https://www.tracelabs.org/initiatives/osint-vm](https://www.tracelabs.org/initiatives/osint-vm)
- Guia DIY OSINT VM: [https://nixintel.info/tag/diy-buscador/](https://nixintel.info/tag/diy-buscador/)

## Ocultar seu endereço IP público
Como bem sabe, o seu IP é a “cara” que apresenta ao mundo da Internet, o que faz com que seja a primeira coisa que os computadores recebem quando comunicam consigo. Por isso, poder usar uma ferramenta que altera o seu IP será uma decisão que não só o ajudará a manter a sua identidade online protegida, como também lhe permitirá navegar na Internet um pouco mais em privado. Para isso, você pode usar ferramentas como o **ToR Browser (abordado no nosso curso de Introdução às Operações da Web Dark)** ou uma **VPN**.

- **Redes Virtuais Privadas (VPN)**

As VPNs são uma ferramenta essencial para quem quer conduzir uma investigação. Não só permite esconder o seu endereço IP de estranhos, como também adiciona uma camada de encriptação a todas as suas comunicações, o que ajuda muito a manter a sua privacidade.

Para que você tenha uma visão melhor do processo de seleção de VPN, veja aqui um excelente guia para escolher seu próprio provedor de VPN:

- [https://www.secjuice.com/how-to-choose-a-virtual-private-network-vpn-provider/](https://www.secjuice.com/how-to-choose-a-virtual-private-network-vpn-provider/)

## Extensões
Outra dica que pode usar para reduzir a quantidade de informações que os websites obtêm sobre si é para **nstall extensões que bloqueiam esta atividade**. Isso praticamente fechará a possibilidade de os sites poderem rastreá-lo ou executar scripts indesejados no seu computador.

Algumas das extensões mais recomendadas para esse fim são as seguintes:  

![](https://wp.securityblue.team/wp-content/uploads/2020/12/image-15.png)

**Comutador e Gerente do Agente de Usuário**

_“spoof sua string de “useragent” do navegador para uma designação personalizada.”_

![](https://wp.securityblue.team/wp-content/uploads/2020/12/image-16.png)

**Sem script**

_“Permite que JavaScript, Java, Flash e outros plug-ins sejam executados somente por sites confiáveis de sua escolha”_

![](https://wp.securityblue.team/wp-content/uploads/2020/12/image-12.png)

**Badger de Privacidade**

_“Impede que os anunciantes e outros rastreadores de terceiros rastreiem secretamente onde você vai e quais páginas você olha na Web”_

![](https://wp.securityblue.team/wp-content/uploads/2020/12/image-13.png)

**Origem Ublock**

_**“**Filtra pedidos para exibir anúncios e impede que o navegador recupere e exiba conteúdo de marketing._ **”**

![](https://wp.securityblue.team/wp-content/uploads/2020/12/image-14.png)

**Eliminação automática de cookies**

_“Elimine automaticamente os cookies indesejados dos separadores fechados, mantendo os desejados.”_

## Alter-egos 
E, por fim, a melhor maneira de manter a sua pessoa real separada da sua pessoa digital é usando **alter-egos**. 

O objetivo dessas contas não é mais do que ser uma identidade falsa que possa entrar em contato com assuntos de pesquisa, ou simplesmente realizar pesquisas OSINT sem vincular diretamente suas redes sociais.

Abaixo, encontrará alguns dos melhores guias da Internet para construir o seu próprio Fantoche de Meias e os melhores conselhos sobre como NÃO construir um.

- **“Bem-vindo à Selva (Meia)”:** [https://youtu.be/v8EP6xOcB8M](https://youtu.be/v8EP6xOcB8M)
- **“A Arte da Meia”:** [https://www.secjuice.com/the-art-of-the-sock-osint-humint/](https://www.secjuice.com/the-art-of-the-sock-osint-humint/)
- **“Criando um Boneco de Meia Eficaz para Investigações OSINT”:** [https://web.archive.org/web/20210125191016/https://jakecreps.com/2018/11/02/sock-puppets/](https://web.archive.org/web/20210125191016/https://jakecreps.com/2018/11/02/sock-puppets/)
- **“Criação de conta de meia marioneta — O meu processo”:** [https://garrettmickley.com/sockpuppet-account-creation/](https://garrettmickley.com/sockpuppet-account-creation/)
- **“A Melhor Marioneta de Meia do Mundo... Não!”** : [https://keyfindings.blog/2019/01/21/the-worlds-best-sock-puppet-not/](https://keyfindings.blog/2019/01/21/the-worlds-best-sock-puppet-not/)

# Materials
- **Michael Bazzell books:** [https://inteltechniques.com/books.html](https://inteltechniques.com/books.html)
- **The PRIVACY, SECURITY, & OSINT Show (Podcast):** [https://inteltechniques.com/podcast.html](https://inteltechniques.com/podcast.html)
- **Why You Need to Deal with Browser Fingerprinting:** [https://nixintel.info/osint/opsec-for-osint-why-you-need-to-deal-with-browser-fingerprinting/](https://nixintel.info/osint/opsec-for-osint-why-you-need-to-deal-with-browser-fingerprinting/)
- **The Web Never Forgets: Persistent Tracking Mechanisms in the Wild:** [https://securehomes.esat.kuleuven.be/~gacar/persistent/the_web_never_forgets.pdf](https://securehomes.esat.kuleuven.be/~gacar/persistent/the_web_never_forgets.pdf) 
- **Tracking the OSINT Hunter:** [https://www.secjuice.com/tracking-osint-hunters/](https://www.secjuice.com/tracking-osint-hunters/)