import React from 'react';

import styled from 'themes';

import KeyboardAvoidingView from '../KeyboardAvoidingView';
import Header from './Header';

const Container = styled.View`
`;
const Content = styled.View`
`;

type ScreenContainerProps = {
    children?: React.ReactNode
    refreshControl?: React.ReactNode

    scroll?: boolean
    keyboardAvoiding?: boolean
    containerStyle?: {[key: string]: any}

    headerShown?: boolean
    title?: string
    headerFloat?: boolean
    headerLeft?: React.ReactNode
    headerRight?: React.ReactNode
    
    contentAlignCenter?: boolean
    contentPaddingHorizontal?: number | string
}
const ScreenContainer = ({
    keyboardAvoiding,
    containerStyle,

    headerShown,
    title,
    headerFloat,
    headerLeft,
    headerRight,
    ...props
}: ScreenContainerProps) => {
    return (
        <Container style={containerStyle}>
            {headerShown &&
                <Header
                    // left={
                    //     headerLeft !== undefined ? headerLeft :
                    //         <Button></Button>
                    // }
                    />
            }

            {keyboardAvoiding &&
                <KeyboardAvoidingView>
                    <Content
                        />
                </KeyboardAvoidingView>
            }
            {!keyboardAvoiding &&
                <Content
                    />
            }
        </Container>
    )
}