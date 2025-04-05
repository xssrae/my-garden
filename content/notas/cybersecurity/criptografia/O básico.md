---
tags:
  - Criptografia
  - Pentest
  - SEGURANÇA_OFENSIVA
---
Num cenário crítico como um vazamento de credenciais de um banco de dados, o tipo de Hash usado nas senhas muda completamente o que um atacante pode conseguir, e isso é um pequeno exemplo da grande importância do entendimento deste tópico. 

Neste ano, ainda vejo grandes empresas usarem Hash MD5 para armazenamento de senhas, e houve um cenário em uma delas em que através de um ataque de *SQL Injection* consegui baixar todas as credenciais, e com um simples ataque de Bruteforce, consegui 90% das senhas. 

Não é necessário um conhecimento profundo em criptografias para trabalhar como Pentester e/ou demais cargos de Infosec, somente entender o que significa cada tópico e no máximo ser capaz de criar um script que criptografa e descriptografa alguma informação. Somente se você seguir como especialista em criptografia que vai ser primordial você entender toda a matemática por trás dos algoritmos. 

A seguir vou listar alguns tópicos deste assunto, importantes a serem estudados: 

# Funções Hash criptográfica

É de suma importância entender quais destas funções Hash são seguras e quais devemos evitar, como por exemplo utilizar bons algoritmos como **bcrypt** para armazenamento de senhas, e não **SHA1, MD4, MD5**, e outros. 

