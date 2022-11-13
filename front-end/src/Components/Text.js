<div className='div' >
        <Container className='container d-flex justify-content-center align-items-center'>
        <Row className='align-items-center justify-content-center'>
        <Col className='col-md-8' >
        <Card className=''>
            <Card.Body>
              <Link to='/'><CloseButton className='float-end'/></Link>
              <Card.Title className='mb-3 text-center' style={{fontSize:'2rem'}}>Login</Card.Title>
              <Card.Text>
              <Form>
                <Form.Group className='mb-3'>
                   <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Enter Your Email id OR Username'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Your Password'></Form.Control>
                </Form.Group>
                <Form.Check type='checkbox' label='Remember Me' className='mb-3'></Form.Check>
               
             <Button className='d-grid w-100 mb-3 btn-success' type='submit'>LOGIN</Button> 
             <Link to='#' className='text-center'>Forgot Password?</Link>                                                                 
             </Form>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <p style={{textAlign:'center'}}>
               Don't Have An Account? <Link to='/login'>Login In</Link> 
            </p></Card.Footer>
        </Card>  
        </Col>
        </Row> 
        </Container>     
    </div>