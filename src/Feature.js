import React, {Component} from 'react';
import './App.css'

class Feature extends Component{
    render(){
    console.log(`this is the props in features`,this.props.features)
    const features = Object.keys(this.props.features).map(key => {
        console.log(`this is features[key]`,this.props.features[key]);
        const options = this.props.features[key].map((item, index) => {
          console.log(`this is options`,item.name)
          console.log(`this is features[key]name`,this.props.features[key].name)
          let selectedClass =
            item.name === this.props.features[key].name
              ? "feature__selected"
              : "";
          const featureClass = "feature__option " + selectedClass;
  
          return (
            <li key={index} className="feature__item">
              <div
                className={featureClass}
                onClick={e => {
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
        
        return(
            <div>
                {features}
            </div>
        )
    }
}
export default Feature