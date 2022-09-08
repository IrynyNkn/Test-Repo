import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {

  return (
    <div className="container app-wrapper">
        <div className="content">
            <NavBar />
            <Header />
        </div>
        <div className="bg-element">
            <div className="bg-wrapper">
                <img className="img-main" src="/bg.png" alt="background"/>
                <img className="wave-icon" src="/wave-icon.svg" alt="Wave icon"/>
                <img className="circle-icon" src="/circle-icon.svg" alt="Circle icon"/>
                <img className="arrow-icon" src="/arrow-icon.svg" alt="Arrow icon"/>
                <img className="dots-icon" src="/dots-icon.svg" alt="Dots icon"/>
                <img className="curve-icon" src="/curve-line-icon.svg" alt="Curve"/>
                <img className="dotted-curve-icon" src="/dotted-curve-icon.svg" alt="Dotted curve"/>
                <img className="dashed-curve-icon" src="/dashed-curve-icon.svg" alt="Dashed curve"/>
                <img className="knotted-line-icon" src="/knotted-line.svg" alt="Knotted line"/>
            </div>
        </div>
    </div>
  )
}

export default App
