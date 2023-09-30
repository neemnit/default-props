import MovieList from "./MovieList";
import Navbar from "./NavBar";
import Student from "./Student";
import "./styles.css";
export default function App() {
  return (
  
  <div className="">
    <Navbar/>
    {/* <Student name="Alexa"/>
    <Student name="Siri"  marks={34}/> */}
    <MovieList/>
  
  </div>
  )
}
Student.defaultProps={
  marks:"stu"
}
