// function for loader
function Loader(){
  
}

// function for cards
function Card(props){
  return(
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <img src={props.src} alt={props.title}></img>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>My react app</h1>
      <Card src="https://www.hindustantimes.com/ht-img/img/2023/10/30/550x309/Toge_Inumaki_1698679014859_1698679033339.jfif" title="Inumaki Toge"/>
      <Card title ="Kugisaki Nobara" src="https://staticg.sportskeeda.com/editor/2022/10/53080-16654550806994-1920.jpg?w=840"/>
      <Card title="Itsuomi Nagi" src="https://pbs.twimg.com/media/EQ3iTieUwAAtm_h.jpg"/>
    </div>
  );
}

export default App;
