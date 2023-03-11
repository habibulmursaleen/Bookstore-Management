import { Provider } from "react-redux";
import BookForm from "./components/BookForm";
import NavBar from "./components/NavBar";
import BookList from "./components/bookList/BookList";
import store from "./redux/store";
import "./styles/style.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList />
            <BookForm />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
