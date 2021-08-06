import {Route,Switch} from "react-router-dom"
import LoginForm from "./Components/LoginForm";
import QuestionPage from "./Components/QuestionPage";
import UserProfile from "./Components/UserProfile";
function App() {
  return (
    <>
    <Switch>
      <Route exact path = "/" component = {LoginForm} / >
      <Route path = "/Questions" component = {QuestionPage} / >
      <Route path = "/userProfile" component = {UserProfile} / >
    </Switch>
   </>
  );
}

export default App;
