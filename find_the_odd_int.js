function findOdd(A) {
  let k = 0;
  for(let i = 0; i < A.length; i++)
    {
      k = 0;
      for(let j = 0; j < A.length; j++)
        {
          if(A[i] == A[j])
            {
              k++
            }
        }
      if(k % 2 != 0)
        {
          return A[i];
        }
    }
}
