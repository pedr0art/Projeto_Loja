import React, {useState, useContext} from 'react';
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css';
import fetchProducts from '../../../api/fetchProducts';
import AppContext from '../../../context/AppContext';

function SearchBar() {

    const{setProducts, setLoading} = useContext(AppContext)
    const [searchValue, setsearchValue] = useState('');

    

    const handleSearch = async (event) => {
        event.preventDefault()
        setLoading(true)
        const products = await fetchProducts(searchValue);
        setProducts(products)
        setLoading(false)
        setsearchValue(''); 
    }

    return ( 
        <form className='search-bar' onSubmit={handleSearch}>
        <input type="search" 
        value={searchValue}
        placeholder='Buscar produtos'
        className='search__input'
        onChange={({target}) => setsearchValue(target.value)}
        required
        />
        <button type='submit' className='search__button'>
            <BsSearch />
        </button>

    </form>
     );
}

export default SearchBar;