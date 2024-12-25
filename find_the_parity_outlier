function findOutlier(integers){
  let even = 0;
  for(let i = 0; i < 3; i++)
    {
      if(integers[i] % 2 == 0)
        {
          even++;
        }
    }
  if(even == 3)
    {
      for(let i = 0; i < integers.length; i++)
        {
          if(integers[i] % 2 != 0)
            {
              return integers[i];
            }
        }
    }
  else if (even == 0)
    {
      for(let i = 0; i < integers.length; i++)
        {
          if(integers[i] % 2 == 0)
            {
              return integers[i];
            }
        }
    }
  else if (even == 1)
    {
      for(let i = 0; i < 3; i++)
        {
          if(integers[i] % 2 == 0)
            {
              return integers[i];
            }
        }
    }
  else if (even == 2)
    {
      for(let i = 0; i < 3; i++)
        {
          if(integers[i] % 2 != 0)
            {
              return integers[i];
            }
        }
    }
}
