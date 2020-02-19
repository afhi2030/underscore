(function() {
  'use strict';

  window._ = {};

  /*
   * 미리 완성된 _.identity 및 _.first function와 같이 나머지 함수도 각 함수 위에 적혀져 있는
   * 커멘트를 보고 함수를 완성하면 된다. 먼저 수도코드로 함수가 어떻게 작동하는지 완전히 이해한 후 함수를
   * 작성하는 것을 권장한다. 각 함수는 선행적으로 푼 함수들에 대한 이해가 필요한 경우가 있을 수 있기 때문에
   * 차례대로 완전히 이해하고 넘어가야 한다. 
   */

  // argument 자신을 리턴하는 함수
  _.identity = function(val) {
    return val;
  };

  // n 값이 주어지지 않은 경우(undefined) array의 첫 요소(element)를 반환(return)하고,
  // n 값이 주어지면 주어진 array의 처음부터(array의 처음은 1이 아닌 0) n개 전까지의(0부터 n전은 n개와 같음) 
  // 값을 반환하는 함수 
  _.first = function(array, n) {
    if (n === undefined) {
      return array[0];
    }

    return array.slice(0, n);
  };

  // _.first와 조건 패턴이 같지만 처음이 아닌 끝의 값을 반환하는 함수.
  _.last = function(array, n) {
  };

  // each 함수는 array 또는 object를 collection으로 받을 수 있다. 
  // 각 경우에 따라 결과 값으로 iterator(value, key, collection)을 부르면(call)하면 된다.
  // 반환 값 (return)이 없고, 단순히 iterator함수를 실행한다고 생각하면 된다. 
  _.each = function(collection, iterator) {
  };

  // 포문 (for loop) 대신에 each함수를 사용해서 푼 부분을 집중해서 이해하면 된다. 
  // 포문과 같은 효과를 어떻게 줄 수 있는지, 그럼에도 차이는 무엇인지 고민해보자. 
  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // 어레이를 반환한다.
  // '각' collection내의 요소들 중 test '함수'를 통과한 요소들이 어레이로 반환되게 하면 된다. 
  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
  };

  // 필터함수를 재사용하여 결과가 값이 테스트 함수를 통과하지 않은 것으로 반환하면 된다. 
  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
  };

  // 위에서 반복되는 요소들을 찾는 함수가 무엇인지 생각해보고,
  // 주어진 어레이의 각 요소들을 살펴본 후 반복된 요소가 없는 어레이로 모아 반환하는 함수
  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
  };

  // 어레이를 반환한다.
  // 주어진 collection의 각 요소마다 iterator함수를 적용시켜 어레이로 반환하는 함수
  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // 맵을 사용해서 벨류를 반환하는 함수 (답 적혀있음)
  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item) {
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //  
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //  
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //  
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.

  _.reduce = function(collection, iterator, accumulator) {
  };

  //----------------여기 까지-----------------------------------------------------------------------------------------


  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
  };


  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
