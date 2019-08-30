import { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace].data;
  return {
    cardList
  };
};


@connect(mapStateToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {this.props.cardList.map(card => {
          return (
            <Card key={card.id} style={{ margin: "8px 0px" }}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        {/* <div>
          <Button onClick={this.addNewCard}>添加</Button>
        </div> */}
      </div>
    );
  }
}
