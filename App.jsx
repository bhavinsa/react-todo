import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
      i: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }



  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleSubmit(event) {

    if (this.state.value != undefined && this.state.value != '') {
      var item = {
        "item": this.state.value,
        "key": this.state.i
      }
      this.setState({ i: this.state.i + 1 });
      this.state.data.push(item);
      this.setState({ value: '' });

    }
    event.preventDefault();
  }

  remove(event) {
    const id = event.target.id;
    const remainder = this.state.data.filter((todo) => {
      if (todo.key != id) {
        return true;
      }
    });
    this.setState({ data: remainder });
  }

  render() {
    const List = ({ todoList }) => {
      const liNode = todoList.map((item) => {
        return (<li className="list-group-item list-group-item-success"> {item.item}
          <span className="floatRight">
            <button type="button" className="close" id={item.key} onClick={this.remove}> &times; </button>
          </span></li>)
      });

      return (<ul className="list-group list"> {liNode} </ul>)
    }

    return (
      <div className="container maincls">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Add todo here" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <List todoList={this.state.data} />
        </form>
      </div>
    );
  }
}

export default App;
