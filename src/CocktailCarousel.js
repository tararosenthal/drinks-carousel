import { Carousel } from 'react-carousel-minimal';

function CocktailCarousel(props) {
  console.log(props);
 const data = [];

  function populateData() {
    for (const slide of props.slides) {
      data.push({image: slide.getImage(),
        caption: `<div>${slide.getName()}<br />${slide.getInstructions()}</div>`})
    }
  }

  populateData();

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

    return (
      <div className="CocktailCarousel">
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={4000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    );
}

export default CocktailCarousel;
