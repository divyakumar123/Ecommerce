import React, { useState,useEffect,dispatch } from "react";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const Products = () =>{

    const dispatch=useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    const [data, setData] = useState([]);

      useEffect(() => {

         dispatch(fetchProducts());
      }, [dispatch]);
      
      useEffect(() => {
        setData(products);
      }, [products]);

     
      
      const handleFilter=(value)=>{
        const filter=value=="all"?products:products.filter((item)=>item.category===value);
        setData(filter);

      }
      

      
    return (
      
        <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            
            <div className="sidebar">
              <Filter  type={handleFilter} />
              
            </div>
            <div className="main_content">
              <div class="products_iso">
                <div class="row">
                  <div class="col">
                    
                  </div>
                </div>

                <div className="row">
                  {data &&
                    data.map((item, index) => {
                      return (
                        <div
                          className="col-lg-3 col-sm-6"
                          key={index}
                          data-aos="zoom-in"
                        >
                          <SingleProduct
                            productItem={item}
                          />
                        </div>
                      );
                    })}
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default Products;