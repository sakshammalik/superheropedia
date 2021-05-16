import { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Loader from './Loader';
import Fade from 'react-reveal/Fade';

const Superhero = ({ id }) => {

    const [heroDetail, setHeroDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const url = process.env.NEXT_PUBLIC_API_BASE + id;
        axios.get(url).then((resp) => {
            setLoading(false);
            setHeroDetail(resp.data);
        });
    }, [id]);

    return (
        <Container>
            {loading && <Loader />}
            {!loading && heroDetail && 
            <Fade bottom>
                <SuperheroContainer>
                    <StatContainer>
                        <ImageContainer>
                            <Image src={heroDetail.image.url} alt={heroDetail.name} />
                            <Name>{heroDetail.name}</Name>
                        </ImageContainer>
                    </StatContainer>
                    <StatDetailContainer>
                    <Powerstats>
                        <StatHeading>Powerstats</StatHeading>
                        {Object.keys(heroDetail.powerstats).map((stat) => <Stat>
                            <span>{stat}</span>
                            <Bar width={heroDetail.powerstats[stat]}></Bar>
                        </Stat>)}
                    </Powerstats>
                    <Fade bottom>
                    <StatContainer>
                        <StatHeading>Biography</StatHeading>
                        <Details>
                            <span>Full Name</span>
                            <span>{heroDetail.biography['full-name']}</span>
                        </Details>
                        <Details>
                            <span>Place of Birth</span>
                            <span>{heroDetail.biography['place-of-birth']}</span>
                        </Details>
                        <Details>
                            <span>First Appearance</span>
                            <span>{heroDetail.biography['first-appearance']}</span>
                        </Details>
                        <Details>
                            <span>Publisher</span>
                            <span>{heroDetail.biography['publisher']}</span>
                        </Details>
                        <Details>
                            <span>Alter Egos</span>
                            <span>{heroDetail.biography['alter-egos']}</span>
                        </Details>
                    </StatContainer>
                    </Fade>
                    <Fade bottom style={{ width: '100%' }}>
                    <StatContainer>
                        <StatHeading>Appearance</StatHeading>
                        <Details>
                            <span>Gender</span>
                            <span>{heroDetail.appearance['gender']}</span>
                        </Details>
                        <Details>
                            <span>Race</span>
                            <span>{heroDetail.appearance['race']}</span>
                        </Details>
                        <Details>
                            <span>Height</span>
                            <span>{heroDetail.appearance['height'][0]} or {heroDetail.appearance['height'][1]}</span>
                        </Details>
                        <Details>
                            <span>Weight</span>
                            <span>{heroDetail.appearance['weight'][0]} or {heroDetail.appearance['weight'][1]}</span>
                        </Details>
                        <Details>
                            <span>Eye Color</span>
                            <span>{heroDetail.appearance['eye-color']}</span>
                        </Details>
                        <Details>
                            <span>Hair Color</span>
                            <span>{heroDetail.appearance['hair-color']}</span>
                        </Details>
                    </StatContainer>
                    </Fade>
                    <Fade bottom>
                        <StatContainer>
                            <StatHeading>Work</StatHeading>
                            <Details>
                                <span>Occupation</span>
                                <span>{heroDetail.work['occupation']}</span>
                            </Details>
                            <Details>
                                <span>Base</span>
                                <span>{heroDetail.work['base']}</span>
                            </Details>
                        </StatContainer>
                    </Fade>
                    <Fade bottom>
                        <StatContainer>
                            <StatHeading>Connections</StatHeading>
                            <Details>
                                <span>Group Affiliation</span>
                                <span>{heroDetail.connections['group-affiliation']}</span>
                            </Details>
                            <Details>
                                <span>Relatives</span>
                                <span>{heroDetail.connections['relatives']}</span>
                            </Details>
                        </StatContainer>
                    </Fade>
                    </StatDetailContainer>
                </SuperheroContainer>
            </Fade>
            }
        </Container>
    );
};

export default Superhero;

const StatDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatHeading = styled.span`
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;
const StatContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border-radius: 2rem;
`;

const Name = styled.div`
    font-size: 2rem;
    margin: 1rem 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const SuperheroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Image = styled.img`
    width: 80%;
    border-radius: inherit;
    @media (min-width: 768px) {
        width: 400px;
    }
`;

const Powerstats = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Stat = styled.div`
    padding: 0.5rem 2rem;
    span {
        text-transform: capitalize;
    }
`;

const Bar = styled.div`
    padding: 2px;
    border-radius: 15px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    &:before{
        width: ${props => `calc(${props.width}% - 10px)`};
        content: '';
        background-color: #ffcc33;
        display: inline-block;
        padding: 5px 0 5px 10px;
        border-radius: inherit;
        animation: load 2s 0s;
        -webkit-animation: load 2s 0s;
        -moz-animation: load 2s 0s;
        -o-animation: load 2s 0s;
      }
`;