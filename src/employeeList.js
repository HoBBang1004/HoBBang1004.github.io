import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate, useSearchParams } from "react-router-dom";

// 사원 목록 조회하는 곳 

const EmployeeList = ({employee}) => {

    // console.log(employee);



    const {id} = useParams();

    const navigate = useNavigate();

    const [searchParams, setsearchParams] = useSearchParams();

    const gotoDetail = () => {
        document.location.href="/employeeDetail"
    }
    


    return (

        <div>
            <br/> <br/>
            <h2 style={{textAlign:'center', color:'gray'} }>사원 목록 조회</h2>
            <p style={{textAlign:'center', color:'gray', fontSize:'12px'}}>({employee.length}명의 사원이 있습니다.)</p>

            <Container>
                
            <Row>
                    {
                        employee.map((it, idx) => {
                            return(
                                <Employee employee={employee[idx]}  />
                            )

                        })

                    }


            </Row>

            </Container>

        </div>


    )


} 

function Employee(props){
    return(

    
        <Col sm='4'>
            <img    style={{cursor:'pointer'}}  src={'https://i.namu.wiki/i/dAv6usLmUadmFyoU1Uhb8q_bgOtLJP_QccBy4GarUT-j_gEq3UcCkv779tzLWsa4HfEvbLK7sCsXWl6I4TmswTBOVJ-5CFDkHk_H_CdbnvIN3ICP6FwdIefs7lb2HYWzTYRNne1aziBsXPxQjEsTjg.webp' } width='80%'/>
            <h4 style={{marginLeft:'100px'}}>{props.employee.title}</h4>
            <p style={{marginLeft:'80px', fontSize:'12px'}}>{props.employee.level}</p>
        </Col>    
  

    )
}


export default EmployeeList;