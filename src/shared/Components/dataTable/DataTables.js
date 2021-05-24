import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ProductService from "../../../services/Sevices";
import "./DataTables.css";

const DataTables = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then((data) => setProducts(data));
    setLoader(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="container data-radius">
        <DataTable value={products} loading={loader}>
          <Column field="userId" header="userId"></Column>
          <Column field="id" header="Id"></Column>
          <Column field="title" header="Title"></Column>
          <Column field="body" header="Body"></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default DataTables;
