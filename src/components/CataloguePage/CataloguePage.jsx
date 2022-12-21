import SaleSection from '../HomePage/SaleSection/SaleSection';
import CollectionSection from './CollectionSection/CollectionSection';
import Label from './Label/Label';
import { useLanguage } from '../../context/LanguageContext';

import winterCloth1 from './CollectionSection/img/winterClothes/cataloguerow1.png';
import winterCloth2 from './CollectionSection/img/winterClothes/cataloguerow2.png';
import winterCloth3 from './CollectionSection/img/winterClothes/cataloguerow3.png';
import winterCloth4 from './CollectionSection/img/winterClothes/cataloguerow4.png';

import summerCloth1 from './CollectionSection/img/summerClothes/row2_1.png';
import summerCloth2 from './CollectionSection/img/summerClothes/row2_2.png';
import summerCloth3 from './CollectionSection/img/summerClothes/row2_3.png';
import summerCloth4 from './CollectionSection/img/summerClothes/row2_4.png';

function Catalogue() {
    const language = useLanguage();

    const winterClothes = [
        {
            id: 1,
            img: winterCloth1,
            newPrice: '$75',
            description: 'Woman`s suit coffee',
            descriptionRu: 'Женский костюм - кофейный',
            label: true,
        },
        {
            id: 2,
            img: winterCloth2,
            newPrice: '$75',
            description: 'Woman`s suit purple',
            descriptionRu: 'Женский костюм - фиолетовый',
            label: false,
        },
        {
            id: 3,
            img: winterCloth3,
            newPrice: '$75',
            description: 'Man`s suit purple',
            descriptionRu: 'Мужской костюм - фиолетовый',
            label: false,
        },
        {
            id: 4,
            img: winterCloth4,
            newPrice: '$75',
            description: 'Woman`s suit lemon',
            descriptionRu: 'Женский костюм - жёлтый',
            label: true,
        },
    ];
    const summerClothes = [
        {
            id: 10,
            img: summerCloth1,
            newPrice: '$55',
            description: 'Man`s longsleeve white',
            descriptionRu: 'Мужской лонгслив - белый',
            label: false,
        },
        {
            id: 11,
            img: summerCloth2,
            oldPrice: '$45',
            newPrice: '$29',
            description: 'Woman`s t-shirt white',
            descriptionRu: 'Женская футболка - белая',
            label: true,
        },
        {
            id: 12,
            img: summerCloth3,
            oldPrice: '$55',
            newPrice: '$39',
            description: 'Woman`s longsleeve Black',
            descriptionRu: 'Женский лонгслив - чёрный',
            label: true,
        },
        {
            id: 13,
            img: summerCloth4,
            newPrice: '$45',
            description: 'Man`s t-shirt white',
            descriptionRu: 'Мужская футболка - белая',
            label: false,
        },
    ];

    return (
        <>
            <div className="_container">
                <SaleSection />
                <CollectionSection
                    arrClothes={winterClothes}
                    title={'WOX 2020 STREETWEAR SUIT COLLECTION'}
                    subtitle={
                        language.language === 'EN'
                            ? 'COMFORTABLE AND WARM'
                            : 'КОМФОРТ И ТЕПЛО'
                    }
                />
            </div>
            <Label
                BREATHABLE
                text={
                    language.language === 'EN'
                        ? 'st comfortable premium quality upwear made by humans / The most comfort'
                        : 'комфортная ожеда премиум качества сделанная людьми'
                }
            />
            <div className="_container">
                <CollectionSection
                    arrClothes={summerClothes}
                    title={'WOX 2020 SUMMER STREETWEAR COLLECTION'}
                    subtitle={
                        language.language === 'EN'
                            ? 'COMFORTABLE AND BREATHABLE'
                            : 'КОМФОРТ И ЛËГКОСТЬ'
                    }
                />
            </div>
        </>
    );
}

export default Catalogue;
