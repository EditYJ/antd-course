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

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard
      };
      dispatch(action);
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
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
        <div>
          <Button 
            onClick={
              ()=>{
                this.props.onClickAdd({
                  setup: "(｡･∀･)ﾉﾞ嗨，你叫什么名字?",
                  punchline: "我叫贺晓明。"
                })
              }
            }
          >添加</Button>
        </div>
      </div>
    );
  }
}
