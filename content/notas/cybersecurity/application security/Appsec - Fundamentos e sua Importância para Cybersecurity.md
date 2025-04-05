---
tags:
  - cybersecurity
  - appsec
---
# Introdução a Application Security
![[Pasted image 20241225192441.png]]

**Application Security** é uma área da Cybersecurity que busca garantir a segurança e proteção do software contra _**ameaças cibernéticas**_. Isso inclui defesa contra ataques hackers, roubo de dados, malware e outras ameaças. Essa prática ajuda a preservar a reputação da empresa, manter a confiança dos clientes e assegurar a conformidade com as regulamentações de segurança de dados.

Ela aborda não apenas pequenos bugs, mas também evita que vulnerabilidades graves de aplicações sejam exploradas.

AppSec abrange tudo relacionado, direta ou indiretamente, à _aplicação_, incluindo:

- **Testes de Segurança**
- **Desenvolvimento Seguro**
- **Design Seguro**
- **Análise de Frameworks**
- **Revisão de Código**
- **Análise de Vulnerabilidades**
- **Proteção de Bibliotecas**

---
# DevSecOps

DevSecOps significa **desenvolvimento, segurança** e **operações**. É uma cultura de automação e design de plataforma que integra a **segurança como uma responsabilidade compartilhada** em todo o ciclo de vida de TI.

No passado, a segurança era delegada a uma equipe específica que atuava isoladamente no _estágio final do desenvolvimento_. Essa abordagem era aceitável quando os ciclos de desenvolvimento duravam meses ou até anos, mas não é mais viável no cenário atual.

### AppSec vs DevSecOps

DevSecOps é uma extensão da Application Security que incorpora a segurança no ciclo de vida do desenvolvimento de software desde o princípio, em vez de tratá-la como uma consideração posterior. Essa abordagem assegura que a segurança seja priorizada em **todas as etapas do ciclo de vida do desenvolvimento de software**, abrangendo criação, teste, implantação e manutenção.

---
# Tipos de Segurança de Aplicações

A segurança de aplicações abrange diversos recursos projetados para proteger as aplicações contra ameaças e vulnerabilidades potenciais. Esses recursos incluem:

