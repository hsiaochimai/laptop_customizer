import React from "react";
import PriceSummaryList from './PriceSummaryList'
import PriceSummaryTotal from './PriceSummaryTotal'
class PriceSummary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        <PriceSummaryList selected={this.props.selected}/>
        <PriceSummaryTotal selected={this.props.selected}/>
      </section>
    );
  }
}
export default PriceSummary;
