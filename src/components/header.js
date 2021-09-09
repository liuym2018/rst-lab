import './components.css';
import MeanuItems from './menuItem';
import { useState } from 'react';

const Header = () => {
    const meanuItems = [
        {
            name: "Search",
            value: "Search"
        },
        {
            name: "History",
            value: "History"
        }
    ];

    const [activedIndex, setActivedIndex] = useState(0);

    function isClicked(index) {
        setActivedIndex(index);
    };

    return <div className="header">
        <div className="MenuItems">
            <ul>
                {
                    meanuItems.map((item, i) => {
                        return <MeanuItems
                            key={item.name}
                            name={item.name}
                            value={item.value}
                            index={i}
                            isActive={activedIndex === i}
                            onClick={isClicked}
                        />
                    })
                }
            </ul>
        </div>
    </div>
}


export default Header;