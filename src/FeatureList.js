import React from "react";
import Feature from './Feature'
import "./App.css";
class FeatureList extends React.Component {
  render() {
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <Feature features={this.props.features}
        selected={this.props.selected}
        updateFeature={this.props.updateFeature}/>
      </section>
    );
  }
}

export default FeatureList;
