import React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';

import {
    WritingsListScreen
} from 'screens';

export type RootStackParamList = {
    WritingsList: undefined
}

const Stack = createStackNavigator<RootStackParamList>();
const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='WritingsList' component={WritingsListScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;