Existe também um ataque bem conhecido neste ramo chamado **Length Extension**, que consiste em: Tendo uma mensagem original, uma chave secreta e um Hash dessas duas informações, é possível através desse ataque, alterar a mensagem tendo apenas o tamanho da chave. Hash Extender([https://github.com/iagox86/hash_extender](https://github.com/iagox86/hash_extender "https://github.com/iagox86/hash_extender")) é uma ótima ferramenta para isso.  
# Encodes
Muitas pessoas erroneamente ainda pensam que codificações são criptografias, não são, pois não há nenhuma senha no processo de codificação. Encodes estão presentes em quase todos os sistemas, principalmente o base64, muitas vezes informações sensíveis estão encodadas nesse algoritmo, e é trivial saber identificar.
 
```shell
$ b64 SenhaSuperSecreta U2VuaGFTdXBlclNlY3JldGE=
```

## Senhas Linux

Antigamente as informações de senhas do Linux eram armazenadas em `/etc/passwd`, hoje esse arquivo somente lista informações como usuários do sistema e atualmente as informações de senhas estão gravadas em `/etc/shadow`(onde somente usuários administrativos têm acesso). Neste arquivo, as senhas seguem o seguinte formato:
   
`linuxuser:$6$zHvrJMa5Y690smbQ$z5zdL...:18009:0:120:7:14::`

Onde há o usuário, o tipo de Hash, o Hash da senha, e outras informações da senha, como data de expiração. 

## Senhas Windows

As senhas Windows encontram-se no arquivo de banco de dados chamado **Security Account Manager (SAM)**, e localizado em 
`C:\Windows\System32\Config\SAM`

Este arquivo armazena as senhas em formato Hash LM/NTLM. Existe também um processo chamado **Local Security Authority Server Service (LSASS)**, responsável pela política de segurança do sistema, onde também é possível obter as senhas através desse processo. 

Conseguir senhas Windows é muito mais fácil do que as senhas Linux, inclusive ESTE ARTIGO([https://book.hacktricks.xyz/windows-hardening/stealing-credentials](https://book.hacktricks.xyz/windows-hardening/stealing-credentials "https://book.hacktricks.xyz/windows-hardening/stealing-credentials")) no HackTricks possui diversos métodos para isso, mostrando o uso de ferramentas como **CrackMapExec, Meterpreter, Mimikatz** e outras. Existe também uma técnica chamada **Pass The Hash** onde é possível em determinados serviços do Windows server, como o SMB, conseguir uma autenticação somente usando o Hash, sem saber a senha. 

# Ferramentas de quebra de senha

Durante uma análise de segurança onde é possível obter um determinado Hash, é bastante interessante tentar quebrá-lo para obter a senha, com isso, o **John** e o **Hashcat** são as excelentes ferramentas nesse processo, elas nativamente já vem no Kali Linux e são bastante fáceis de serem usadas. 

Também é possível arriscar quebrar um Hash (principalmente os mais fracos, como MD5) usando ferramentas online, tais como: [https://hashkiller.io/](https://hashkiller.io/ "https://hashkiller.io/"), [https://crackstation.net/](https://crackstation.net/ "https://crackstation.net/") ou [https://hashes.com/](https://hashes.com/ "https://hashes.com/"). Esses sites possuem databases que chegam de bilhões até trilhões de senhas, muitas vezes de vazamentos, por isso são muito úteis. 

# Criptografias Simétricas e Assimétricas

- **Criptografia Assimétrica**, baseada em chaves públicas e privadas, está presente nos principais protocolos de comunicação segura da Internet, como o **Transport Layer Security (TLS)**, responsável por criptografar todas as requisições **HTTPS**. Como dito anteriormente, não é preciso entender como funciona a matemática por trás desses algoritmos, apenas conhecê-las, saber lidar com ferramentas como o **OpenSSL** e quais delas são seguras. Vale a pena dar uma olhada numa implementação básica em Python de **RSA, Curva Elíptica e Diffie-Hellman**. 

- **Criptografia Simétrica**: usa uma mesma chave para criptografar e descriptografar, pode ser encontrada em protocolos como o WPA/WPA2 usado em Wi-Fi 's, criptografia de arquivos em sistemas operacionais, em VPNs e outras situações. As mais comuns delas são a **Advanced Encryption Standard (AES)** e **Triple Data Encryption Standard (3DES)**.

# Caso Real

Gente, vim aqui compartilhar um caso **crítico e real** que aconteceu no meu trabalho sobre o assunto de criptografia, que foi onde de certa forma consegui acessar informações de cartão de crédito que estavam criptografados e também as chaves criptográficas. Era um **AES** em modo **CBC** com **PKCS7**, e um atacante conseguiria a **key** e **iv**. Ou seja, um atacante teria a faca e o queijo para conseguir os dados do cartão de crédito. Para isso, eu acabei precisando criar um script em python pra decryptar o babado e mostrar para o cliente como isso seria possível, então, esse tipo de coisa acaba acontecendo num cenário real, e é interessante vocês pelo menos terem uma noção de ⁠💻programacao para chegar aqui em ⁠🔐senhas-e-criptografia e saberem fazer o básico. No python existem várias bibliotecas de criptografia para AES e outras, as vezes pode dar algum problema, a maioria você pode achar na internet, então fica aqui mais um desafio para vocês: saber lidar com cenários desse tipo.

Esse foi o código que utilizei, por motivos obvios eu tirei o numero do cartao e senha kkkkkk, essa é uma implementação completa de AES nesse modo, pelos motivos acima, de alguma forma, tive problemas com as famosas libs como `from Crypto.Cipher import AES`

```python
import sys
import binascii
from math import floor

s_box = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 
0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 
```


Mas utilizando as libs, isso pode ser facilmente resumida a coisas do tipo:


```python
from hashlib import md5
from base64 import b64decode
from base64 import b64encode

from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
from Crypto.Util.Padding import pad, unpad


class AESCipher:
    def __init__(self, key):
        self.key = md5(key.encode('utf8')).digest()

    def encrypt(self, data):
        iv = get_random_bytes(AES.block_size)
        self.cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return b64encode(iv + self.cipher.encrypt(pad(data.encode('utf-8'), 
            AES.block_size)))

    def decrypt(self, data):
        raw = b64decode(data)
        self.cipher = AES.new(self.key, AES.MODE_CBC, raw[:AES.block_size])
        return unpad(self.cipher.decrypt(raw[AES.block_size:]), AES.block_size)

if __name__ == '__main__':
    print('TESTING ENCRYPTION')
    msg = input('Message...: ')
    pwd = input('Password..: ')
    print('Ciphertext:', AESCipher(pwd).encrypt(msg).decode('utf-8'))

    print('\nTESTING DECRYPTION')
    cte = input('Ciphertext: ')
    pwd = input('Password..: ')
    print('Message...:', AESCipher(pwd).decrypt(cte).decode('utf-8'))
```

Teve outro script que utilizei também no trabalho mas em outro cenário que foi esse aqui:

```python
import binascii, base64
from Crypto.Cipher import AES

KEY = '5e47001e8f048169'
IV = '1c2e9b65e4b136f9'
MODE = AES.MODE_CBC
BLOCK_SIZE = 16
SEGMENT_SIZE = 128

def encrypt(key, iv, plaintext):
    aes = AES.new(key, MODE, iv, segment_size=SEGMENT_SIZE)
    plaintext = _pad_string(plaintext)
    encrypted_text = aes.encrypt(plaintext)
    return binascii.b2a_hex(encrypted_text).rstrip()

def decrypt(key, iv, encrypted_text):
    aes = AES.new(key, MODE, iv, segment_size=SEGMENT_SIZE)
    encrypted_text_bytes = binascii.a2b_hex(encrypted_text)
    decrypted_text = aes.decrypt(encrypted_text_bytes)
    decrypted_text = _unpad_string(decrypted_text)
    return decrypted_text

def _pad_string(value):
    length = len(value)
    pad_size = BLOCK_SIZE - (length % BLOCK_SIZE)
    return value.ljust(length + pad_size, '\x00')

def _unpad_string(value):
    while value[-1] == '\x00':
        value = value[:-1]
    return value

if __name__ == '__main__':
    input_plaintext = 'senhasecreta'
    input_encrypted = binascii.b2a_hex(base64.b64decode("rzL92yLZkvbZXMJ2QqKx6Q=="))
    encrypted_text = base64.b64encode(binascii.a2b_hex(encrypt(KEY, IV, input_plaintext)))
    decrypted_text = str(decrypt(KEY, IV, input_encrypted)).split("\\")[0]
    print(encrypted_text)
    print(decrypted_text)
```

Sim, todos eles devem fazer a mesma coisa, existem vários formas de trabahar com isso, e como eu disse antes, a questão chave é como você deve ser uma pessoa capaz de lidar com qualquer criptografia, em qualquer cenário, apenas sabendo o básico, todos esses scripts de certa forma são complexos se olhar a fundo, mas sinceramente, você só realmente precisam saber o trivial para trabalhar com eles no dia a dia

# ESTUDOS

- [ ] [Fundamental Cryptography in Theory and Python](https://youtube.com/playlist?list=PLWjMI9CAmVU4--SmpzgswTvxLkZqC9QWn)
- [ ] [cryptohack](https://cryptohack.org/ "https://cryptohack.org/")
- [ ] [Ping 2020 #6 - Criptografia: Introdução](https://www.youtube.com/watch?v=R4LF8HWSQNE)
