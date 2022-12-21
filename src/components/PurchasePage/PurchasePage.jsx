import { useParams } from 'react-router-dom';

import PurchaseAddToCart from './Purchase/PurchaseAddToCart/PurchaseAddToCart';
import Label from '../CataloguePage/Label/Label';
import PurchaseAnythingElse from './Purchase/PurchaseAnythingElse/PurchaseAnythingElse';

import winterCloth1 from '../CataloguePage/CollectionSection/img/winterClothes/cataloguerow1.png';
import winterCloth2 from '../CataloguePage/CollectionSection/img/winterClothes/cataloguerow2.png';
import winterCloth3 from '../CataloguePage/CollectionSection/img/winterClothes/cataloguerow3.png';
import winterCloth4 from '../CataloguePage/CollectionSection/img/winterClothes/cataloguerow4.png';

import summerCloth1 from '../CataloguePage/CollectionSection/img/summerClothes/row2_1.png';
import summerCloth2 from '../CataloguePage/CollectionSection/img/summerClothes/row2_2.png';
import summerCloth3 from '../CataloguePage/CollectionSection/img/summerClothes/row2_3.png';
import summerCloth4 from '../CataloguePage/CollectionSection/img/summerClothes/row2_4.png';
import NotFound from '../NotFound/NotFound';
import { useLanguage } from '../../context/LanguageContext';

export const clothesArr = [
    {
        id: 10,
        img: summerCloth1,
        newPrice: 55,
        description: 'Man`s longsleeve white',
        descriptionRu: 'Мужской лонгслив - белый',
        label: false,
    },
    {
        id: 3,
        img: winterCloth3,
        newPrice: 75,
        description: 'Man`s suit purple',
        descriptionRu: 'Мужской костюм - фиолетовый',
        label: false,
    },
    {
        id: 11,
        img: summerCloth2,
        oldPrice: 45,
        newPrice: 29,
        description: 'Woman`s t-shirt white',
        descriptionRu: 'Женская футболка - белая',
        label: true,
    },
    {
        id: 4,
        img: winterCloth4,
        newPrice: 75,
        description: 'Woman`s suit lemon',
        descriptionRu: 'Женский костюм - жёлтый',
        label: true,
    },
    {
        id: 12,
        img: summerCloth3,
        oldPrice: 55,
        newPrice: 39,
        description: 'Woman`s longsleeve Black',
        descriptionRu: 'Женский лонгслив - чёрный',

        label: true,
    },
    {
        id: 2,
        img: winterCloth2,
        newPrice: 75,
        description: 'Woman`s suit purple',
        descriptionRu: 'Женский костюм - фиолетовый',
        label: false,
    },
    {
        id: 13,
        img: summerCloth4,
        newPrice: 45,
        description: 'Man`s t-shirt white',
        descriptionRu: 'Мужская футболка - белая',
        label: false,
    },
    {
        id: 1,
        img: winterCloth1,
        newPrice: 75,
        description: 'Woman`s suit coffee',
        descriptionRu: 'Женский костюм - кофейный',
        label: true,
    },
];

function PurchasePage() {
    const language = useLanguage();

    const params = useParams();
    const isFound = clothesArr.find((item) => {
        return item.id == params.id;
    });
    return isFound ? (
        <>
            <div className="_container">
                <PurchaseAddToCart />
            </div>
            <Label
                text={
                    language.language === 'EN'
                        ? 'u migth also like / You migth also like / You migth also like / You migth als'
                        : 'вам также может понравится / вам также может понравится / вам также может понр'
                }
            />
            <div className="_container">
                <PurchaseAnythingElse />
            </div>
        </>
    ) : (
        <NotFound />
    );
}

export default PurchasePage;
