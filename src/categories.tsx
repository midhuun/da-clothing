import wear1 from './subCategories/womens/i-activewear/activewear_womens-1.jpg';
import wear2 from './subCategories/womens/i-activewear/activewear_womens-6.jpg';
import wear3 from './subCategories/womens/i-activewear/activewear_womens-11.jpg';
import wear4 from './subCategories/womens/i-activewear/activewear_womens-15.jpg';
import wear5 from './subCategories/womens/i-activewear/activewear_womens-23.jpg';
import wear6 from './subCategories/womens/i-activewear/activewear_womens-24.jpg';
import wear7 from './subCategories/womens/i-activewear/activewear_womens-26.jpg';
import wear8 from './subCategories/womens/i-activewear/activewear_womens-33.jpg';
import wear9 from './subCategories/womens/i-activewear/activewear_womens-35.jpg';
import wear10 from './subCategories/womens/i-activewear/activewear_womens-37.jpg';
import wear11 from './subCategories/womens/i-activewear/activewear_womens-46.jpg';
import Hoodie from './subCategories/womens/i-hoodies/hoodie.jpg';
import MenHoodie from './assets/Men/hoodie-men.jpg';
import MenTees from './assets/Men/t-shirts.png';
import Shorts from './assets/Men/shorts.jpg';
import Jacket from './assets/Men/jacket.png';
import MenSweat from './assets/Men/sweatshirt.png';
import TrackMen from './assets/Men/track-men.jpg';
import Polo from './assets/Men/polo.png';
import { Category } from './type';

