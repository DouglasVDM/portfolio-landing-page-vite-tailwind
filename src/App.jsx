import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  // profileDetails
  const firstName = "Douglas";
  const lastName = "Van Der Merwe";
  const title = "Full Stack Developer";
const stack = "PostgreSQL, ExpressJs, ReactJs, NodeJs";

  return (
    <>
      <div className="px-8 md:px-14 lg:px-36 pb-10 pt-7">
        <Header firstName={firstName} lastName={lastName} />
        <Hero
          firstName={firstName}
          lastName={lastName}
          title={title}
          stack={stack}
        />
      </div>
    </>
  );
}

export default App;
