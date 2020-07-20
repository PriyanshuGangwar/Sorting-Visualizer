

export function SelectionSortAnimations(array) {
    const animations = [],nc=0,ns=0;
    if (array.length <= 1) return array;
    SelectionSortHelper(array,animations,nc,ns);
    console.log(nc,ns);
    const final = [];
    final.push(animations,nc,ns);
    return final;
}

function SelectionSortHelper(arr, animations, nc, ns){
    let len = arr.length;
    var k = 0;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            animations.push([i,j]);
            nc = nc+1;
           // animations.push([i,j]);
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        animations.push([k++,min,arr[min],arr[i]]);
        if (min !== i) {
            ns++;
            //array[k++] = array[min];
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
        
    }
    //animations.push([k++, arr[len-1]]);
    
};

export function BubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    BubbleSortHelper(array,animations);
    const aux = array.slice();
    return animations;
}

function BubbleSortHelper(arr, animations){
    let len = arr.length;
    var k = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            animations.push([j,j+1]);
            if (arr[j] > arr[j+1]) {
                animations.push([j,j+1,arr[j+1],arr[j]]);
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;

            }
        }   
    }    
};


export function MergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations,) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function QuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function quickSortHelper(items, left, right, animations) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right, animations); 
      if (left < index - 1) { 
          quickSortHelper(items, left, index - 1, animations);
      }
      if (index < right) { 
          quickSortHelper(items, index, right, animations);
      }
  }  
}
function partition(items, left, right, animations) {
      var pi = Math.floor((right + left) / 2);
    var pivot   = items[pi], 
        i       = left, 
        j       = right; 

    while (i <= j) {
        while (items[i] < pivot) {
           animations.push([i,pi]);
            i++;
        }
        while (items[j] > pivot) {
          animations.push([j,pi]);
            j--;
        }
        
        if (i <= j) {
            animations.push([i,j,items[j],items[i]]);
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}


export function InsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  InsertionSortHelper(array,animations);
  return animations;
}

function InsertionSortHelper(inputArr, animations){

  let length = inputArr.length;
  
  
  for (let i = 1; i < length; i++) {
    const states = [];
      for (let m = 0; m < length; m++)
        states.push([-1,m,inputArr[m]]);

      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) {
          
          states[j+1][0] = 1;
          states[j+1][1] = j+1;
          states[j+1][2] = inputArr[j];
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
      }

      states[j+1][0] = 2;
      states[j+1][1] = j+1;
      states[j+1][2] = key;
      inputArr[j + 1] = key;
      animations.push(states);
  }
};




