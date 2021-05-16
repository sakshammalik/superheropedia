import styled from 'styled-components';

const Loader = () => {
    return (
        <>
        <Body>
			<Hand>
                <span></span>
                <Face></Face>
                <Cowl></Cowl>
             </Hand>
        </Body>
        </>
    );
};

export default Loader;

const Body = styled.div`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:rotate(-15deg);
    animation: friction .5s linear infinite;
    &:after {
        content: 'Loading';
        width: 100%;
        height: 100%;
        color: white;
        position: absolute;
        top: 7rem;
        right: 1rem;
    }
`;
const Hand = styled.div`
    span {
        position: absolute;
        width: 2px;
        height: 0;
        border-top: 12px solid transparent;
        border-right: 20px solid yellow;
        border-bottom: 95px solid transparent;
        transform:rotate(-15deg);
    }
    span:after {
        color:red;
        content: "S";
        height: 18px;
        width: 16px;
        border-radius: 50%;
        background: yellow;
        position: absolute;
        right: -12px;
        top: -18px;
        transform:rotate(-15deg);
       }
    span:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 20px solid yellow;
        border-bottom: 45px solid transparent;
        top: -24px	;
        right: -22px;
        transform:rotate(-15deg);
      
      }
      
`;
const Face = styled.div`
    position: absolute;
    height: 12px;
    width: 20px;	
    background: yellow;
    border-radius: 20px 20px 0 0;
    transform: rotate(80deg);
    right: -8px;
    top: -20px;
    &:after {
        content: "";
        height: 12px;
        width: 12px;
        background: yellow;
        right: 2px;
        top: 5px;
        position: absolute;
        transform: rotate(45deg);
        transform-origin: 50% 50%;
        border-radius: 0 0 0 2px;
      }
`;
const Cowl = styled.div`
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    border-bottom: 20px solid yellow;
    border-right: 20px solid transparent;
    
    top: -32px	;
    right: -16px;
	transform:rotate(-28deg);
`;