import Layout from "@/components/Layout";
export default function Orders({ children }) {
  return (
    <Layout>
      <div>
        <h1>Orders</h1>
        {children}
      </div>
    </Layout>
  );
}
