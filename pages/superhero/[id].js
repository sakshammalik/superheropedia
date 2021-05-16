import Superhero from '../../components/Superhero';
import { useRouter } from 'next/router'

const SuperheroPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <Superhero id={id} />;
};

export default SuperheroPage;
