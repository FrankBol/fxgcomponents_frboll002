import Button from 'react-bootstrap/Button';
import {Card as CardComp} from 'react-bootstrap';
import PropTypes from 'prop-types';



export const Card = ({width, img, textTitle, textBody }) => {

  return (
    <>
      <CardComp style={{ width: `${width}`}}>
       <CardComp.Img variant="top" src={img}/>
        <CardComp.Body>
          <CardComp.Title>{textTitle}</CardComp.Title>
          <CardComp.Text>
            {textBody}
          </CardComp.Text>
          <Button variant="primary">Go somewhere</Button>
        </CardComp.Body>
      </CardComp>
    </>
  );
}

Card.PropTypes = {
  width: PropTypes.string,
  img: PropTypes.string,
  textBody: PropTypes.string,
  textTitle: PropTypes.string,
}