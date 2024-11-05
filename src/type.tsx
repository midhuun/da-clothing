export type Product = {
    id: string ;
    name: string;
    gsm: string;
    type?: string;
    blendRatio: string;
    image: string[] ;
    color: string;
    fabric?:string;
    wash?:string;
    subCategoryId:string;
    categoryId:string
    print?:string;
    emp?:string;
    pattern?:string;
    
};

export type SubCategory = {
    id: string;
    categoryId: string;
    description:string;
    name: string;
    image: string;
    Products?: Product[];
};

export type Category = {
    id: string;
    description:string;
    name: string;
    image: string;
    subCategories: SubCategory[];
};
