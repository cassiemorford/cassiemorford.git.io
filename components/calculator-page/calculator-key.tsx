import React from "react";

interface CalculatorKeyProps {
    symbol: string;
    keyPressHandler: any;
}

class CalculatorKey extends React.Component<CalculatorKeyProps, {}> {
    render() {
      const { symbol, keyPressHandler } = this.props;
      return (
        <button
          className="calculator__key"
          onClick={() => keyPressHandler(symbol)}
        >
          <p>{symbol}</p>
        </button>
      );
    }
  }

export default CalculatorKey;