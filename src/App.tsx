import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import AppRouter from 'router';
import getStore from 'store';
import styled, {
    ThemeProvider,
    normal,
} from 'themes';

const store = getStore();

const SafeAreaViewContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${p => p.theme.colors.colorBackground};
`;

const App = () => {
    return (
        <ThemeProvider theme={normal}>
            <Provider store={store}>
                <SafeAreaViewContainer>
                    <View></View>
                    <AppRouter />
                </SafeAreaViewContainer>
            </Provider>
        </ThemeProvider>
    )
}

export default App;
