import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  coffeeShops: state.coffeeShops.list,
  library: state.library
})

const CoffeeShopsList = (props) => {
  const { coffeeShops, handleCoffeeShopSelected } = props

  return (      
    <div className='coffeeShops'>
      <h2>Coffee Shops In The Area</h2>
      <ol className='coffeeShopsContainer'>
        {
          coffeeShops.map((results, index) => {
            return (
              <li key={results.id}>
                <button
                  className='coffeeShopButton'
                  type='button'
                  key={results.id}
                  onClick={handleCoffeeShopSelected}
                  
                  value={results.id}>
                    <div className='coffeeShopNumber'><p>{index + 1}</p></div>
                    <div className='coffeeShopText'>
                      <h3>{results.name}</h3>
                      <p>{results.place.properties.street}</p>
                    </div>
                </button>
              </li>
            );
          })
        }
      </ol>
    </div>
  );
};

export default connect(mapStateToProps)(CoffeeShopsList);