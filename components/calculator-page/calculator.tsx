import React from "react";
import CalculatorKey from './calculator-key'
import "../../scss/main.scss";

const numbers = "1234567890".split("");
const operations = "+-*/".split("");
const specialOperations = ["CLR", "="];

interface CalculatorState {
    display: number;
    total: number;
    pendingOperation: string;
    continueInput: boolean;
}

class CalculatorComponent extends React.Component<{}, CalculatorState> {
    constructor(props) {
      super(props);
      this.state = {
        display: 0,
        total: 0,
        pendingOperation: "+",
        continueInput: true
      };
    }
    
    calculateNewTotal = () => {
      const { total, display, pendingOperation } = this.state;
      console.log(`${total}${pendingOperation}${display}`)
      return eval(`${total}${pendingOperation}${display}`);
    }
  
    clearHistory = (maintainDisplay = false) => {
      let newDisplay = 0;
      if (maintainDisplay) {
        newDisplay = this.calculateNewTotal();
      }
      
      this.setState({
        display: newDisplay,
        pendingOperation: "+",
        total: 0,
        continueInput: false
      });
    };
  
    handleKeyPress = key => {
      const { total, display, pendingOperation, continueInput } = this.state;
  
      if (Number.isInteger(+key)) {
        const newDisplay = continueInput ? display + key : key;
        this.setState({
          display: +newDisplay,
          continueInput: true
        });
      } else if (specialOperations.includes(key)) {
        this.clearHistory(key === '=');
      } else {
        const newTotal = this.calculateNewTotal();
        this.setState({
          display: newTotal,
          pendingOperation: key,
          total: newTotal,
          continueInput: false
        });
      }
    };
  
    render() {
      const { display } = this.state;
  
      return (
        <div className="calculator">
          <div className="calculator__display">{display.toString().slice(0,10)}</div>
          <div className="calculator__main-keys">
            <div className="calculator__number-keys">
              {numbers.map(number => (
                <CalculatorKey symbol={number} keyPressHandler={this.handleKeyPress} />
              ))}
            </div>
            <div className="calculator__operation-keys">
              {operations.map(symbol => (
                <CalculatorKey symbol={symbol} keyPressHandler={this.handleKeyPress} />
              ))}
            </div>
          </div>
          <div className="calculator__special-keys">
            {specialOperations.map(symbol => (
              <CalculatorKey symbol={symbol} keyPressHandler={this.handleKeyPress} />
            ))}
          </div>{" "}
        </div>
      );
    }
  }

export default CalculatorComponent;
