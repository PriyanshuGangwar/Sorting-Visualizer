

export function SelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    SelectionSortHelper(array,animations);
    
    return animations;
}

function SelectionSortHelper(arr, animations){
    let len = arr.length;
    var k = 0;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            animations.push([i,j]);
           // animations.push([i,j]);
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        animations.push([k++,min,arr[min],arr[i]]);
        if (min !== i) {
            
            //array[k++] = array[min];
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
        
    }
    //animations.push([k++, arr[len-1]]);
    
};


