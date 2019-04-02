import React from "react";
import "./App.css";
class FeatureList extends React.Component {
  render() {
    console.log(`these are the props`, this.props);
    const features = Object.keys(this.props.features).map(key => {
      console.log(this.props.features[key]);
      const options = this.props.features[key].map((item, index) => {
        const selectedClass =
          item.name === this.props.features[key].name
            ? "feature__selected"
            : "";
        const featureClass = "feature__option " + selectedClass;

        return (
          <li key={index} className="feature__item">
            <div
              className={featureClass}
              onClick={e => {
                console.log(`this was clicked`);
                console.log(`name is`, item.name);
                console.log(`price is`, item.cost);
                this.props.updateFeature(key, item);
              }}
            >
              {item.name}(
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(item.cost)}
              )
            </div>
          </li>
        );
      });

      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">{options}</ul>
        </div>
      );
    });

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    );
  }
}

export default FeatureList;
