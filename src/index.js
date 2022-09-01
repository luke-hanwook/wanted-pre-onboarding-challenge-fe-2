/**
 * @typedef {Object} TodoData
 * @property {string} content
 * @property {boolean} isDone
 * @property {string} category
 * @property {Tag[]|undefined} [tags=null]
 */

/**
 * @typedef {Object} TagData
 * @property {string} name
 */

/**
 * @class
 * @property {number} id                       - 아이디(required) 생성시 자동으로 부여된다.
 * @property {string} content                  - 내용(required)
 * @property {boolean} isDone                  - 완료여부(required)
 * @property {string} category                 - 카테고리(required)
 * @property {Tag[]|undefined} [tags=null]     - 태그들(optional)
 */
class Todo {
  /**
   * Todo 인스턴스를 생성한다.
   * @param {TodoData} data
   */
  constructor(data) {}

  /**
   * 할일의 모든 속성 수정
   * @param {TodoData} data
   */
  set(data) {}

  /**
   * 할일의 특정 태그 수정
   * @param {number} id
   */
  setTag(id) {}
}

/**
 * @class
 * @property {number} id    - 아이디(required) 생성시 자동으로 부여된다.
 * @property {string} name  - 태그명(requried)
 */
class Tag {
  /**
   * Tag 인스턴스를 생성한다.
   * @param {TagData} data
   */
  constructor(data) {}

  /**
   * 태그의 모든 속성 수정
   * @param {TagData} data
   */
  set(data) {}
}

/**
 * @class
 * @property {Todo[]} todos - 할일들
 */
class TodoManager {
  /**
   * 생성 시 todos는 자동으로 초기화 된다.
   */
  constructor() {}
  /**
   * CREATE
   * 할 일을 추가할 수 있다.
   * 내용없이 추가할 수 없다.
   * @param {Todo} todo
   */
  create(todo) {}

  /**
   * READ
   * if ID가 undefined ? 모든 할 일을 조회할 수 있다.
   * if ID가 존재한다면 ? ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number|undefined} [id]
   * @return {Todo[]}
   */
  read(id) {}

  /**
   * UPDATE
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {number} id
   * @param {Todo} todo
   */
  update(id, todo) {}

  /**
   * UPDATE
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id
   * @param {number} tagId
   */
  updateTag(id, tagId) {}

  /**
   * DELETE
   * if ID가 존재한다면 ? ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * if ID가 undefined ? 모든 할 일을 제거할 수 있다.
   * @param {number|undefined} [id]
   */
  delete(id) {}

  /**
   * DELETE
   * if tagId가 존재한다면 ? 특정 할 일의 특정 태그를 삭제할 수 있다.
   * if tagId가 undefined ? 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {number} id
   * @param {number|undefined} [tagId]
   */
  deleteTag(id, tagId) {}
}
