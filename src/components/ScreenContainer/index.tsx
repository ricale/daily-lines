import React from 'react';

import styled from 'themes';

import Button from '../Button';
import Text from '../Text';
import KeyboardAvoidingView from '../KeyboardAvoidingView';

import Container from './Container';
import Header from './Header';
import Content from './Content';

const Title = styled(Text)`
  font-size: ${p => p.theme.text.h4.fontSize}px;
  color: ${p => p.theme.colors.colorOnBackground};
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
                    left={
                        headerLeft !== undefined ? headerLeft :
                            <Button>a</Button>
                    }
                    right={headerRight}
                    float={headerFloat}>
                    {!!title &&
                        <Title>{title}</Title>
                    }
                </Header>
            }

            {keyboardAvoiding &&
                <KeyboardAvoidingView>
                    <Content
                        {...props}
                        />
                </KeyboardAvoidingView>
            }
            {!keyboardAvoiding &&
                <Content
                    {...props}
                    />
            }
        </Container>
    )
}

export default ScreenContainer;
