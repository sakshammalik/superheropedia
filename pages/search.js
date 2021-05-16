import { useRouter } from 'next/router';
import Search from '../components/Search';

const SearchPage = () => {
    const router = useRouter();
    const { query } = router.query;
    return <Search query={query} />;
};

export default SearchPage;
