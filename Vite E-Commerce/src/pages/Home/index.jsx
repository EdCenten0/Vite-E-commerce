import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { apiUrl } from "../../api/api";
import { ProductDetail } from "../../components/ProductDetail/index";
import { CheckOutSideMenu } from "../../components/CheckOutSideMenu";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items?.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    </>
  );
}

export default Home;
