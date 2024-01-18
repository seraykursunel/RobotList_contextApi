import "./styles.css";
import { useContext } from "react";
import { RobotContext } from "./context";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <RobotList />
    </Provider>
  );
}

const RobotList = () => {
  const { removeItem, handleSubmit, setValue, robotList, value } = useContext(
    RobotContext
  );

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Generate Robot"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Enter</button>
      <div className="cards">
        {robotList.map((robot) => {
          return (
            <div key={robot} className="card-item">
              <img
                src={`https://robohash.org/${robot}`}
                alt="random robot"
                onClick={() => removeItem(robot)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

//Contex Kullanılmayan Çözüm
// const RobotList = () => {
//   const [robotList, setRobotList] = useState([]);
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(value);

//     setRobotList([
//       ...robotList,
//       { url: `https://robohash.org/${value}`, id: crypto.randomUUID() }
//     ]);
//     setValue("");

//     robotList.map((robot) => {
//       robot?.url === `https://robohash.org/${value}`
//         ? alert("Robot listede bulunmakta")
//         : null;
//     });
//   };

//   const removeItem = (id) => {
//     setRobotList(robotList.filter((robot) => robot.id !== id));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Generate Robot"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Enter</button>
//       <div>
//         {robotList.map((robot) => {
//           return (
//             <div key={robot.id}>
//               <img
//                 src={robot.url}
//                 alt="random robot"
//                 onClick={() => removeItem(robot.id)}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
