import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }

        console.log('Menu Constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component did mount');
    }

    onDishSelect(dish) {
      this.setState({selectedDish: dish});
    }

    renderDish(dish) {
      if (dish != null) {
        return (
          // <Card>
          //   <CardImg src={dish.image} alt={dish.name} />
          //   <CardBody>
          //       <CardTitle>{dish.name}</CardTitle>
          //       <CardText>{dish.description}</CardText>
          //   </CardBody>
          // </Card>

          <div>
            <DishDetail dish={this.state.selectedDish}/>
          </div>

        );
      }
      else {
        return (
          <div></div>
        );
      }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg width='100%' src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });



        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
              <div  className="col-12 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
          </div>

        );

        // console.log('Menu Render is invoked');
    }
}

export default Menu;
