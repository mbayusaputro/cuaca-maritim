import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Statistic from '../screens/Statistic';
import About from '../screens/About';
import Site from '../screens/Site';
import Maps from '../screens/Maps';

const Root = createStackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            header:null
        }
    },
    Site: {
        screen: Site,
        navigationOptions: {
            header:null
        }
    },
    Maps: {
        screen: Maps,
        navigationOptions: {
            header:null
        }
    },
    Statistic: {
        screen: Statistic,
        navigationOptions: {
            title: 'Statistic'
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            header:null
        }
    },
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle : {
            backgroundColor: '#00B8EE',
            elevation: 0,
        },
        headerTintColor : '#fff'
    }
});

const switchNavigator = createSwitchNavigator ({
    Splash : Splash,
    App: Root
})

export default createAppContainer(switchNavigator);