const IMAGES = [
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
  "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg",
];

const Login = () => (
  <div>
    <h3>Login to Continue</h3>
    <form>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Login</button>
    </form>
  </div>
);

const Home = () => (
  <div>
    <h3>Welcome to home!</h3>
    <h5>Enjoy this catalog of pictures</h5>
    {IMAGES.map((i) => (
      <img key={i} src={i} />
    ))}
  </div>
);

// create premium account component here

const App = () => {
  // create login status and name variable here

  let IsLoggedIn = true;
  // let name = John!;

  return (
    <>
      {/* render data here */}
      {/* <h1> Hello {name} </h1> */}
      {IsLoggedIn ? <Home /> : <Login />}
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);



<!DOCTYPE html>
<html lang="en">
  <head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <title>React App</title>
    <style>
      img {
        width: 250px;
      }
      button {
        outline: none;
        border: none;
        width: 150px;
        padding: 10px;
        background-color: #f00;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
      }
        
        h2{
            color:white;
            background-color:red;
            display:inline-block;
                
        }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      const IMAGES = [
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557549/assets/yannis-zaugg--7TB_r-NuMo-unsplash_tdmglm.jpg",
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/lino-C2SzUyg3PPQ-unsplash_s8a4tg.jpg",
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1674557550/assets/curioso-photography-QfOhOcrDmvk-unsplash_vgbb3t.jpg",
        "https://res.cloudinary.com/dl26pbek4/image/upload/v1674620718/assets/pexels-garvin-st-villier-3311574_ds8wrh.jpg"
      ];

      const Login = () => (
        <div>
          <h3>Login to Continue</h3>
          <form>
            <input placeholder="email" />
            <input placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      );

      const Home = () => (
        <div>
          <h3>Welcome to home!</h3>
          <h5>Enjoy this catalog of pictures</h5>
          {IMAGES.map((i) => (
            <img key={i} src={i} />
          ))}
        </div>
      );
      
      const Premium = ()=> (
      
       <div>
       <h2>Buy Premium </h2>
        </div>
      )

      const App = () => {
        // Assume you have userLoggedIn and userName variables based on user authentication
        const userLoggedIn = true; // Set to true if the user is logged in
        const userName = "John Doe"; // Provide the user's name

        return (
          <>
            <h1>Hello, {userLoggedIn ? userName : "Guest"}!</h1>
            {userLoggedIn ?<><Premium/> <Home /></> : <Login />}
          </>
        );
      };

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
    </script>
  </body>
</html>