import { Layout } from "../../components/Layout";
import "./styles.css";

function MyAccount() {
  return (
    <>
      <Layout>
        <p className=" m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-2/4 h-3/4 border border-black rounded-lg MyAccount p-8">
          <figure className=" flex items-center justify-center flex-col">
            <p className="mb-5 mt-5 font-medium">Created by:</p>

            <img
              src="https://avatars.githubusercontent.com/u/90741749?v=4"
              alt="EdCenten0"
              className="border border-slate-950 rounded-full"
            />

            <p className="font-bold mt-2 mb-2">
              Carlos Eduardo Chavarria Centeno
            </p>
            <a
              href="https://github.com/EdCenten0"
              className=" font-light  underline"
            >
              @EdCenten0👈
            </a>
          </figure>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
