import { useState, useEffect } from 'react';
import { BASE_URL } from '../global/constant';
import List from './list';
import './components.css';
import React, { useContext } from 'react';
import Context from '../global/context';

const Search = () => {
    const [data, setData] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [searchResult, setsearchResult] = useState("");
    const [optionValue1, setValue1] = useState("All");
    const [optionValue2, setValue2] = useState("Popularity");
    const [optionValue3, setValue3] = useState("All Time");
    const { setValue } = useContext(Context);
    let option1 = [
        {
            name: 'All',
            value: 'ALL',
        },
        {
            name: 'Story',
            value: 'STORY',
        },
        {
            name: 'Commnets',
            value: 'COMMNETS',
        }
    ];
    let option2 = [
        {
            name: 'Popularity',
            value: 'POPULARITY',
        },
        {
            name: 'Date',
            value: 'Date',
        }
    ];
    let option3 = [
        {
            name: 'All Time',
            value: 'ALLTIME',
        },
        {
            name: 'Last 24H',
            value: 'LAST24',
        },
        {
            name: 'Pass Week',
            value: 'PASSWEEK',
        },
        {
            name: 'Pass Month',
            value: 'PASSMONTH',
        },
        {
            name: 'Pass Year',
            value: 'PASSYEAR',
        },
        {
            name: 'Custom range',
            value: 'CUSTOMRANGE',
        }
    ];

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setDataList(result.hits);
                });
    }, []);

    function searchChange(e) {
        setsearchResult(e.target.value);
        let updateList = data.hits;

        updateList = updateList.filter(item => {
            if (item.title) {
                return item.title.toLowerCase().search(
                    e.target.value.toLowerCase()
                ) !== -1;
            } else if (item.author) {
                return item.author.toLowerCase().search(
                    e.target.value.toLowerCase()
                ) !== -1;
            } else {
                return item.url.toLowerCase().search(
                    e.target.value.toLowerCase()
                ) !== -1;
            }
        });

        setDataList(updateList);
    }

    function optionChange1(e) {
        setValue1(e.target.value);
    }

    function optionChange2(e) {
        setValue2(e.target.value);
    }

    function optionChange3(e) {
        setValue3(e.target.value);
    }

    return <div className="container" action='search' >
        <div className="searchFilters">
            <input className="searchBar" type="text" value={searchResult} onChange={searchChange} />
            <button onClick={() => setValue(searchResult)} className="add">Search</button>
        </div>
        <div className="searchFiltersContainer">
            <div className="filter">
                <span>Search: </span>
                <select onChange={optionChange1} value={optionValue1}>
                    {option1.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div><div className="filter">
                <span>by: </span>
                <select onChange={optionChange2} value={optionValue2}>
                    {option2.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div><div className="filter">
                <span>for: </span>
                <select onChange={optionChange3} value={optionValue3}>
                    {option3.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>

        <div className="lists">
            {
                dataList.map((item, index) => {
                    return <List key={index} list={item} />
                })
            }
        </div>
    </div>
}


export default Search;