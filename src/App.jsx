
import mockApiData from "./components/Timeline/mockApiData";
import Timeline from "./components/Timeline/Timeline";
function App() {

  const question = "What is the capital of France?";
  const options = ["Paris", "Berlin", "London", "Madrid"];
  const correctAnswer = "Paris";
  const explanation = "The capital of France is Paris.";

  

  return (
    <div className="">
      <Timeline questions={mockApiData} />
    </div>
   

  
  )
}

export default App
