import { React, useEffect, useRef, useState } from "react";
import Searchbar from "../component/Searchbar";
import { Photoapi } from "../services/Photoapi";
import "./photosExplorer.css";
import Footer from "../footer/footer";

const PhotosExplorer = () => {
  const [photoDetails, setPhotoDetails] = useState([]);
  const [natureCardVisibility, setNatureCardVisibility] = useState();
  const [animalCardVisibility, setAnimalCardVisibility] = useState();
  const [flowersCardVisibility, setFlowersCardVisibility] = useState();
  const [countriesCardVisibility, setCountriesCardVisibility] = useState();
  const [vehicalCardVisibility, setVehicalCardVisibility] = useState();
  const [worshipCardVisibility, setWorshipCardVisibility] = useState();
  const [placeCardVisibility, setPlaceCardVisibility] = useState();
  const natureCardRef = useRef(null);
  const animalCardRef = useRef(null);
  const flowersCardRef = useRef(null);
  const countriesCardRef = useRef(null);
  const vehicalCardRef = useRef(null);
  const worshipCardRef = useRef(null);
  const placeCardRef = useRef(null);
  

  const ApiCall = (photoName) => {
    Photoapi.get("/search/photos", {
      params: {
        query: photoName,
        per_page: 12,
      },
    }).then((res) => {
      const d = res.data;

      const ImageURLs = d?.results.map((item) => {
        return item.urls.small;
      });
//image urls being updated in state
      setPhotoDetails(ImageURLs);
    });
  };

  useEffect(() =>{
    const natureCardObserver = new IntersectionObserver((entries) => {
      const entry1 = entries[0]
      setNatureCardVisibility(entry1.isIntersecting)
    })
    const animalsCardObserver = new IntersectionObserver((entries) => {
      const entry2 = entries[0]
      setAnimalCardVisibility(entry2.isIntersecting)
    })
    const flowersCardObserver = new IntersectionObserver((entries) => {
      const entry3 = entries[0]
      setFlowersCardVisibility(entry3.isIntersecting)
    })
    const countriesCardObserver = new IntersectionObserver((entries) => {
      const entry4 = entries[0]
      setCountriesCardVisibility(entry4.isIntersecting)
    })
    const vehicalCardObserver = new IntersectionObserver((entries) => {
      const entry5 = entries[0]
      setVehicalCardVisibility(entry5.isIntersecting)
    })
    const worshipCardObserver = new IntersectionObserver((entries) => {
      const entry6 = entries[0]
      setWorshipCardVisibility(entry6.isIntersecting)
    })
    const placeCardObserver = new IntersectionObserver((entries) => {
      const entry7 = entries[0]
      setPlaceCardVisibility(entry7.isIntersecting)
    })

    natureCardObserver.observe(natureCardRef.current)
    animalsCardObserver.observe(animalCardRef.current)
    flowersCardObserver.observe(flowersCardRef.current)
    countriesCardObserver.observe(countriesCardRef.current)
    vehicalCardObserver.observe(vehicalCardRef.current)
    worshipCardObserver.observe(worshipCardRef.current)
    placeCardObserver.observe(placeCardRef.current)

  },[])
   


  return (
    <div className="mainBody">
      <div className="mainContainer" id="result">
        <div className="logo">
          <h1>PHOTOS <br />EXPLORER</h1>
        </div>
        <Searchbar placeHolder={"search photos"} handleSelect={ApiCall} />
        {photoDetails.length !== 0 ? (
          <div className="imgOrder">
            {photoDetails.length !== 0 ? (
              photoDetails.map((url) => {
                return (
                  <div className="imgPallet">
                    <img className="imgStyle" src={url} />
                  </div>
                );
              })
            ) : (
              <h3>No Images Found</h3>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div>
        <div  className="nature">
          <h2 className="title">NATURE</h2>
          
          <div ref={natureCardRef} 
        className={`cards-pallet ${natureCardVisibility && "scale-Up"}`}>
            <a href="#result">
              <div
                className="card"
                onClick={() => {
                  ApiCall("forest");
                  setPhotoDetails("");
                }}
              >
                <div className="forest-pic"></div>
                <div className="name">Forest</div>
              </div>
            </a>

            <a href="#result">
              <div
                className="card"
                onClick={() => {
                  ApiCall("sea");
                  setPhotoDetails("");
                }}
              >
                <div className="sea-pic"></div>
                <div className="name">Sea</div>
              </div>
            </a>

            <a href="#result">

            <div className="card"
                onClick={() => {
                  ApiCall("fire");
                  setPhotoDetails("");
                }}
            >
              <div className="fire-pic"></div>
              <div className="name">Fire</div>
            </div>

            </a>    
           
            <a href="#result">
            <div className="card"
               onClick={() => {
                ApiCall("sky");
                setPhotoDetails("");
              }}
            >
              <div className="sky-pic"></div>
              <div className="name">Sky</div>
            </div>
            </a>
            
          </div>
        </div>
        <div  className="animals">
          <h2 className="title">ANIMALS</h2>

          <div ref={animalCardRef} 
          className= {`cards-pallet ${animalCardVisibility && "scale-Up"}`}>
          <a href="#result">
          <div className="card"
             onClick={() => {
              ApiCall("lion");
              setPhotoDetails("");
            }}
          >
              <div className="lion-pic"></div>
              <div className="name">Lion</div>
            </div>
          </a>
            
            <a href="#result">
            <div className="card"
               onClick={() => {
                ApiCall("tiger");
                setPhotoDetails("");
              }}
            >
              <div className="tiger-pic"></div>
              <div className="name">Tiger</div>
            </div>
            </a>
            
            <a href="#result">
            <div className="card"
               onClick={() => {
                ApiCall("eagle");
                setPhotoDetails("");
              }}
            >
              <div className="eagle-pic"></div>
              <div className="name">Eagle</div>
            </div>
            </a>
           
            <a href="#result">
            <div className="card"
               onClick={() => {
                ApiCall("sparrow");
                setPhotoDetails("");
              }}
            >
              <div className="sparrow-pic"></div>
              <div className="name">Sparrow</div>
            </div>
            </a>
          
          </div>
        </div>
        <div  className="flowers">
          <h2 className="title">FLOWERS</h2>

          <div ref={flowersCardRef} 
          className= {`cards-pallet ${flowersCardVisibility && "scale-Up"}`}>
            <a href="#result">
            <div className="card"
              onClick={() => {
                ApiCall("rose");
                setPhotoDetails("");
              }}
            >
              <div className="rose-pic"></div>
              <div className="name">Rose</div>
            </div>
            </a>
           
            <a href="#result">
            <div className="card"
                onClick={() => {
                  ApiCall("lotus");
                  setPhotoDetails("");
                }}
            >
              <div className="lotus-pic"></div>
              <div className="name">Lotus</div>
            </div>
            </a> 
          
            <a href="#result">
            <div className="card"
              onClick={() => {
                ApiCall("jasmine");
                setPhotoDetails("");
              }}
            >
              <div className="jas-pic"></div>
              <div className="name">Jasmine</div>
            </div>
            </a>
           
            <a href="#result">
            <div className="card"
                onClick={() => {
                  ApiCall("sun flower");
                  setPhotoDetails("");
                }}
            >
              <div className="sun-pic"></div>
              <div className="name">Sun Flower</div>
            </div>
            </a>
        
          </div>
        </div>
        <div  className="countries">
          <h2 className="title">COUNTRIES</h2>

          <div ref={countriesCardRef} 
          className= {`cards-pallet ${countriesCardVisibility && "scale-Up"}`}>

          <a href="#result">
          <div className="card"
             onClick={() => {
                  ApiCall("india");
                  setPhotoDetails("");
                }}
          >
              <div className="ind-pic"></div>
              <div className="name">India</div>
            </div>
          </a>
          <a href="#result">
          <div className="card"
             onClick={() => {
                  ApiCall("usa");
                  setPhotoDetails("");
                }}
          >
              <div className="usa-pic"></div>
              <div className="name">USA</div>
            </div>
          </a>
           
          <a href="#result">
          <div className="card"
             onClick={() => {
                  ApiCall("england");
                  setPhotoDetails("");
                }}
          >
              <div className="uk-pic"></div>
              <div className="name">UK</div>
            </div>
          </a>
           
          <a href="#result">
          <div className="card"
             onClick={() => {
                  ApiCall("russia");
                  setPhotoDetails("");
                }}
          >
              <div className="rus-pic"></div>
              <div className="name">Russia</div>
            </div>
          </a>
            
          </div>
        </div>
        <div className="vehicle">
          <h2 className="title">VEHICLE</h2>

          <div ref={vehicalCardRef}  
          className= {`cards-pallet ${vehicalCardVisibility && "scale-Up"}`}>
            <a href="#result">
              <div className="card"
                 onClick={() => {
                  ApiCall("car");
                  setPhotoDetails("");
                }}
              >
              <div className="car-pic"></div>
              <div className="name">Car</div>
            </div>
            </a>
           
            <a href="#result">
              <div className="card"
                 onClick={() => {
                  ApiCall("motor bike");
                  setPhotoDetails("");
                }}
              >
              <div className="bike-pic"></div>
              <div className="name">Bike</div>
            </div>
            </a>
            
            <a href="#result">
              <div className="card"
                 onClick={() => {
                  ApiCall("airplane");
                  setPhotoDetails("");
                }}
              
              >
              <div className="airplane-pic"></div>
              <div className="name">Airplane</div>
            </div>
            </a>
            
            <a href="#result">
              <div className="card"
                 onClick={() => {
                  ApiCall("train");
                  setPhotoDetails("");
                }}
              >
              <div className="train-pic"></div>
              <div className="name">Train</div>
            </div>
            </a>
           
          </div>
        </div>
        <div  className="worship_place">
          <h2 className="title">WORSHIP PLACE</h2>

          <div ref={worshipCardRef} 
          className={`cards-pallet ${ worshipCardVisibility && "scale-Up"}`}>
            <a href="#result">
              <div className="card"
                  onClick={() => {
                  ApiCall("hindu temple");
                  setPhotoDetails("");
                }}
              >
              <div className="temple-pic"></div>
              <div className="name">Temple</div>
            </div>
            </a>
            
            <a href="#result">
              <div className="card"
                  onClick={() => {
                  ApiCall("church");
                  setPhotoDetails("");
                }}
              >
              <div className="church-pic"></div>
              <div className="name">Church</div>
            </div>
            </a>
          
            <a href="#result">
              <div className="card"
                  onClick={() => {
                  ApiCall("masjid");
                  setPhotoDetails("");
                }}
              >
              <div className="mas-pic"></div>
              <div className="name">Masjid</div>
            </div>
            </a>
           
            <a href="#result">
              <div className="card"
                  onClick={() => {
                  ApiCall("buddhist temple");
                  setPhotoDetails("");
                }}
              >
              <div className="bud-pic"></div>
              <div className="name">Buddhist</div>
            </div>
            </a>
           
          </div>
        </div>
        <div  className="places">
          <h2 className="title">PLACES</h2>

          <div ref={placeCardRef} 
          className={`cards-pallet ${ placeCardVisibility && "scale-Up"}`}>
            <a href="#result">
              <div className="card"
                   onClick={() => {
                  ApiCall("city");
                  setPhotoDetails("");
                }}
              >
              <div className="city-pic"></div>
              <div className="name">City</div>
            </div>
            </a>
           
            <a href="#result">
              <div className="card"
                   onClick={() => {
                  ApiCall("village");
                  setPhotoDetails("");
                }}
              >
              <div className="village-pic"></div>
              <div className="name">Village</div>
            </div>
            </a>
            
            <a href="#result">
              <div className="card"
                   onClick={() => {
                  ApiCall("slum");
                  setPhotoDetails("");
                }}
              >
              <div className="slum-pic"></div>
              <div className="name">Slum</div>
            </div>
            </a>
           
            <a href="#result">
              <div className="card"
                   onClick={() => {
                  ApiCall("tribe");
                  setPhotoDetails("");
                }}
              >
              <div className="tribe-pic"></div>
              <div className="name">Tribe</div>
            </div>
            </a>
           
          </div>
        </div>
        
      </div>
      <div className="footer-container">
      <Footer />
      </div>
      
      
    </div>
  );
};
export default PhotosExplorer;
