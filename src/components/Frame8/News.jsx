import React from 'react'
import './News.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const News = () => {
  return (
    <>
    <h1 className='text-center mt-5'>NEWS</h1>
    <div>
    <Container>
      <Row>
        <Col>
        <div className='news-img1'>
            <img src="pic1.jpg" alt="" className='news-img1' />
            <p className='news-content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum voluptate ipsam aut earum officia consequuntur dolorem quas magni fugit!</p>
        </div>
        </Col>
        <Col>
        <div className='news-img1'><img src="pic1.jpg" alt="" className='news-img1' />
        <p className='news-content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum voluptate ipsam aut earum officia consequuntur dolorem quas magni fugit!</p>
        </div></Col>
        <Col>
        <div className='news-img1'><img src="pic1.jpg" alt="" className='news-img1' />
        <p className='news-content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum voluptate ipsam aut earum officia consequuntur dolorem quas magni fugit!</p>
        </div></Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default News
