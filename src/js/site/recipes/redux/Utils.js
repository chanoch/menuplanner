 /**
* Move an object from one array to another by property .key === elementKey
* 
* @param {The key of the object to move} elementKey 
* @param {The array from which to move the object} sourceArray 
* @param {They array to which to move the object} targetArray 
*/
export function moveElement(elementKey, sourceArray, targetArray) {
   const element = sourceArray.find((currElement) => {
       return currElement.key === elementKey;
   });
   const updatedTargetArray = targetArray.slice(0);
   if(element) {
       updatedTargetArray.push(element);
   }
   const updatedSourceArray = sourceArray.filter((currElement) => {
       return currElement.key !== elementKey;
   });
   return {
       source: updatedSourceArray,
       target: updatedTargetArray,
   }
}

