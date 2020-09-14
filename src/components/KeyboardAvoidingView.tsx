import React from 'react';
import {
    Platform,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import styled from 'themes';

const Container = styled.KeyboardAvoidingView`
    flex: 1;
`;

type KeyboardAvoidingViewProps = {
    children: React.ReactNode
}
const KeyboardAvoidingView = ({
    children,
}: KeyboardAvoidingViewProps) => {
    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    Keyboard.dismiss();
                }}>
                <>
                    {children}
                </>
            </TouchableOpacity>
        </Container>
    )
}

export default KeyboardAvoidingView;
