import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading';
import HomePro from './HomePro';

const Home = () => {
    const { isLoading, error, data: contacts } = useQuery('repoResult', () =>
        fetch('https://randomuser.me/api/?results=500').then(res =>
            res.json()
        )
    )
    // console.log(contacts?.results[0]);

    const mainData = contacts?.results;
    // console.log(mainData);
    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='container mb-5'>
            <h1 className='text-center mb-5 fw-bolder' style={{ color: 'orange' }}>All Contact List</h1>
            <div className='row gx-5 gy-5'>
                {
                    mainData.map((data, index) => <HomePro key={index} data={data}></HomePro>)
                }
            </div>
        </div>
    );
};

export default Home;