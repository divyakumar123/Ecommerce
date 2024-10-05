

const Filter = ({type}) =>{
    return (
        <div class="sidebar_section">
          <div class="sidebar_title">
            <h5>Product Category</h5>
          </div>
          <ul class="sidebar_categories">
            <li>
              <a onClick={()=>type("all")} >All</a>
            </li>
            <li >
              <a onClick={()=>type("men's clothing")}>
               
                men's clothing
              </a>
            </li>
            <li>
              <a onClick={()=>type("women's clothing")}>women's clothing</a>
            </li>
            <li>
              <a onClick={()=>type("jewelery")}>jewelery</a>
            </li>
            <li>
              <a onClick={()=>type("electronics")}>electronics</a>
            </li>
           
          </ul>
        </div>
      );
}

export default Filter;