O **cross-site scripting** refletido ou **XSS** acontece quando uma aplicação recebe dados em um pedido HTTP e inclui esses dados na resposta de maneira insegura, permitindo que scripts maliciosos sejam executados no navegador de outro usuário.
## Entendendo o problema
Vamos imaginar que um site possui uma função de pesquisa que recebe o termo de pesquisa fornecido pelo usuário em um parâmetro de URL:

```https
https://insecure-website.com/search?term=gift
```

A aplicação reflete o termo de pesquisa na resposta a esse URL:

```html
<p>You searched for: gift</p>
```

Se a aplicação não tratar os dados corretamente, um atacante pode injetar código malicioso, como neste exemplo:

```https
https://insecure-website.com/search?term=<script>/*+Bad+stuff+here...+*/</script>
```

Esse URL resulta na seguinte resposta:

```html
<p>You searched for: <script>/* Bad stuff here... */</script></p>
```

Quando outro usuário acessa esse URL malicioso, o script injetado pelo atacante é executado no navegador da vítima, dentro do contexto da sessão com a aplicação.
## Formas comuns de XSS refletido

### 1. Entre tags HTML
Quando o payload XSS envolve o texto entre tags HTML, o atacante pode usar tags que acionam a execução de JavaScript:

```html
<script>alert(document.domain)</script>

<img src="1" onerror="alert(1)">
```

### 2. Em atributos HTML
XSS também pode ocorrer dentro de atributos HTML:

```html
<input type="text" value="[user-input]">
```

Se o valor não for sanitizado, um atacante pode injetar algo como:

```html
<input type="text" value="" onfocus="alert('XSS')">
```

### 3. Em JavaScript embutido
XSS pode ser explorado se a aplicação incluir entradas do usuário diretamente em código JavaScript:

```html
<script>
    var search = "[user-input]";
    alert(search);
</script>
```

Um atacante pode fornecer uma entrada como `"; alert('XSS');//` para injetar código malicioso.
## Etapas de prevenção
1. **Validação de entradas**: Sempre valide e limite os dados recebidos dos usuários. Utilize uma lista de caracteres permitidos.

2. **Escapando saídas**: Assegure-se de escapar corretamente as saídas conforme o contexto:

    - Para HTML, escape caracteres como `<`, `>`, `&` e `\"`.
    - Para JavaScript, escape aspas e outras sequências que possam ser perigosas.
    - Para atributos HTML, use aspas para delimitar valores e escape os caracteres.

3. **Uso de bibliotecas de segurança**: Utilize bibliotecas confiáveis, como a OWASP Java Encoder, para garantir a sanitização adequada das saídas.

4. **Implementação de Content Security Policy (CSP)**: Uma CSP ajuda a prevenir a execução de código não autorizado no navegador, limitando os recursos que podem ser carregados.

5. **Evitar JavaScript Injection**: Sempre mantenha o JavaScript separado do conteúdo HTML, utilizando arquivos externos.

## Conclusão
O XSS refletido pode ser explorado de várias maneiras, causando sérios impactos para os usuários e para a aplicação. Seguir boas práticas de segurança, como validação, escaping e a implementação de uma CSP, é essencial para mitigar esse risco e proteger os usuários contra ameaças.