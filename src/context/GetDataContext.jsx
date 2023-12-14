import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GetDataContext = createContext();

export const GetDataProvider = ({ children, initialArray }) => {
    const [data, setData] = useState(initialArray);

    useEffect(() => {
      const fetchData = async () => {
        // console.log(import.meta.env.VITE_API_URL);
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
          // console.log(result)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);



    // console.log(data);

    return (
        <GetDataContext.Provider value={{ data }}>
            {children}
        </GetDataContext.Provider>
    );
};

GetDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialArray: PropTypes.array.isRequired,
};

GetDataProvider.defaultProps = {
    initialArray: [
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
        {title: "tututu", body: "lalala", image: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"},
    ],
    
};