---
tags:
  - mobilesec
  - cybersecurity
---
# Introdução
O sistema operacional Android é amplamente utilizado em dispositivos móveis em todo o mundo, com uma arquitetura complexa e modular que permite flexibilidade e escalabilidade. Exploraremos nesse post os **principais componentes** dessa arquitetura, desde o **kernel do Linux** até os **apps do sistema**, destacando exemplos práticos de implementação para ilustrar seu funcionamento.

Ao compreender essa estrutura, desenvolvedores podem criar aplicativos mais otimizados e tirar proveito dos recursos que o Android oferece. Cada camada da arquitetura desempenha um papel fundamental, e este artigo busca desmistificar essas funções com explicações claras e exemplos de código.

## Kernel do Linux
A fundação da plataforma Android é o kernel do Linux. Por exemplo, [o Android Runtime (ART, na sigla em inglês)](https://developer.android.com/guide/platform?hl=pt-br#art) confia no kernel do Linux para funcionalidades como _encadeamento e gerenciamento de memória_ de baixo nível. O uso de um kernel do Linux permite que o Android aproveite os [recursos de segurança principais](https://source.android.com/security/overview/kernel-security.html?hl=pt-br) e que os fabricantes de dispositivos desenvolvam drivers de hardware para um kernel conhecido.

Para verificar a versão do kernel em um dispositivo Android, você pode acessar a tela de "Configurações" e procurar por "Sobre o dispositivo" > "Informações do software" > "Versão do kernel". Alternativamente, usando o terminal adb:

```bash
adb shell uname -r
```

## Camada de abstração de hardware (HAL)
A [camada de abstração de hardware (HAL)](https://source.android.com/devices/architecture/hal?hl=pt-br) fornece interfaces padrão que expõem as capacidades de hardware do dispositivo para a [estrutura da API Java](https://developer.android.com/guide/platform?hl=pt-br#api-framework) de maior nível. A HAL consiste em vários módulos de biblioteca, cada um implementando uma interface para um tipo específico de componente de hardware, como o módulo de [câmera](https://source.android.com/devices/camera/index.html?hl=pt-br) ou [Bluetooth](https://source.android.com/devices/bluetooth.html?hl=pt-br).

Ao implementar suporte à câmera em um dispositivo Android, o desenvolvedor pode trabalhar com a API Camera do Android, que interage com a HAL:

```java
Camera camera = Camera.open();
camera.startPreview();
```

Isso inicia a captura de vídeo, que por sua vez utiliza a HAL para acessar o hardware da câmera.

## Ambiente de execução do Android
Para dispositivos com Android versão 5.0 (API de nível 21) ou mais recente, **cada app executa o próprio processo com uma instância própria do [Android Runtime (ART)](https://source.android.com/devices/tech/dalvik/index.html?hl=pt-br)**. O ART foi criado para executar várias máquinas virtuais em dispositivos com pouca memória, executando arquivos no formato Dalvik Executable (DEX), um formato de bytecode projetado especificamente para o Android e otimizado para um consumo mínimo de memória.

Ao compilar um app, o Android Studio usa ferramentas como o `d8` para transformar o código Java em bytecode DEX. Um exemplo simples de conversão:

```bash
d8 --output=out.dex input.jar
```

Isso gera um arquivo DEX que pode ser executado no ART.

## Bibliotecas C/C++ nativas
Muitos componentes essenciais do sistema Android, como ART e HAL, são criados com base em código nativo que utiliza bibliotecas em C e C++. A plataforma fornece APIs de framework Java para expor funcionalidades dessas bibliotecas. Por exemplo, você pode acessar [OpenGL ES](https://developer.android.com/develop/ui/views/graphics/opengl/about-opengl?hl=pt-br) pela [API Java OpenGL](https://developer.android.com/reference/android/opengl/package-summary?hl=pt-br) para manipular gráficos 2D e 3D no seu app.

Este código usa OpenGL ES para desenhar uma tela de cor sólida:

```java
@Override
public void onSurfaceCreated(GL10 gl, EGLConfig config) {
    GLES20.glClearColor(1.0f, 0.0f, 0.0f, 1.0f); // Define o fundo como vermelho
}

@Override
public void onDrawFrame(GL10 gl) {
    GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT);
}
```

## Framework da API Java
O conjunto completo de recursos do SO Android está disponível por meio de APIs Java, que facilitam a reutilização de componentes e serviços principais do sistema.

Criar uma notificação simples com a API Java:

```java
NotificationCompat.Builder builder = new NotificationCompat.Builder(context, "channel_id")
        .setSmallIcon(R.drawable.notification_icon)
        .setContentTitle("Título da Notificação")
        .setContentText("Texto da Notificação")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT);

NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);
notificationManager.notify(1, builder.build());
```

## Apps do sistema
O Android vem com um conjunto de apps principais, como e-mail e mensagens SMS. Esses apps podem ser substituídos por apps de terceiros. Por exemplo, um app personalizado pode abrir o cliente de SMS padrão para enviar uma mensagem:

```java
Intent smsIntent = new Intent(Intent.ACTION_VIEW);
smsIntent.setData(Uri.parse("sms:123456789"));
smsIntent.putExtra("sms_body", "Mensagem de teste");
if (smsIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(smsIntent);
}
```
