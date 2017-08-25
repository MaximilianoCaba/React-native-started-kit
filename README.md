# Native Starter Kit

### Repositorio original [Start-react](https://github.com/start-react/native-starter-kit)

# caracteristicas


## React-Native

React Native le permite crear aplicaciones para dispositivos móviles utilizando sólo JavaScript. 
Utiliza el mismo diseño que React, lo que le permite componer una interfaz de usuario móvil rica a partir de componentes declarativos.

Con React Native, no creas una "aplicación web móvil", "aplicación HTML5" o "aplicación híbrida". 
Usted construye una aplicación móvil real que es indistinguible de una aplicación construida utilizando Objective-C o Java. 
React Native utiliza los mismos bloques básicos de la interfaz de usuario fundamental que las aplicaciones de iOS y Android estándar. 
Usted acaba de poner los bloques de construcción juntos utilizando JavaScript y Reaccionar.

React Native te permite crear tu aplicación más rápido. 
En lugar de recompilar, puedes volver a cargar tu aplicación al instante. 
Con la recarga en caliente, incluso puede ejecutar código nuevo mientras mantiene su estado de aplicación.

## Native-base
Interfaz de usuario para React Native

## React Navigation

React Navigation nace de la necesidad de la comunidad React Native de una solución de navegación extensible pero fácil de usar. 
Sustituye y mejora en varias bibliotecas de navegación en el ecosistema, incluyendo Ex Navegación, React Native's Navigator y NavigationExperimental componentes. 
Reaccionar La navegación también se puede utilizar en React y React Native, lo que permite un mayor grado de código compartido.


## Redux

Redux es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo.

## CodePush

CodePush es un servicio en la nube que permite a los desarrolladores de React Native implementar las actualizaciones de las aplicaciones para móviles directamente a los dispositivos de sus usuarios. 
Funciona actuando como un repositorio central que los desarrolladores pueden publicar ciertas actualizaciones (por ejemplo, JS, HTML, CSS y cambios de imagen), y que las aplicaciones pueden consultar actualizaciones (usando nuestros SDKs de cliente proporcionados). 
Esto le permite tener un modelo de compromiso más determinista y directo con sus usuarios finales, al tratar con bugs y / o agregar pequeñas características que no requieren que reconstruya un binario y / o re-distribuya a través de cualquier aplicación pública.


# Configuracion

## 1. Requerimiento
- Tener Instalado Globalmente `node`
- Tener Instalado Globalmente `react-native CLI`
- Tener Instalado Globalmente y configurar [CODEPUSH](https://microsoft.github.io/code-push/)
- Configurar SDK en archivo en ANDROID -> `local.properties`
- Configurar JDK en archivo en ANDROID -> `gradle.properties`


## 2. Instalación

- Ejecutar `npm install`

- En `MainApplication.java` android -> app -> src -> java -> com -> nativeestartekit -> MainApplication.java

tener una sola linea o ninguna
```sh
linea 6 > import com.microsoft.codepush.react.CodePush;
    
linea 33 > new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
```
    
    
- Ejecutar `react-native link`
 
- En `setting.gradle` android -> settings.gradle

Borrar lineas repetidas
```sh
linea 5 > include ':react-native-code-push'

linea 6 > project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
```
     
- Ejecutar `react-native run-android`