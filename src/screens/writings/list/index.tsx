import React, { useEffect } from 'react';

import { Button, ScreenContainer, Text } from 'components';
import { useDispatch } from 'react-redux';
import { writingActions } from 'store';
import { useMyNavigation } from 'router';

const WritingsListScreen = () => {
    const { navigate } = useMyNavigation<'WritingsList'>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(writingActions.requestGetWritings());
    }, []);

    return (
        <ScreenContainer>
            <Text>WritingsListScreen</Text>

            <Button
                text='생성'
                onPress={() => navigate('WritingsNew')}
                />
        </ScreenContainer>
    );
}

export default WritingsListScreen;
