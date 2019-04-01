import React from 'react';
class FeatureList extends React.Component{

render(){
  //debugger
  
    const featureKeys = Object.keys(this.props.features)
    console.log(`FeatureKeys is`,featureKeys)
featureKeys.map(key => {
  console.log(`feature object is`,this.props.features[key])
  const options = Object.keys(this.props.features[key]).map((item, index) => {
    const selectedClass = item.name === this.props.features[key].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return <li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => this.updateFeature(key, item)}>
          { item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(item.cost) })
      </div>
    </li>
  });

  return <div className="feature" key={key}>
    <div className="feature__name">{key}</div>
    <ul className="feature__list">
      { options }
    </ul>
  </div>
});       
    return(
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { featureKeys }
          </section>      
    )
}

}
export default FeatureList