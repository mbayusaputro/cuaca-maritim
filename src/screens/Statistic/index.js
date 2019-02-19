import { createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Table from '../Statistic/Table';
import Graph from '../Statistic/Graph';

const Index = createMaterialTopTabNavigator ({
    Table: {
        screen: Table,
        navigationOptions: {
            title: 'Table'
        }
    },
    Graph: {
        screen: Graph,
        navigationOptions: {
            title: 'Graph'
        }
    }
},{
    tabBarOptions: {
        height: 50,
        activeTintColor: '#F7F7F7',
        inactiveTintColor: '#FFFFFF',
        labelStyle : {
            fontWeight: 'bold'
        },
        indicatorStyle: {
            backgroundColor: '#0085FE',
          },
          style: {
            backgroundColor: '#00B8EE',
          }  
    }
});

export default createAppContainer(Index);