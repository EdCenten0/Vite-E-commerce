import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { apiUrl } from "../../api/api";
import { ProductDetail } from "../../components/ProductDetail/index";
import { CheckOutSideMenu } from "../../components/CheckOutSideMenu";
import { ShoppingCartContext } from "../../contexts";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchTitleBar?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {context.filteredItems?.map((item) => {
              return <Card data={item} key={item.id} />;
            })}
          </div>
        );
      } else {
        return <div>Nothing related :(</div>;
      }
    } else {
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.items?.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      );
    }
  };
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center  relative w-80 mb-4">
          Home
        </div>
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(event) => context.setSearchTitleBar(event.target.value)}
        />
        {renderView()}
        <ProductDetail></ProductDetail>
      </Layout>
    </>
  );
}

export default Home;
