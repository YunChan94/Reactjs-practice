import { Component } from "react";

// Chỉ có thể build error boundary bằng class component
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    return this.props.children;
  }
}
export default ErrorBoundary;
