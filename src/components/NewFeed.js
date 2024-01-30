import React, { useEffect, useState } from "react";
import { loadAllPost } from "../services/post-service";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Post from "./Post";
import { toast } from "react-toastify";


const NewFeed = () => {
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });



  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    
        loadAllPost(0,5)
          .then((data) => {
            setPostContent(data);
          })
          .catch((error) => {
            console.log(error);
          });
    

       // loadAllPost(pageNumber,pageSize);
     
  }, []);


const changePage=(pageNumber=0,pageSize=5)=>{


    loadAllPost(pageNumber,pageSize).then((data)=>{

        console.log(data)
        setPostContent(data)
       // window.scroll(0,0)
    }).catch((error)=>{

        console.log(error);
        toast.success("error in loading post")
    })
}


//   const changePage = (pageNumber = 0, pageSize = 5) => {
//     if (pageNumber > postContent.pageNumber && postContent.lastPage) {
//       return;
//     }
//     if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
//       return;
//     }
//   };


  return (
    <div className="container-fluid">
      <Row>
        <Col
          md={{
            size: 10,
            offset: 1,
          }}
        >
          <h1>Blog Count {postContent.totalElements}</h1>

          {postContent.content.map((post) => (
            <Post post={post} key={post.postId}></Post>
          ))}


          <Pagination >
            <PaginationItem disabled={postContent.pageNumber == 0}>
              <PaginationLink previous href="#" onClick={()=>changePage(--postContent.pageNumber)} >Previous</PaginationLink>
            </PaginationItem>

            {[...Array(postContent.totalPages)].map((item, index) => (


              <PaginationItem onClick={()=>changePage(index)}  key={index} active={index==postContent.pageNumber} >
                <PaginationLink href="#">{index + 1}</PaginationLink>
              </PaginationItem>
            ))}


            <PaginationItem  disabled={postContent.lastPage} >
           
              <PaginationLink last href="#" onClick={()=>changePage(++postContent.pageNumber)}  >Next</PaginationLink>
              
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default NewFeed;
