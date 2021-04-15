
import { render } from '@testing-library/react';
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {

    constructor(){
        super();

        this.state={
            sections: [
                {
                  title: 'Appetizers',
                  imageUrl: 'https://live.staticflickr.com/95/276455203_900469b2ae.jpg',
                  id: 1,
                  linkUrl: 'shop/appetizers'
                },
                {
                  title: 'Fried Rice',
                  imageUrl: 'https://live.staticflickr.com/2391/2153551333_702d874609_b.jpg',
                  id: 2,
                  linkUrl: 'shop/friedrice'
                },
                {
                  title: 'Soup',
                  imageUrl: 'https://live.staticflickr.com/8060/8191470839_d33e84c33c_b.jpg',
                  id: 3,
                  linkUrl: 'shop/soup'
                },
                {
                  title: 'Noodles',
                  imageUrl: 'https://live.staticflickr.com/213/521460259_3017c83773_b.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/noodles'
                },
                {
                  title: 'Seafood',
                  imageUrl: 'https://live.staticflickr.com/4069/4316791101_12de25034e_b.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/seafood'
                }
              ]
        }
    }


render(){

    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(
                    ({title, imageUrl, id, size})=>(
                    <MenuItem key={id} title={title}
                    imageUrl={imageUrl}
                    size={size} 
                    />))
            }
        </div>
    );
}
}

export default Directory;