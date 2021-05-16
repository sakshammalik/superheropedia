import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';

const Search = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    useEffect(() => {
        setLoading(true);
        const url = process.env.NEXT_PUBLIC_API_BASE + `search/${query}`;
        axios.get(url).then((resp) => {
            setLoading(false);
            if (resp.data.response === 'error') {
                setError(resp.data.error);
            } else {
                setError('');
                setResults(resp.data.results)
            }
        });
    }, [query]);

    const goToHero = (id) => {
        router.push('/superhero/' + id);
    };

    return (
        <Container>
            {loading && <Loader />}
            {!loading && <List>
                {results && !!results.length && results.map((result) =>
                    <Fade bottom>
                        <ListItem onClick={() => goToHero(result.id)}>
                                <Image src={result.image.url}/>
                                <Details>
                                    <HeaderText>{result.name}</HeaderText>
                                    <Text>{result.biography.publisher}</Text>
                                </Details>
                        </ListItem>
                    </Fade>
                )}
            </List>}
            {!loading && error && <Error>
                <img src="/images/groot.png" />
                {error}
                <button onClick={() => router.push('/')}>Find another superhero</button>
                </Error>}
        </Container>
    );
};

export default Search;

const Error = styled.div`
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 1.3rem;
    overflow: hidden;
    button {
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
        @media (min-width: 768px) {
            width: 50%;
        }
    }
    img {
        width: 100%;
        @media (min-width: 768px) {
            width: 50%;
        }
    }
`;

const Text = styled.span`
    color: lightslategray;
    margin-top: 1rem;
`;
const HeaderText = styled.span`
    font-size: 2rem;
    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    justify-content: center;
    @media (min-width: 768px) {
        align-items: center;
    }
`;
const Container = styled.div`
    background: black;
    color: white;
    @media (min-width: 768px) {
        max-width: 900px;
        margin: auto;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const ListItem = styled.li`
    border-bottom: white;
    display: flex;
    padding: 2rem;
    @media (min-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Image = styled.img`
    width: 40%;
    border-radius: 1rem;
    @media (min-width: 768px) {
        width: 90%;
    }
`;