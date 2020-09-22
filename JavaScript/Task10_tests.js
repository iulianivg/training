// You can use Test.expect(boolean, [optional] string) to test your code
Test.expect(isSolved([[0,0,1],
                      [0,1,2],
                      [2,1,0]]) === -1);
Test.expect(isSolved([[1,2,1],
                      [1,1,2],
                      [2,1,2]]) === 0);
Test.expect(isSolved([[1,2,0],
                      [0,1,2],
                      [0,0,1]]) === 1);
Test.expect(isSolved([[2,2,2],
                      [0,1,1],
                      [1,0,0]]) === 2);
Test.expect(isSolved([[2,1,2],
                      [1,1,2],
                      [0,1,0]]) === 1);
Test.expect(isSolved([[2,0,2],
                      [2,1,1],
                      [1,2,1]]) === -1);
Test.expect(isSolved([[2,1,1],
                      [0,1,1],
                      [2,2,2]]) === 2);
