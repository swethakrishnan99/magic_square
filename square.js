$(document).ready(function(){
      $(".check").click(function(){
          var array=[];
          var square=[];
          var array_sum =[];
          var k = 0;
          var stop = 0;
          //generating 1D array from the table
          $(".t").each(function()
              {
                  array.push(Number($(this).val()));
                  if ($(this).val()==""){ stop=1;}
              });
              console.log(stop);
          if(stop==0)
             {
                //converting 1D array to 2D array
                for( i=0; i<3; i++)
                   {
                      square [i] = [];
                      for(j=0; j<3; j++)
                        {
                           square [i][j] = array [k];
                           k++;
                        }
                   }
                //generating an array of sums of each rows, columns, primary diagonal and secondary diagonal
                console.log(array);
                var sum_raw =0;
                var sum_column =0;
                var sum_prim =0;
                var sum_secn=0;
                var k=0;
                for( i=0; i<3; i++)
                   {
                      for(j=0; j<3; j++)
                         {
                            sum_raw += square[i][j];
                            sum_column += square[j][i];
                            if (i==j)
                               {
                                   sum_prim+=square[i][j];
                               }
                            if (i+j==2)
                               {
                                   sum_secn +=square[i][j];
                               }
                         }
                      array_sum [k] = sum_raw;
                      k++;
                      array_sum [k] = sum_column;
                      k++;
                      sum_raw=0;
                      sum_column =0;
                   }
                   array_sum [k] = sum_prim;
                   k++;
                   array_sum [k] = sum_secn;
                    //checking all sums are equal or not
                    function magic(sum)
                    {
                        return sum == array_sum[0];
                    }
                    array_sum.every(magic)? $("#result").text("It's a magic square!"): $("#result").text("It's not a Magic Square");
                    $("#result").show();
                }
            else
                {
                    alert("enter numbers");
                }
        });
        $(".reset").click(function(){
              $(".t").each(function(){
                    $(this).val( this.defaultvalue);
                    $("#result").hide();
              });
      });
});
