import { useRouter } from 'next/router';
import styled from 'styled-components';

const Header = () => {
    const router = useRouter();
    return <HeaderContainer>
        <Text onClick={() => router.push('/')}>SuperheroPedia</Text>
    </HeaderContainer>
};

export default Header;

const HeaderContainer = styled.div`
    height: 4rem;
    position: fixed;
    color: white;
    width: 100%;
    padding: 1.2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    background: black;
    font-size: 1.5rem;
    backdrop-filter: blur(25px);
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

const Text = styled.span`
    z-index: 999;
    cursor: pointer;
`;