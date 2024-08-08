import { useState, useMemo } from "react";
import Logo from "../assets/logo.png";
import Search from "../assets/search.svg";
import categories from "../categories";
import { Link } from "react-router-dom";
import { Product, Category } from "../type";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [searchClicked, setSearchClicked] = useState(false);

  // Create a memoized list of products from categories
  const products: Product[] = useMemo(() => {
    const allProducts: Product[] = [];
    categories.forEach((category: Category) => {
      category.subCategories.forEach((sub) => {
        sub?.Products?.forEach((product) => {
          if (product) {
            allProducts.push(product);
          }
        });
      });
    });
    return allProducts;
  }, [categories]);

  const SearchProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = products.filter((prod) => 
      value && prod.id.toLowerCase().includes(value.toLowerCase())
    );
    setResults(searchValue);
    setSearchClicked(true);
  };

  return (
    <>
      {isNavOpen && (
        <div className="w-[50%] min-h-screen shadow-md fixed top-0 bg-white z-[1001]">
          <div className="relative border pt-[60px] px-3">
            <Link to='/'>
              <img className="h-8 w-8 rounded-full border absolute top-2 left-2" src={Logo} alt="Logo" />
            </Link>
            <svg onClick={() => setIsNavOpen(false)} className="cursor-pointer absolute right-2 top-2 z-[1001]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <div className="categories md:pl-[80px] font-semibold items-center gap-5">
              <Link onClick={() => setIsNavOpen(false)} to='/' className="py-3">
                <h2 className="border-b">Home</h2>
              </Link>
              {categories.map((val: Category) => (
                <Link onClick={() => setIsNavOpen(false)} key={val.id} to={`/categories/${val.id}`}>
                  <h2 className="py-2 border-b">{val.name}</h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className='h-[60px] fixed z-[1000] top-0 w-full bg-[#FAFAFA] px-1'>
        <div className="flex h-[60px] justify-between items-center p-2 ">
          <div className='flex justify-center items-center'>
            <div onClick={() => setIsNavOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
            <Link to="/">
              <img className="h-8 w-8 rounded-full border mx-5" src={Logo} alt="Logo" />
            </Link>
          </div>
          <form onSubmit={SearchProduct} className="search relative flex items-center gap-3">
            <input
              className="text-[12px] lg:text-sm placeholder:text-gray-400 border border-gray-400 rounded-sm p-1 mr-6 focus:outline-none outline-none md:w-[250px] lg:max-w-[250px] w-[150px] sm:w-[250px]"
              type="text"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              placeholder="Search"
            />
            {results.length > 0 && searchClicked ? (
              <div className="absolute top-10 rounded-md border left-[-20px] bg-white z-[1000] w-[200px] min-h-[100px]">
                <div className="flex flex-col">
                  {results.map((result: Product) => (
                    <Link onClick={() => setSearchClicked(false)} key={result.id} to={`/categories/${result.categoryId}/${result.subCategoryId}/${result.id}`}>
                      <div className="flex justify-start p-1 gap-2">
                        <div className="w-[60px] h-[70px] flex">
                          <img src={result.image[0]} className="h-[70px] w-[60px] object-cover" alt={result.name} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-[12px] font-semibold">{result.name}</h2>
                          <h2 className="text-[10px]">{result.blendRatio}</h2>
                        </div>
                      </div>
                      <hr />
                    </Link>
                  ))}
                </div>
              </div>
            ) : results.length === 0 && searchClicked ? (
              <div className="absolute top-10 rounded-md border left-[-20px] bg-white z-[1000] w-[200px] min-h-[20px] flex items-center justify-center">
                <h2 className="text-[12px] font-semibold">No Results Found</h2>
              </div>
            ) : null}
            <button type="submit" className="absolute right-8">
              <img className="h-4" src={Search} alt="Search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MobileNav;