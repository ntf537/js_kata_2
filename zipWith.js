function zipWith(fn,a0,a1) {
  let k = 0;
  let res = new Array();
  if(a0.length > a1.length)
    {
      for(let i = 0; i < a1.length; i++)
        {
          res[k] = fn(a0[i], a1[i]);
          k++;
        }
    }else
      {
        for(let i = 0; i < a0.length; i++)
        {
          res[k] = fn(a0[i], a1[i]);
          k++;
        }
      }
  return res;
}
