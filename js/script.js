// MVC design pattern. First create a namespace, and then create a constructor function for the model with any necessary attributes and methods. Next, create the view constructor, with any relevant listeners. Finally, implement the controller constructor to link the model and view so that changes in either are passed to other.

(function(){
  $(function() {
    console.log(todo);
    controller.initialize(inputView);
  });


var inputPrompt = $('#add-items');

// namespacing object
var todo = {};

// Model Constructor will contain all attributes and methods
// todo.Model = function(view) {
//   this.view = view;
//   this.inputItem = [];
//   // this.createTodoListHTML = view.createTodoListHTML.bind(view);
// };

todo.Model = function() {
  this.inputItem = [];
  // holds a callback to notify other parts of the app that model has changed
  this.onChange = null;

  // this.createTodoListHTML = view.createTodoListHTML.bind(view);
};

  todo.Model.prototype.addOnChange = function(callback) {
    this.onChange = callback;
  };


  todo.Model.prototype.setData = function(newItem) {
    // push data to our array on the model object
    console.log(newItem.target.value);
    this.inputItem.push(newItem);
    // this.view.prependListItem(newItem);
    if (this.onChange !== null) {
      // run the callback function
      this.onChange(newItem);

    }
  };

  var model = new todo.Model();



// View Object Constructor for the main user input
todo.ViewItem = function() {
  this.element = document.getElementById('add-items');
  this.onInput = null;
};

  // event listener
  todo.ViewItem.prototype.addListenerUserInput = function() {
    // save view object as variable
    var self = this;

    // pass view obj as the parameter to model method setData()??
    // self.element.addEventListener('input', model.setData.bind(self));
    // self.element.addEventListener('input', model.setData.bind(model));

    $('#add-items').keydown(function(e) {
      if (e.keyCode == 13) {
        console.log(e.target.value);
        // model.setData.bind(model);
        // model.setData(e);
      }
    });
  };


var inputView = new todo.ViewItem();


todo.Controller = function() {
  model.onChange = model.setData.bind(model)
};

  todo.Controller.prototype.initialize = function(inputView) {
    // alert(this);
    console.log(inputView);
    inputView.addListenerUserInput();
  }

var controller = new todo.Controller();

})();
