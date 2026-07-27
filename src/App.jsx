import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";

function App() {
  return (
    <Layout>
      <Header />
      <ExpenseTable/>
    </Layout>
  );
}

export default App;