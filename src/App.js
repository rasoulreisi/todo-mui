import React from 'react';
import {AddTodo, ListTodos} from "./components";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const App = () => {

  return (
      <Provider store={store}>
        <div>
          <ListTodos/>
          <AddTodo/>
          <ToastContainer/>
        </div>
      </Provider>
  );
};

export default App;