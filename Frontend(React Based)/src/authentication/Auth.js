export const setAdmin=()=>{
    window.localStorage.setItem('usertype', 'admin');
      window.localStorage.setItem('auth', true);
      
}
// export const setVoter=()=>{
//     window.localStorage.setItem('usertype', 'voter');
//       window.localStorage.setItem('auth', true);
     
// }
export const setIntake=()=>{
    window.localStorage.setItem('usertype', 'intake');
      window.localStorage.setItem('auth', true);
     
}
export const validAdmin=()=>{
    if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="admin")
    {
        return true;
    }
    else {
        return false;
    }
     
}
export const validIIntake=()=>{
    if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake1")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake2")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake3")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake4")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake5")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake6")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake7")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake8")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake9")
    {
        return true;
    }
    else if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="intake10")
    {
        return true;
    }
    else {
        return false;
    }
     
}
export const validVoter=()=>{
    if(window.localStorage.getItem('auth')==="true" && window.localStorage.getItem('usertype')==="voter")
    {
        return true;
    }
    else {
        return false;
    }
     
}
export const logOut= node =>{
    console.log(JSON.stringify(window.localStorage.getItem('auth')));
    window.localStorage.clear();
    
}

// seperate intake 

export const setIntake1=()=>{
    window.localStorage.setItem('usertype', 'intake1');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake2=()=>{
    window.localStorage.setItem('usertype', 'intake2');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake3=()=>{
    window.localStorage.setItem('usertype', 'intake3');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake4=()=>{
    window.localStorage.setItem('usertype', 'intake4');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake5=()=>{
    window.localStorage.setItem('usertype', 'intake5');
      window.localStorage.setItem('auth', true);
}


export const setIntake6=()=>{
    window.localStorage.setItem('usertype', 'intake6');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake7=()=>{
    window.localStorage.setItem('usertype', 'intake7');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake8=()=>{
    window.localStorage.setItem('usertype', 'intake8');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake9=()=>{
    window.localStorage.setItem('usertype', 'intake9');
      window.localStorage.setItem('auth', true);
     
}
export const setIntake10=()=>{
    window.localStorage.setItem('usertype', 'intake10');
      window.localStorage.setItem('auth', true);
}

// 

// for different booth/voter
export const setVoter1=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '01');
    //   console.log(window.localStorage.getItem('boothNo'));
     
}
export const setVoter2=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '02');
}
export const setVoter3=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '03');  
}
export const setVoter4=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '04');  

     
}
export const setVoter5=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '05');  

     
}
export const setVoter6=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '06');  

     
}
export const setVoter7=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '07');  

     
}
export const setVoter8=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', "08");  

     
}
export const setVoter9=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '09');  

     
}
export const setVoter10=()=>{
    window.localStorage.setItem('usertype', 'voter');
      window.localStorage.setItem('auth', true);
      window.localStorage.setItem('boothNo', '10');  
}
