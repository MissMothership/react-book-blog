import React, { ReactElement } from 'react';


const Header = (): ReactElement => {

    // define header styles
    const image = 'https://wallpapercave.com/wp/wp3537970.jpg'
    const headerStyle = {
        background: 'linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(' + image + ') no-repeat center center',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
    };

    return (
        <>
            <header style={headerStyle} className='ui inverted vertical masthead center aligned segment'>
                <div className="ui container">
                    <div className="ui center aligned container">
                        <h1 className="ui top mt-3">Miss Motherships Books Club</h1>
                        <h3 className="ui bottom 3-mt">Headline</h3>
                    </div>
                </div>
            </header>


        </>
    );
};

Header.defaultProps = {
    height: '100%',
    image: 'https://wallpapercave.com/wp/wp3537970.jpg'
};

export default Header;