import logo from './assets/logo.svg';

function App() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 gap-3 vw-100">
            <div className="d-flex flex-column align-items-center">
                <img src={logo} alt="" className="mb-5"/>
                <a href="#" className='mb-5'>Link to list of examples</a>
                <p className='m-0'>Enter a link:</p>
            </div>
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"
                           placeholder="people/1/"/>
                    <button className="btn btn-outline-primary">Send</button>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">
                        name: Tatooine, <br/>
                        rotation_period: 23, <br/>
                        orbital_period: 304,<br/>
                        diameter: 10465,<br/>
                        climate: arid,<br/>
                        gravity: 1 standard,<br/>
                        terrain: desert,<br/>
                        surface_water: 1,<br/>
                        population: 200000
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
