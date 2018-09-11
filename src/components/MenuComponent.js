import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            comments:null,
        }
    }

    onDishSelect(dish,comments) {
        this.setState({ selectedDish: dish,comments:comments});
         console.log(comments);
    }
    getComments(comments){
          const commentArray = [];
            for (var i = 0; i < comments.length; i++) {
               commentArray.push(<CardText>{comments[i].comment}</CardText>);
               commentArray.push(<CardText>{comments[i].author}</CardText>);
               commentArray.push(<CardText>{comments[i].date}</CardText>);
            }
            return commentArray;
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(comments) {
        if (comments != null)
            return (
                <Card className="p-2">
                    <CardTitle>Comments</CardTitle>
                    <CardText>{comments[0].comment}</CardText>
                    <CardText>{"---"+comments[0].author+" ,"+comments[0].date}</CardText>
                    <CardText>{comments[1].comment}</CardText>
                    <CardText>{"---"+comments[1].author+" ,"+comments[1].date}</CardText>
                    <CardText>{comments[2].comment}</CardText>
                    <CardText>{"---"+comments[2].author+" ,"+comments[2].date}</CardText>
                    <CardText>{comments[3].comment}</CardText>
                    <CardText>{"---"+comments[3].author+" ,"+comments[3].date}</CardText>
                    <CardText>{comments[4].comment}</CardText>
                    <CardText>{"---"+comments[4].author+" ,"+comments[4].date}</CardText>

                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish,dish.comments)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
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
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.comments)}
                  </div>
                </div>
            </div>
        );
    }
}


export default Menu;
