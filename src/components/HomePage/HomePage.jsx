import { useParams } from 'react-router-dom';

import SaleSection from './SaleSection/SaleSection';
import IdeaSection from './IdeaSection/IdeaSection';
import CatalogueSection from './CatalogueSection/CatalogueSection';
import LearnmoreSection from './LearnmoreSection/LearnmoreSection';

function HomePage() {
    return (
        <div className="_container">
            <SaleSection />
            <IdeaSection />
            <CatalogueSection />
            <LearnmoreSection />
        </div>
    );
}

export default HomePage;
