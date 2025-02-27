import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
const App = () => {
  return (
    <div className="w-full h-screen" style={{ textAlign: "center" }}>
      <Header title="React Props Demo" />
      <main className="mt-8 h-[40vh] flex items-center flex-col justify-center">
        <h2>Welcome to the React Props Example!</h2>
        <p>This demonstrates passing props from parent to child components.</p>
      </main>
      <Footer copyright="© 2025 MyReactApp. All rights reserved." />
    </div>
  );
};
export default App;
