/*
    문제 설명   
    대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
    'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

    예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

    제한사항
    문자열 s의 길이 : 50 이하의 자연수
    문자열 s는 알파벳으로만 이루어져 있습니다.

    입출력 예
    s	        answer
    "pPoooyY"	true
    "Pyy"	    false
    
    입출력 예 설명
    입출력 예 #1
    'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

    입출력 예 #2
    'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

*/


function solution(s){
    // let answer = true;
    let pSize = 0;
    let ySize = 0;
    
    // 정규 표현식 사용 
    let pNum = s.match(/p|P/g);
    let yNum = s.match(/y|Y/g);
    
    // p,y 문자열이 없을 경우 length가 undefind이므로 전처리
    if (pNum != null) {
        pSize = pNum.length
    }
    if (yNum != null) {
        ySize = yNum.length
    }
    
    // p,y 문자열 개수 비교 
    // if (pSize === ySize) {
    //     answer = true
    // }else if (pSize !== ySize) {
    //     answer = false
    // } 
    return pSize === ySize;
}

// for 루프에서 처리하는 방법
function solution2(s) {
    let pNum = 0;
    let yNum = 0; 

    for(const string of s) {
        if (string.includes('p') || string.includes('P')) {
            pNum++
        }
        if (string.includes('y') || string.includes('Y')) {
            yNum++
        }
    }
    return pNum === yNum
}