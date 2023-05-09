// import { Stack, Box } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import Style from './PagePagination.module.css';
// import { ReactPaginate } from 'react-paginate';
// import ToursCard from '../ToursCard/ToursCard' ;



// export default function PagePagination(props) {
//     const { data } = props;
//     const [currentItems , setCurrentItems] = useState([]) ;
//     const [pageCount , setPageCount] = useState(0)
//     const [itemOffset, setItemOffset] = useState(0);
//     const itemsPerPage = 6;

//     useEffect( () => {
//         const endOffset = itemOffset + itemsPerPage;
//         setCurrentItems = data.slice(itemOffset, endOffset);
//         setPageCount = Math.ceil(data.length / itemsPerPage) ;
//     } , [itemOffset , itemsPerPage , data])
   

//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % data.length;
//         setItemOffset(newOffset);
//     };

//     return (
//         <Stack>
//             <Box>
//                 {currentItems.map((value) => {
//                     return(
//                         <Box>
//                             <img src={value.url} alt={value.title} />
//                             {/* <ToursCard /> */}
//                         </Box>
//                     )
//                 })}
//             </Box>

//             <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={3}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 renderOnZeroPageCount={null}
//                 containerClassName = "pagination"
//                 pageLinkClassName = "page-num"
//                 previousLinkClassName = "page-num"
//                 nextLinkClassName = "page-num"
//                 activeLinkClassName = "active"
//             />
//         </Stack>
//     );
// }
