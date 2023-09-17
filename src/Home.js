

const Home= () => {

    return (
 <>
  <div className='main-bg'></div>
      
      <p style={{fontSize:'12px', textAlign:'center', color:'gray'}}>
        무한상사 2011년 상반기 야유회 사진 <br/>
        (왼쪽부터 각각 정대리, 길 인턴, 하 사원, 노 사원, 유 부장, 정 과장, 박 차장)
        
        </p>
      
      
      
        <div className='introduce'>
      
      
          <br/> <br/> <br/>
          <h1 style={{textAlign:'center', color:'gray'}}>무한상사 소개</h1>
          <table border={1} align='center' className='introTable'>
            <thead>
                <tr>
                  <th colSpan={2}>
                    <div className='tableImg'></div>
                  </th>
                 
                </tr>
            </thead>
      
            <tbody>
              <tr>
                <th>기업명</th>
                <td>무한상사(Muhan Company)</td>
              </tr>
      
              <tr>
                <th>국가</th>
                <td>대한민국</td>
              </tr>
      
              <tr>
                <th>모기업</th>
                <td>무한그룹</td>
              </tr>
      
              <tr>
                <th>설립일</th>
                <td>2005년 04월 23일</td>
              </tr>
      
              <tr>
                <th rowSpan={2}>존속기간</th>
                <td >영업3팀</td>
               
              </tr>
      
              <tr>
                
                <td>2005년 4월 23일 ~ </td>
              </tr>
      
              <tr>
                <th>기업규모</th>
                <td>소기업</td>
              </tr>
      
              <tr>
                <th>업종명</th>
                <td>무역업</td>
              </tr>
      
              <tr>
                <th>사원수</th>
                <td>7명</td>
              </tr>
      
              
      
            </tbody>
      
          </table>
      
          <br/> <br/> <br/>
      
        </div>

    </>

    

   

    )

}

export default Home;