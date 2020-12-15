import React from 'react';

// configuration object
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake outline'
  }
}

function getSeason(lat, month) {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summmer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  // console.log(props);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
  // const iconName = season === 'winter' ? 'snowflake outline' : 'sun';

  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{ text }</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay;