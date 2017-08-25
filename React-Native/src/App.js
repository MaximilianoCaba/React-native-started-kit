import React, {Component} from 'react';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

let listIcon = FontAwesome.getImageSource('list-alt', 20);
let commentsIcon = FontAwesome.getImageSource('comments', 20);

let iconsArrayPromises = [listIcon, commentsIcon];


registerScreens(); // this is where you register all of your app's screens

// start the app

Promise.all(iconsArrayPromises).then(([listIcon, commentsIcon]) => {


    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Inicio',
                screen: 'home.screen', // this is a registered name for a screen
                icon: listIcon,
                title: 'Screen One'
            },

            {
                label: 'Productos',
                screen: 'products.screen', // this is a registered name for a screen
                icon: commentsIcon,
                title: 'Otra Pag'
            }
        ],
        drawer: {
            right: {
                screen: 'app.drawer.Menu'
            },
            disableOpenGesture: false
        },
        appStyle: {
            orientation: 'portrait'
        },
        appStyle: {
            tabBarBackgroundColor: 'white',
            tabBarButtonColor: 'black',
            tabBarSelectedButtonColor: 'red',
            tabBarTranslucent: true
        }
    })

});
