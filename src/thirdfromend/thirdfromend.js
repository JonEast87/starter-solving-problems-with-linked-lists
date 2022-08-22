const LinkedList = require('../lib/linkedList')

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
	/* 
  if the list is empty then return null
  
  declare a variable named pointer1 and initialize it to the head ot the list
  declare a variable named i and initialize it to 0
  while i is less than 2 and the next pointer of pointer1 is not null do
    set pointer1 to its next pointer
    increment 1
  if i is less than 2 then return null

  declare a variable named pointer2 and initialize it to the head of the list
  while the next pointer of pointer1 is not null do
    set pointer1 to its next pointer
    set pointer2 to its next pointer

  return pointer2
  */

	if (list.length === 0) {
		return null
	}

	let pointer1 = list.head
	let i = 0
	while (i < 2 && pointer1.next !== null) {
		pointer1 = pointer1.next
		i++
	}
	if (i < 2) {
		return null
	}

	let pointer2 = list.head
	while (pointer1.next !== null) {
		pointer1 = pointer1.next
		pointer2 = pointer2.next
	}

	return pointer2
}

module.exports = thirdFromEnd
