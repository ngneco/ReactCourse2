import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
          // dish: this.props.selectedDish
        }
    }

    renderDish(dish) {
      if (dish != null) {
        return (
          <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      else {
        return (
          <div></div>
        );
      }
    }

    renderComments(commentsArray) {

      if (commentsArray != null) {
        const comments = commentsArray.map((c) => {
          return (

            // <div key={c.id} className="m-1">
            //   <p>{c.comment}</p>
            // </div>
          let date = new Date(c.date);
          <div>
            <div className="m-1">
              <li>{c.comment}</li>
            </div>
            <div className="m-1">
              <li>--{c.author}, {c.date}</li>
            </div>
          </div>

          );
        });

        return (
          <ul className="list-unstyled">
              {comments}
          </ul>
        );
      }
      else {
        return (
          <div></div>
        );
      }

    }

    render() {


      return (

        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div  className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            {this.renderComments(this.props.dish.comments)}
          {  // <Card>
            //
            //     <CardBody>
            //         <CardTitle> Comments </CardTitle>
            //         <CardText>{comments}</CardText>
            //     </CardBody>
            // </Card>
          }
          </div>
        </div>

      );


    }
}

export default DishDetail;
