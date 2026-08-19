# yha pr html ka structre ko dekho ge to saara kuch form ke andar hh height ka input weight ka input and jaise hi hm click karenege so isliye form ko select krna hoga iske liye inspect me ja kr dekho  
// form jb bhi summit hota hh to uski value url me chali jati hh to apne ko rokna hoga 
```form ko rokne ke liye 
parseInt isliye krte kyon ki value string me aati hh
hmmne result div bna rakha hh result ko select krke innerhtml se uska value updated krdenge if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  } aur hmmne span ke andr likha hhh 
```