---
ciencia-da-computacao: " "
---
# Introdução
O processo de compilação ocorre em duas fases: análise e síntese. A análise léxica é a primeira etapa da análise, na qual um analisador léxico examina o código-fonte, identificando padrões e separando os elementos (Tokens), como palavras-chave, identificadores e símbolos especiais. Esses Tokens são então enviados para a análise sintática.

O analisador léxico utiliza expressões regulares e autômatos finitos para reconhecer padrões no código. Além disso, essa fase é responsável por inicializar a tabela de símbolos. O estudo de expressões regulares e linguagens regulares é fundamental para a implementação de um analisador léxico.

# Expressões Regulares
As expressões regulares representam padrões de cadeias de caracteres. Uma expressão regular (ER) define um conjunto de cadeias de caracteres com as quais ela corresponde. Elas são construídas a partir de conjuntos básicos e operações como concatenação e união. As expressões regulares são amplamente utilizadas tanto na comunicação entre humanos quanto na interação entre humanos e máquinas (MENEZES, 2011).

#### Definição Formal de Expressões Regulares
Uma expressão regular sobre um alfabeto ∑ é definida indutivamente da seguinte maneira:

**Base de Indução:**

- A expressão "Ø" representa a linguagem vazia: Ø.
- A expressão "ε" representa a linguagem contendo apenas a palavra vazia: {ε}.
- Para qualquer símbolo x ∈ ∑, a expressão "x" representa a linguagem contendo apenas a palavra formada pelo símbolo x: {x}.

**Passo de Indução:** Se r e s são expressões regulares que representam as linguagens R e S, então:

- **União:** A expressão "(r+s)" representa a linguagem: R ∪ S.
- **Concatenação:** A expressão "(rs)" representa a linguagem: RS = {uv | u ∈ R e v ∈ S}.
- **Fecho de Kleene:** A expressão "(r*)" representa a linguagem: r*.

Se r é uma expressão regular, a linguagem correspondente é chamada **Linguagem Gerada por r**, denotada por L(r) ou GERA(R).

### Convenções na Escrita de Expressões Regulares
Os parênteses podem ser omitidos em expressões regulares, mas devem ser respeitadas algumas regras de precedência:

- O fecho de Kleene tem maior precedência que a concatenação e a união.
- A concatenação tem precedência sobre a união.

O fecho de Kleene também é conhecido como **operação de concatenação sucessiva**.

### Exemplos de Expressões Regulares e Suas Linguagens

| Expressão Regular | Linguagem Gerada                                                     |
| ----------------- | -------------------------------------------------------------------- |
| Aa                | Somente a palavra "aa"                                               |
| ba*               | Todas as palavras que começam com "b", seguidas por zero ou mais "a" |
| (a+b)*            | Todas as palavras sobre {a, b}                                       |
| (a+b)_aa(a+b)_    | Todas as palavras contendo "aa" como subpalavra                      |
| a_ba_ba*          | Todas as palavras contendo exatamente dois "b"                       |
| (a+b)*(aa+bb)     | Todas as palavras que terminam com "aa" ou "bb"                      |
| (a+ε)(b+ba)*      | Todas as palavras que não possuem dois "a" consecutivos              |

#### Analisando a Linguagem Gerada por (a+b)*(aa+bb)
- "a" e "b" representam os conjuntos {a} e {b}.
- "a + b" representa {a} ∪ {b} = {a, b}.
- "(a+b)_" representa {a, b}_.
- "aa" e "bb" representam {aa} e {bb}.
- "(aa+bb)" representa {aa, bb}.
- "(a+b)_(aa+bb)" representa {a, b}_{aa, bb}.
- Assim, GERA((a+b)*(aa+bb)) contém palavras como: {aa, bb, abb, baa, aaaa, abaa, abbb, baaa, babb, bbaa, bbbb...}.

### Expressões Regulares e Tokens em Linguagens de Programação
Expressões regulares são amplamente utilizadas para definir padrões de **Tokens** em linguagens de programação. Os Tokens geralmente se encaixam em categorias padronizadas, como:

- **Palavras Reservadas**: Cadeias alfabéticas com significado especial na linguagem, como "for", "while", "if" em Java.
- **Identificadores**: Usados para nomear variáveis, funções e métodos, geralmente definidos como sequências de letras e dígitos que começam com uma letra.
- **Constantes**: Podem ser numéricas (ex.: 55, 3.144) ou literais (ex.: "olá, mundo", 'a', 'b').

