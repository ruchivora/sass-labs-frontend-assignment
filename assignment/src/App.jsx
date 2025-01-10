import './App.css';
import { useState } from 'react';
import { Table } from './components/Table/Table';
import { useFetch } from './hooks/useFetch';
import { Pagination } from './components/Pagination/Pagination';

const url = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
const columns = ["S.No", "Percentage Funded", "Amount Pledged"];

function App() {

  const {data, loading, error} = useFetch(url);
  const [currentPageNo, setCurrentPageNo] = useState(1);

  const totalElements = data?.length || 0;
  const elementsPerPage = 5;
  const currentPageData = data?.slice((currentPageNo - 1) * elementsPerPage, currentPageNo * elementsPerPage);

  function handlePageChange(pageNo) {
    setCurrentPageNo(pageNo);
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return (
      <div>Error: {error.message}</div>
    )
  }

  return (
    <>
      <h2>Highly-Rated Kickstarter Projects</h2>
      <Table 
        data={currentPageData} 
        columns={columns}/>

      <Pagination 
        totalElements={totalElements} 
        currentPage={currentPageNo} 
        onPageChange={handlePageChange}/>
    </>
  )
}

export default App
