import Layout from "@/components/Layout";
export default function Settings({ children }) {
  return (
    <Layout>
      <div>
        <h1>Settings</h1>
        {children}
      </div>
    </Layout>
  );
}
