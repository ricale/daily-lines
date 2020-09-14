import styled, { css } from 'themes';

type ContainerProps = {
    float: boolean
}
const Container = styled.View<ContainerProps>`
    ${p => p.float && css`
        position: absolute;
    `}
    flex-direction: column;

    width: 100%;
    height: ${p => p.theme.dimens.headerHeight}px;
    z-index: 10;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;
const LeftContainer = styled.View`
`;
const ChildrenContainer = styled.View`
    flex: 1;
`;
const RightContainer = styled.View`
`;

type ScreenContainerHeaderProps = {
    float?: boolean
    left?: React.ReactNode
    right?: React.ReactNode
    children?: React.ReactNode
}
const ScreenContainerHeader = ({
    float,
    left,
    right,
    children,
}: ScreenContainerHeaderProps) => {
    const RowComp = Row;

    return (
        <Container>
            <RowComp>
                <LeftContainer>
                    {left}
                </LeftContainer>
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
                <RightContainer>
                    {right}
                </RightContainer>
            </RowComp>
        </Container>
    );
}

export default ScreenContainerHeader;