**Autenticação:** Implementada pelos desenvolvedores para verificar a identidade dos usuários que acessam a aplicação. Ela garante que apenas pessoas autorizadas tenham acesso, às vezes exigindo [autenticação multifatorial](https://www.ibm.com/br-pt/topics/multi-factor-authentication) — uma combinação de fatores como senhas, biometria ou tokens físicos.

**Autorização:** Após a autenticação, os usuários recebem permissão para acessar funcionalidades específicas com base em sua identidade validada (gerenciamento de acesso à identidade). A autorização verifica os privilégios do usuário em uma lista predefinida de usuários autorizados, assegurando o controle de acesso.

**Criptografia:** Aplicada para proteger dados confidenciais durante a transmissão ou armazenamento na aplicação. Especialmente crucial em ambientes baseados em nuvem, a criptografia obscurece os dados, impedindo o acesso não autorizado ou a interceptação.

**Registro:** Vital para rastrear a atividade de aplicações e identificar violações de segurança. Os arquivos de log registram as interações do usuário, fornecendo um registro datado e cronometrado dos recursos acessados e das identidades dos usuários — informações úteis para análises pós-incidente.

**Testes:** Essenciais para validar a eficácia das medidas de segurança. Por meio de diversos métodos, como análise de código estático e varredura dinâmica, as vulnerabilidades são identificadas e tratadas, garantindo controles de segurança robustos.

---
# Ciclo de Desenvolvimento Seguro

O Ciclo de Desenvolvimento Seguro (SDL), também conhecido como SDLC ou SSDLC em inglês, foi criado pela Microsoft e publicado em 2008. Seu objetivo é garantir a aplicação de controles que tornem um software seguro o suficiente para ser usado com um nível de risco aceitável. O processo é dividido em 12 fases principais, sendo a primeira o Treinamento de Segurança para Desenvolvedores.

- Segurança para Desenvolvedores
- Ciclo de Desenvolvimento Seguro (SDL)

_"Processo de desenvolvimento de software que ajuda os desenvolvedores a criarem um software mais seguro e atender aos requisitos de conformidade de segurança enquanto reduz o custo de desenvolvimento" - Microsoft_

## Principais Práticas do SDLC

As principais práticas do SDLC incluem:

- **Treinamento:** Todos os envolvidos no desenvolvimento devem compreender os **fundamentos da segurança** e saber integrá-la em cada etapa do processo. _Treinamentos_ frequentes sobre **Segurança de Aplicações** são essenciais.
- **Requisitos de Segurança:** Definição e **atualização** contínua, considerando legislação, padrões da indústria, ameaças emergentes e incidentes passados.
- **Métricas e Relatórios:** Estabelecimento de métricas claras para avaliar o nível de segurança e responsabilizar as equipes por seu cumprimento.
- **Modelagem de Ameaças:** Prática que permite **identificar** e **mitigar** vulnerabilidades de maneira eficaz e econômica.
- **Padrões de Criptografia:** Definição de padrões claros para assegurar a **proteção dos dados** durante armazenamento e transmissão.
- **Testes de Segurança:** Utilização de **análise estática (SAST)** e **dinâmica (DAST)** para identificar vulnerabilidades, complementadas por **testes de invasão (Pentest)** para simular ataques reais.
- **Processo de Resposta a Incidentes:** Implementação de um plano de resposta robusto para gerenciar novas ameaças eficientemente.

---
# Ferramentas de Testes de Segurança de Aplicações (AST)

**O que são testes de segurança de aplicações (AST)?**

Os testes de segurança de aplicações são uma série de práticas e ferramentas utilizadas para identificar e corrigir vulnerabilidades em softwares antes que sejam exploradas por atacantes. O objetivo é garantir a segurança e a integridade das aplicações.

**Tipos de testes AST:**

- **SAST (Static Application Security Testing):** Analisa o código fonte em busca de vulnerabilidades sem executar a aplicação. É realizado nas primeiras fases do desenvolvimento.
- **DAST (Dynamic Application Security Testing):** Avalia a aplicação em execução, simulando ataques reais para identificar vulnerabilidades em tempo real.
- **IAST (Interactive Application Security Testing):** Combina SAST e DAST, oferecendo uma análise mais profunda e interativa.
- **RASP (Runtime Application Self-Protection):** Monitora a aplicação em execução, detectando e respondendo a ataques em tempo real.
- **SCA (Software Composition Analysis):** Identifica e avalia componentes de código aberto e bibliotecas de terceiros, verificando vulnerabilidades e problemas de licença.

**Outras ferramentas e tecnologias:**

- **OWASP Top 10:** Lista as 10 vulnerabilidades mais críticas em aplicações web.
- **Ferramentas SDL:** Integram a segurança ao processo de desenvolvimento.
- **WAFs (Web Application Firewalls):** Protegem aplicações web filtrando o tráfego HTTP.

---
# OWASP Top 10

A Open Web Application Security Project (OWASP) é uma organização internacional sem fins lucrativos, fundada em 2001, dedicada a melhorar a segurança de aplicações web globalmente. Com uma comunidade mundial de especialistas em segurança, a OWASP disponibiliza gratuitamente documentos, ferramentas e recursos para ajudar desenvolvedores, testadores e profissionais de segurança a criar aplicações mais seguras.

O projeto mais conhecido da OWASP é o **OWASP Top 10**, uma lista dos dez riscos de segurança mais críticos em aplicações web, compilada por especialistas em segurança de todo o mundo. Essa lista, atualizada periodicamente, serve como um guia essencial para desenvolvedores e organizações, auxiliando-os a priorizar esforços na identificação e mitigação das vulnerabilidades mais comuns.

Os riscos do OWASP Top 10 são identificados com base em dados reais de vulnerabilidades encontradas em aplicações web e em pesquisas conduzidas pela comunidade. Ao abordar esses riscos, as organizações podem reduzir significativamente a probabilidade de ataques cibernéticos e proteger efetivamente seus dados e sistemas.

- **Equifax (2017)**
    Uma violação de dados que expôs informações pessoais de 147 milhões de pessoas. Este incidente destacou a importância da "Injeção" e "Quebra de Autenticação"
    
- **Marriott/Starwood (2018)**
    Um ataque que comprometeu dados de 500 milhões de hóspedes. Este caso ressaltou a importância da "Exposição de Dados Sensíveis"
    
- **SolarWinds (2020)**
    Um ataque de cadeia de suprimentos que afetou milhares de organizações. Este incidente destacou a importância da "Utilização de Componentes com Vulnerabilidades Conhecidas"


A OWASP contribuiu para a conscientização sobre esses problemas através de:

- Atualização regular do OWASP Top 10, refletindo as ameaças emergentes.
- Fornecimento de recursos educacionais gratuitos para desenvolvedores e profissionais de segurança.
- Promoção de melhores práticas de segurança de aplicações através de conferências e eventos.

---
# Conclusão

No cenário atual, baseado na nuvem e cada vez mais conectado, os dados atravessam várias redes e se conectam a servidores remotos. Embora o monitoramento e a segurança da rede sejam vitais, a proteção de aplicações individuais é igualmente crucial. Os hackers visam cada vez mais as aplicações, tornando os testes de segurança e as medidas proativas indispensáveis. Uma abordagem preventiva à segurança de aplicações oferece uma vantagem competitiva, permitindo que as organizações solucionem vulnerabilidades antes que estas afetem as operações ou os clientes.

Os clientes confiam às organizações suas informações confidenciais, esperando que estas sejam mantidas seguras e privadas. A falta de proteção das aplicações pode resultar em roubos de identidade, perdas financeiras e outras violações de privacidade. Tais falhas minam a confiança do cliente e prejudicam a reputação da organização. Investir em soluções adequadas de segurança de aplicações é essencial para proteger tanto as organizações quanto seus clientes contra possíveis danos.

Ao integrar a segurança em todas as fases do desenvolvimento de software, as organizações podem reduzir significativamente os riscos e proteger seus sistemas e dados.

- A segurança deve ser uma **prioridade** para todos os envolvidos no projeto.
- É fundamental **identificar e mitigar riscos** antes que se tornem problemas reais.
- Os testes de segurança devem ser conduzidos em todas as etapas do desenvolvimento.
- É imprescindível estar preparado para lidar com **situações de crise**.

## Fontes:

- [**O que é segurança de aplicações (AppSec)? - IBM**](https://www.ibm.com/br-pt/topics/application-security)
- [**Microsoft Security Development Lifecycle (SDL)**](https://www.microsoft.com/en-us/securityengineering/sdl/)
- [**O que é DevSecOps?**](https://www.redhat.com/pt-br/topics/devops/what-is-devsecops)
- [**Application Security & DevSecOps**](https://evorasec.com.br/app-security.html)
- [**OWASP Top 10 aplicativos de vulnerabilidade de segurança da web**](https://www.checkpoint.com/pt/cyber-hub/cloud-security/what-is-application-security-appsec/owasp-top-10-vulnerabilities/)