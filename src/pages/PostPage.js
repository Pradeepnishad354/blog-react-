import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createComment, loadPost } from "../services/post-service";
import Base from "../components/Base";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import Post from "../components/Post";
import { isLoggedIn } from "../auth";
const PostPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({

    content:""
  });

  useEffect(() => {
    loadPost(postId)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading post");
      });
  }, []);


  //create comment
  const submitPost = () => {

    if(!isLoggedIn()){

        toast.error("Need to login first !!")


    }
if(comment.content.trim()===''){

    return ;
}

createComment(comment,post.postId).then(data=>{
    console.log(data)
    toast.success("comment added !!")

    setPost({...post,comments:[...post.comments,data.data]})

    setComment({
        content:""
    })
}).catch((error)=>{

    console.log(error)

   
})



  };

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString();
  };

  return (
    <>
      <Base />
      <div>
        <Container className="mt-2">
          <Link to={"/"}>Home</Link>/{post && <Link to=""> {post.title} </Link>}
          <Row>
            <Col md={{ size: 12 }}>
              <Card>
                {post && (
                  <CardBody>
                    <CardText>
                      Posted By <b>{post.user.email}</b> on{" "}
                      <b>{printDate(post.addedDate)}</b>
                    </CardText>

                    <CardText>
                      <span className="text-muted">
                        Posted Catgeory : {post.category.categoryTitle}
                      </span>
                    </CardText>

                    <div
                      className="divder"
                      style={{
                        width: "100%",
                        height: "1px",
                        background: "#e2e2e2",
                      }}
                    ></div>

                    <h1 className="mt-2">{post.title}</h1>

                    <CardText
                      className="mt-5"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></CardText>

                    <div
                      className="image-container  mt-4 shadow  "
                      style={{ maxWidth: "60%" }}
                    >
                      <img
                        className="img-fluid"
                        src={BASE_URL + "/api/post/image/" + post.imageName}
                        alt=""
                      />
                    </div>
                  </CardBody>
                )}
              </Card>
            </Col>
          </Row>



          <Row>
            <Col
              md={{
                size: 9,
                offset: 1,
              }}
            >
              <h3>Comments ({post ? post.comments.length : 0})</h3>
              {post &&
                post.comments.map((c, index) => (
                  <Card className="mt-4 border-0" key={index}>
                    <CardBody>
                      <CardText>{c.content}</CardText>
                    </CardBody>
                  </Card>
                ))}


                {/* // create comment  */}
              <Card className="mt-4 border-0">
                <CardBody>
                  <Input
                    type="textarea"
                    placeholder="Enter comment here"
                    value={comment.content}
                    onChange={(event) =>
                      setComment({ content: event.target.value })
                    }
                  />

                  <Button onClick={submitPost} className="mt-2" color="primary">
                    Submit
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PostPage;
