import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Points from './pages/Points';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{cardStyle: {backgroundColor: '#f0f0f5'}}}
            >
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Detail" component={Detail}/>
                <AppStack.Screen name="Points" component={Points}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}

export default Routes;