const categories: Category[] = [
    {
        id: "organics",
        name: "Organics",
        image: "",
        subCategories: [
            {
                id: "hoodie-sweatshirt",
                categoryId: "organics",
                name: "Hoodie & Sweatshirt",
                image: "path/to/organics-hoodie-sweatshirt.jpg",
                Products: []
            },
            {
                id: "tshirt",
                categoryId: "organics",
                name: "T-Shirt",
                image: "path/to/organics-tshirt.jpg",
                Products: []
            },
            {
                id: "track-suit",
                categoryId: "organics",
                name: "Track-Suit",
                image: "path/to/organics-track-suit.jpg",
                Products: []
            },
            {
                id: "pant-short",
                categoryId: "organics",
                name: "Pant & Short",
                image: "path/to/organics-pant-short.jpg",
                Products: []
            },
            {
                id: "jacket",
                categoryId: "organics",
                name: "Jacket",
                image: "path/to/organics-jacket.jpg",
                Products: []
            },
            {
                id: "sweater",
                categoryId: "organics",
                name: "Sweater",
                image: "path/to/organics-sweater.jpg",
                Products: []
            },
            {
                id: "polo-shirt",
                categoryId: "organics",
                name: "Polo Shirt",
                image: "path/to/organics-polo-shirt.jpg",
                Products: []
            }
        ]
    },
    {
        id: "womens",
        name: "Womens",
        image: "",
        subCategories: [
            {
                id: "hoodie",
                categoryId: "womens",
                name: "Hoodie & Sweat Shirt",
                image: Hoodie,
                Products: []
            },
            {
                id: "tshirts",
                categoryId: "womens",
                name: "T-Shirts",
                image: Hoodie,
                Products: []
            },
            {
                id: "jacket",
                categoryId: "womens",
                name: "Jackets",
                image: Hoodie,
                Products: []
            },
            {
                id: "yogapants",
                categoryId: "womens",
                name: "Yoga Pants",
                image: Hoodie,
                Products: []
            },
            {
                id: "activewear",
                categoryId: "womens",
                name: "Active Wears",
                image: Hoodie,
                Products: [
                    {
                        id: "comfy-mid-intensity-bra",
                        name: "Comfy Mid Intensity Bra",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear1,
                        color: "Multi Black",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "comfy-branded-waist-pant-with-pocket",
                        name: "Comfy Branded Waist Pant with pocket",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear2,
                        color: "Multi Black",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "stretchy-bike-shorts-1",
                        name: "Stretchy Bike Shorts (Air Force)",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear3,
                        color: "Air Force",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "stretchy-bike-shorts-2",
                        name: "Stretchy Bike Shorts (Black)",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear4,
                        color: "Black",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "legging-cross-pocket",
                        name: "Legging Cross Pocket",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear5,
                        color: "Grey Heather",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "ankle-legging-cross-pocket",
                        name: "Ankle Legging Cross Pocket",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear6,
                        color: "Tie and Dye",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "mesh-pant-legging",
                        name: "Mesh Pant Legging",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear7,
                        color: "Black",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "ultimate-stretchy-jegging-with-pocket",
                        name: "Ultimate Stretchy Jegging with Pocket",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear8,
                        color: "Potpouri",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "perfomance-track-pants",
                        name: "Perfomance Track Pants",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear9,
                        color: "Black (Silver Reflective)",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "classic-stretchy-jegging",
                        name: "Classic Stretchy Jegging",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear10,
                        color: "Cabernet",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    },
                    {
                        id: "full-length-sculpted-legging",
                        name: "Full Length Sculpted Legging",
                        gsm: "200 GSM",
                        type: "Polyster Fabric",
                        blendRatio: "80 Poly 60 Spandex",
                        image: wear11,
                        color: "Dark Grey",
                        categoryId: "womens",
                        subCategoryId: "activewear"
                    }
                ]
            }
        ]
    },
    {
        id: "mens",
        name: "Mens",
        image: "",
        subCategories: [
            {
                id: "tshirts",
                categoryId: "mens",
                name: "T-Shirts",
                image: MenTees,
                Products: [
                    {
                        id: "travis-scott-comic",
                        name: "Travis Scott Comic",
                        gsm: "200 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Apptical Wash",
                        print: "Dtg",
                        color: "Multi Black",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "nirvana",
                        name: "Nirvana",
                        gsm: "200 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Apptical Wash",
                        print: "Dtg",
                        color: "Multi Black",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "astroworld-happyface",
                        name: "Astroworld HappyFace",
                        gsm: "200 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Apptical Wash",
                        print: "Dtg",
                        color: "Yellow",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "the-weekend-xo",
                        name: "The Weekend Xo",
                        gsm: "200 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Apptical Wash",
                        print: "Dtg",
                        color: "Pearl Green",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "astro-world",
                        name: "Astro World",
                        gsm: "200 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Apptical Wash,Lava Wash,Over Dying",
                        print: "Screen Print",
                        color: "Black And Red",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "chrome-culture-beige",
                        name: "Chrome Culture",
                        gsm: "240 Gsm",
                        fabric: "Loof Knit",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash",
                        print: "All Over Print",
                        color: "Beige",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts"
                    },
                    {
                        id: "chrome-culture-blue",
                        name: "Chrome Culture",
                        gsm: "240 Gsm",
                        fabric: "Loof Knit",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash",
                        print: "All Over Print",
                        color: "Sky Blue",
                        image: "",
                        categoryId: "mens",
                        subCategoryId: "tshirts",
                    },
                    {
                        id: "chrome-culture-black",
                        name: "Chrome Culture",
                        gsm: "240 Gsm",
                        fabric: "Loof Knit",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash",
                        emp: "Design Butterfly",
                        color: "Black",
                        categoryId: "mens",
                        subCategoryId: "tshirts",
                        image:''
                    },
                    {
                        id: "chrome-culture-white",
                        name: "Chrome Culture",
                        gsm: "240 Gsm",
                        fabric: "Loof Knit",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash",
                        emp: "Design Butterfly",
                        color: "White",
                        categoryId: "mens",
                        subCategoryId: "tshirts",
                        image:''
                    },
                    {
                        id: "dye-and-tie",
                        name: "Dye And Tie",
                        gsm: "190 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash",
                        pattern: "Dye And Tie",
                        print: "Screen Print (Puff)",
                        color: "Black And White And Green",
                        categoryId: "mens",
                        subCategoryId: "tshirts",
                        image:''
                    },
                    {
                        id: "dye-and-tie",
                        name: "Dye And Tie",
                        gsm: "190 Gsm",
                        fabric: "Single Jersey",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash,Acid Wash",
                        pattern: "Dye And Tie",
                        print: "Screen Print (Puff)",
                        color: "Black And Gray",
                        categoryId: "mens",
                        subCategoryId: "tshirts",
                        image:''
                    }
                ]
            },
            {
                id: "hoodie",
                categoryId: "mens",
                name: "Hoodie & Sweatshirts",
                image: MenHoodie,
                Products: [
                    {
                        id: "mini-craft",
                        name: "Mini Craft",
                        gsm: "320 Gsm",
                        fabric: "Loof Knit",
                        blendRatio: "100% Cotton",
                        wash: "Silicone Wash,Acid Wash",
                        pattern: "Dye And Tie",
                        print: "Screen Print (Puff)",
                        color: "Black",
                        categoryId: "mens",
                        subCategoryId: "hoodie",
                        image:''
                    }
                ]
            },
            {
                id: "tracksuit",
                categoryId: "mens",
                name: "Track Suit",
                image: TrackMen,
                Products: []
            },
            {
                id: "pants-shorts",
                categoryId: "mens",
                name: "Pants & Shorts",
                image: Shorts,
                Products: []
            },
            {
                id: "sweater",
                categoryId: "mens",
                name: "Sweater",
                image: MenSweat,
                Products: []
            },
            {
                id: "polo-shirt",
                categoryId: "mens",
                name: "Polo Shirt",
                image: Polo,
                Products: []
            },
            {
                id: "jacket",
                categoryId: "mens",
                name: "Jacket",
                image: Jacket,
                Products: []
            }
        ]
    },
    {
        id: "kids",
        name: "Kids",
        image: "",
        subCategories: [
            {
                id: "hoodie-sweatshirts",
                categoryId: "kids",
                name: "Hoodie & SweatShirts",
                image: "path/to/kids-hoodie-sweatshirts.jpg",
                Products: []
            },
            {
                id: "track-suits",
                categoryId: "kids",
                name: "Track-Suits",
                image: "path/to/kids-track-suits.jpg",
                Products: []
            },
        ]
    }
];

export default categories;
