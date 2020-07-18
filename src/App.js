import React from "react";
import "./styles.css";
import ReactDOM from 'react-dom'


const modalRoot = document.getElementById('another_root')

class App extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div style={{textAlign: 'center', maxWidth: '50%'}}>
        <button
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show}>
            Every UI developer might have faced a scenario where parent css styles gets applied to the children components and this takes up huge amounts of time to come up with a workaround.
            React portals enables the children not to get rendered in same DOM tree as its parent ,hence they are saved from getting css being applied to them forcefully.

        </Modal>
      </div>
    );
  }
}

class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return ReactDOM.createPortal (
            <div >
                <h2>Modal Window</h2>
                <div >{this.props.children}</div>
                <div >
                    <button  onClick={this.onClose}>
                        close
                    </button>
                </div>
            </div>,modalRoot
        );
    }
}


export default App;
