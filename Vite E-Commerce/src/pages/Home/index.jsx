import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { apiUrl } from "../../api/api";

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

  // console.log(items);

  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items?.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export default Home;