Expressões regulares típicas para estas categorias:

- **Palavras Reservadas**: Representadas por sequências fixas de caracteres. Exemplo:
```
reservadas = if | while | else ...
```

- **Identificadores**: Definição baseada em letras e dígitos:
```
letra = [a-zA-Z]
dígito = [0-9]
identificador = letra(letra|dígito)*
```

- **Números Naturais**:
```
natural = [0-9]+
signedNatural = ( + | - ) ? natural
```
 
O símbolo "?" indica que o "+" ou "-" é opcional.

### Ambiguidade nas Expressões Regulares
Ao definir Tokens usando expressões regulares, algumas cadeias podem corresponder a mais de uma categoria. Por exemplo:

- A palavra "for" pode ser um identificador ou uma palavra reservada.
- O símbolo "<>" pode ser interpretado como dois operadores distintos ("menor" e "maior") ou como o operador "diferente".

Para resolver ambiguidades, as linguagens de programação adotam regras como:

1. **Prioridade das palavras reservadas**: Se uma cadeia pode ser um identificador ou uma palavra reservada, a interpretação como palavra reservada prevalece.
2. **Preferência por elementos únicos**: Quando uma cadeia pode ser interpretada como um único elemento ou uma sequência, a interpretação única deve prevalecer.

Essas regras ajudam a evitar conflitos na análise léxica de programas (LOUDEN, 2004).

# Autômatos Finitos

Um autômato é um modelo matemático utilizado para o reconhecimento de linguagens. Composto por estados e transições, um autômato verifica se uma determinada cadeia de caracteres pertence a um alfabeto. Autômatos finitos são amplamente empregados no reconhecimento de padrões em cadeias de entrada e na construção de analisadores léxicos.

Formalmente, um Autômato Finito Determinístico (AFD) é representado por uma 5-upla ordenada:

M = (∑, Q, δ, q0, F)

onde:

- ∑ é o alfabeto de entrada;
- Q é o conjunto finito de estados do autômato;
- δ é a função de transição, responsável pela movimentação entre os estados. Se para um estado p e um símbolo a a transição leva ao estado q, temos: δ(p, a) = q;
- q0 é o estado inicial, pertencente a Q;
- F é o conjunto de estados finais, um subconjunto de Q.

Os autômatos podem ser representados graficamente através de diagramas. Nessa representação, os estados são ilustrados por círculos, enquanto as transições são indicadas por setas. O estado inicial é diferenciado por uma seta que aponta de fora do diagrama, e os estados finais são destacados por uma borda dupla.

![[Pasted image 20250311164728.png]]


### Tipos de Autômatos

Os autômatos podem ser classificados em três categorias principais:

- **Determinístico (AFD)**: para cada símbolo lido e estado atual, há uma única transição possível.
- **Não Determinístico (AFN)**: para um símbolo lido e estado atual, o sistema pode seguir múltiplas transições.
- **Com Movimento Vazio (ε-transições)**: o sistema pode mudar de estado sem consumir um símbolo de entrada, sendo uma forma especial de AFN.

Os três tipos de autômatos possuem o mesmo poder computacional, ou seja, qualquer linguagem reconhecível por um AFN também pode ser reconhecida por um AFD. Autômatos com movimentos vazios são considerados uma extensão dos AFN e podem ser convertidos em AFDs equivalentes.

### Simulação de Autômatos
Autômatos são amplamente utilizados para o reconhecimento de padrões, especialmente na análise léxica, onde identificam Tokens em cadeias de caracteres. Por exemplo, a palavra reservada "if" pode ser reconhecida por um autômato específico.

Um autômato para reconhecer "if" funcionaria da seguinte maneira:

1. O processamento inicia no estado q1 (estado inicial).
2. Ao ler o caractere 'i', o sistema transita para q2.
3. Ao ler 'f', o sistema avança para q3 (estado final).
4. Como o processamento termina em um estado final, a cadeia "if" é reconhecida com sucesso.

Autômatos finitos são ferramentas essenciais na teoria da computação, oferecendo um mecanismo eficiente para reconhecimento de padrões e construção de analisadores lexicais.

![[Pasted image 20250311164759.png]]