import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const Home = () => {

    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');

    const search = () => {
        router.push('/search?query=' + searchTerm);
    };

    return (
        <HomePage>
            <BlurredBox>
                <Input type="search" placeholder="Search your superhero..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Button onClick={search}>Find my superhero</Button>
            </BlurredBox>
        </HomePage>
    );
};

export default Home;

const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    transition: all ease-in 200ms;
    position: relative;
    &:before {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
    }
`;
const BlurredBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    font-size: 2rem;
    height: 50%;
    overflow: hidden;
    position: relative;
    width: 75%;
    padding: 0 10px;
    max-width: 500px;
    &:before {
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
      }
`;

const Input = styled.input`
    width: 100%;
    padding: 20px;
    border-radius: 50px;
    appearance: none;
    outline: none;
    opacity: 0.4;
    border: none;
    text-align: center;
`;

const Title = styled.span`
      color: white;
      z-index: 999;
      margin-bottom: 30px;
`;

const Button = styled.button`
    z-index: 999;
    margin-top: 20px;
    border: 1px solid transparent;
    background: #ce1212;
    color: white;
    padding: 16px;
    font-size: 14px;
    border-radius: 50px;
    width: 100%;
    text-transform: capitalize;
    outline: none;
    cursor: pointer;
`;