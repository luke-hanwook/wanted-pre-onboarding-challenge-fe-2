/**
 * @class
 * @property {number} id        - 아이디(required)
 * @property {string} content   - 내용(required)
 * @property {boolean} isDone   - 완료여부(required)
 * @property {string} category  - 카테고리(required)
 * @property {Tag[]|undefined} [tags=null]     - 태그들(optional)
 */
class Todo {}

/**
 * @class
 * @property {number} id    - 아이디(required)
 * @property {string} name  - 태그명(requried)
 */
class Tag {}

/**
 * @class
 * @property {Todo[]} todos - 할일들
 */
class TodoManager {}
