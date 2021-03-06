import styled from "styled-components";
export const Profileskills = styled.div`
  padding: 50px 0;
  overflow: hidden;
 
`;

 export const Profile = styled.div`
   width: 50%;
   float: left;
   @media (max-width: 800px) {
       width:100%;
       margin:auto

   }
 `;

export const Profilelist = styled.ul`
  list-style: none;
  text-align: start;
  line-height: 1.6;
  @media (max-width: 800px) {
 
  }
`;

export const Profileitem = styled.li`
    margin-bottom: 8px;
  `

export const Profileitemspan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
  `

export const Profileitemspanweb= styled.span`
    font-weight: normal;
    color: #eb5424;
  `


export const Skills = styled.span`
  width: 50%;
  float: left;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

  
export const Skillsdesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
  `

 
export const Bar= styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
  `


export const Title= styled.span`
    float: left;
`

export const PERC= styled.span`
    float: right;
    margin-right: 100px;
  `


export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
  `

export const Parentspan = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => props.one==="1"?"80%":props => props.one==="2"?"70%":"60%"};
`;

//   .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
//   }

//   .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
//   }

//   .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
//   }


export const Maintitle = styled.h2`
    font-size: 40px;
    margin-bottom: 20px;
  `


export const Maintitlespan= styled.span`
    font-weight: normal;
  
`;
export const Container = styled.div`
 width:90%;
 margin:auto;
 padding:15px
`;