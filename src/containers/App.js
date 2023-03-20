import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchInput from '../components/SearchInput';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await resp.json();
      setRobots(data);
    }

    fetchData();
  }, []);

  const searchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchValue.toLowerCase()));

  return !robots.length ? <h1 className='tc f1'>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchInput searchChange={searchChange} />
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    )
}

export default App