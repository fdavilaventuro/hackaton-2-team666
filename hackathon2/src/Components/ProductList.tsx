import React, { useState, useEffect } from 'react';
import {Item}  from './Item'; 
import Pagination from './Pagination';
import { fetchProducts } from './Fetch';

const ProductList = () => {
  const [products, setProducts] = useState<typeof Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProductsData = async () => {
      const { products, totalPages } = await fetchProducts(currentPage, 10); // Adjust pageSize as needed
      setProducts(products);
      setTotalPages(totalPages);
    };

    fetchProductsData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};